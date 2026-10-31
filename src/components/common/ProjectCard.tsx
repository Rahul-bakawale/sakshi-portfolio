import CloseIcon from '@mui/icons-material/Close'
import { Box, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material'
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
          p: { xs: 2, sm: 2.5, md: 3 },
          backgroundColor: 'background.paper',
          borderRadius: 1,
          position: 'relative',
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 4 }} rowSpacing={{ xs: 2, md: 0 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 0, md: 1 } }}>
            <AppImage
              src={image}
              alt={imageAlt}
              aspectRatio="1.22 / 1"
              borderRadius={1}
            />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ order: { xs: 1, md: 0 }, display: 'flex', flexDirection: 'column' }}
          >
            <Typography
              component="p"
              sx={{ color: 'text.secondary', fontSize: 9, fontWeight: 600, letterSpacing: '0.04em' }}
            >
              {label}
            </Typography>
            <Typography
              component="h3"
              sx={{
                mt: 1,
                fontSize: { xs: 18, sm: 20 },
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: '-0.03em',
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                mt: 1.25,
                color: 'text.secondary',
                fontSize: { xs: 12, sm: 13 },
                lineHeight: 1.75,
              }}
            >
              {description}
            </Typography>
            <Box sx={{ mt: { xs: 2, md: 'auto' }, pt: { md: 2 } }}>
              <AppButton
                label="View Case Study"
                onClick={() => setDialogOpen(true)}
                variant="outlined"
                ariaLabel={`View ${title} case study PDF`}
              />
            </Box>
          </Grid>
        </Grid>
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
