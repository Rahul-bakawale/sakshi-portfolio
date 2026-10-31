import { Alert, Box, CircularProgress, Stack, Typography } from '@mui/material'
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist'
import type { PDFDocumentProxy } from 'pdfjs-dist'
import { useEffect, useRef, useState } from 'react'
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import type { PdfPageProps, PdfPreviewProps } from '../../types'

GlobalWorkerOptions.workerSrc = pdfWorkerUrl

function PdfPage({ page, pageNumber }: PdfPageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) {
      setHasError(true)
      return
    }

    const viewport = page.getViewport({ scale: 2 })
    canvas.width = Math.ceil(viewport.width)
    canvas.height = Math.ceil(viewport.height)

    let isCancelled = false
    const renderTask = page.render({ canvasContext: context, viewport })

    void renderTask.promise.catch(() => {
      if (!isCancelled) setHasError(true)
    })

    return () => {
      isCancelled = true
      renderTask.cancel()
    }
  }, [page])

  if (hasError) {
    return <Alert severity="error">This page of the PDF could not be displayed.</Alert>
  }

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      role="img"
      aria-label={`${pageNumber} page of the ${'PDF'}`}
      sx={{ display: 'block', width: '100%', height: 'auto', backgroundColor: '#fff' }}
    />
  )
}

function PdfPreview({ src, title }: PdfPreviewProps) {
  const [pages, setPages] = useState<PdfPageProps['page'][]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isCancelled = false
    let document: PDFDocumentProxy | undefined

    const loadPdf = async () => {
      setIsLoading(true)
      setHasError(false)
      setPages([])

      try {
        const loadedDocument = await getDocument(src).promise
        document = loadedDocument
        const loadedPages = await Promise.all(
          Array.from({ length: loadedDocument.numPages }, (_, index) => loadedDocument.getPage(index + 1)),
        )

        if (!isCancelled) {
          setPages(loadedPages)
          setIsLoading(false)
        }
      } catch {
        if (!isCancelled) {
          setHasError(true)
          setIsLoading(false)
        }
      }
    }

    void loadPdf()

    return () => {
      isCancelled = true
      if (document) void document.destroy()
    }
  }, [src])

  return (
    <Box
      role="region"
      aria-label={`${title} PDF preview`}
      aria-busy={isLoading}
      tabIndex={0}
      sx={{
        width: '100%',
        height: { xs: '62svh', sm: '72svh' },
        minHeight: 360,
        overflowY: 'auto',
        backgroundColor: '#fff',
        scrollbarWidth: 'thin',
        scrollbarColor: 'transparent transparent',
        '&::-webkit-scrollbar': { width: 8 },
        '&::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'transparent',
          borderRadius: 8,
        },
        '&:hover, &:focus, &:focus-within': {
          scrollbarColor: '#a8a8a8 transparent',
        },
        '&:hover::-webkit-scrollbar-thumb, &:focus::-webkit-scrollbar-thumb, &:focus-within::-webkit-scrollbar-thumb':
          {
            backgroundColor: '#a8a8a8',
          },
      }}
    >
      {isLoading && (
        <Stack
          spacing={2}
          sx={{
            minHeight: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size={28} aria-label="Loading PDF" />
          <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>Loading document…</Typography>
        </Stack>
      )}
      {hasError && (
        <Alert severity="error" sx={{ m: 2 }}>
          The PDF could not be displayed. Please check that the document is available.
        </Alert>
      )}
      {!isLoading && !hasError && (
        <Stack spacing={0} sx={{ width: '100%', backgroundColor: '#fff' }}>
          {pages.map((page) => (
            <PdfPage key={page.pageNumber} page={page} pageNumber={page.pageNumber} />
          ))}
        </Stack>
      )}
    </Box>
  )
}

export default PdfPreview
