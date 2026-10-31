import { Box, Grid, Typography } from '@mui/material'
import AppButton from './AppButton'
import AppImage from './AppImage'
import type { ProjectCardProps } from '../../types'

function ProjectCard({ label, title, description, image, link, imageAlt }: ProjectCardProps) {
  return (
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
              href={link}
              target="_blank"
              variant="outlined"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProjectCard
