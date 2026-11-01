import CloseIcon from '@mui/icons-material/Close'
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import resumePdf from '../../assets/resume/Sakshi_Gupta_Resume.pdf?url'
import AppButton from './AppButton'
import AppImage from './AppImage'
import PdfPreview from './PdfPreview'
import type { ProjectCardProps } from '../../types'

function ProjectCard({
  label,
  title,
  description,
  image,
  imageAlt,
}: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Box
        component="article"
        sx={{
          minHeight: { xl: 597 },
          p: { xs: 2, sm: 2.5, lg: '32px' },
          backgroundColor: 'background.paper',
          borderRadius: 0,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              md: 'repeat(2, minmax(0, 1fr))',
              xl: '536px 578px',
            },
            columnGap: { md: 4, xl: '62px' },
            height: { lg: 533 },
            minHeight: { xs: 0, xl: 533 },
            justifyContent: { xl: 'space-between' },
            alignItems: 'stretch',
            rowGap: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ order: { xs: 0, md: 1, xl: 2 }, minWidth: 0 }}>
            <AppImage
              src={image}
              alt={imageAlt}
              aspectRatio={{ xs: '1.22 / 1', xl: '578 / 533' }}
              borderRadius={0}
            />
          </Box>
          <Box
            sx={{
              order: { xs: 1, md: 0, xl: 1 },
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
            }}
          >
            <Typography
              component="p"
              sx={{
                m: 0,
                color: 'text.secondary',
                fontSize: { xs: 14, xl: 20 },
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {label}
            </Typography>
            <Typography
              component="h3"
              sx={{
                m: 0,
                fontSize: { xs: 22, sm: 26, xl: 32 },
                fontWeight: 600,
                lineHeight: 1.6,
                letterSpacing: '-0.03em',
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                m: 0,
                color: 'text.secondary',
                fontSize: { xs: 15, xl: 18 },
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {description}
            </Typography>
            <Box
              sx={{
                mt: { xs: 2, md: 'auto' },
                pt: { md: 2 },
                '& .MuiButton-root': {
                  width: { xs: 'auto', sm: 239 },
                  minHeight: 55,
                  px: '30px',
                  py: '10px',
                  gap: '10px',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 0,
                  color: 'primary.main',
                  backgroundColor: 'background.paper',
                  fontSize: 18,
                  fontWeight: 600,
                  lineHeight: 1.2,
                  '& .MuiButton-endIcon': { ml: 0 },
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'primary.main',
                    color: '#fff',
                  },
                },
              }}
            >
              <AppButton
                label="View Case Study"
                onClick={() => setDialogOpen(true)}
                variant="outlined"
                ariaLabel={`View ${title} case study PDF`}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="lg"
        aria-labelledby={`case-study-title-${label.replace(/\s+/g, '-').toLowerCase()}`}
        sx={{
          '& .MuiDialog-paper': {
            border: 0,
            outline: 0,
            boxShadow: 'none',
            borderRadius: 2,
            overflow: 'hidden',
          },
        }}
      >
        <DialogTitle
          id={`case-study-title-${label.replace(/\s+/g, '-').toLowerCase()}`}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, pr: 1.5 }}
        >
          <Box>
            <Typography component="span" sx={{ display: 'block', color: 'text.secondary', fontSize: 11 }}>
              {label}
            </Typography>
            <Typography component="span" sx={{ display: 'block', mt: 0.25, fontSize: { xs: 17, sm: 20 }, fontWeight: 700 }}>
              {title}
            </Typography>
          </Box>
          <IconButton
            onClick={() => setDialogOpen(false)}
            aria-label="Close case study"
            sx={{ '& .MuiSvgIcon-root': { width: 24, height: 24, fontSize: 24 } }}
          >
            <CloseIcon sx={{ width: 24, height: 24 }} />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, backgroundColor: '#fff' }}>
          {dialogOpen && <PdfPreview src={resumePdf} title={title} />}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ProjectCard
