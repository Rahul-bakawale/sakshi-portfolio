import { Box, Typography } from '@mui/material'
import type { AboutSectionProps } from '../../types'

function AboutSection({ about }: AboutSectionProps) {
  return (
    <Box
      component="section"
      aria-labelledby="about-title"
      sx={{
        width: '100%',
        maxWidth: 1270,
        mx: 'auto',
        pb: { xs: 7, md: 8 },
        '@media (min-width: 1536px)': {
          width: 'calc(100% + 98px)',
          ml: '-49px',
        },
      }}
    >
      <Typography
        id="about-title"
        component="h2"
        sx={{
          mb: '20px',
          color: 'text.primary',
          fontSize: { xs: 28, sm: 36, lg: 48 },
          fontWeight: 600,
          lineHeight: 1.6,
          letterSpacing: '-0.03em',
          textAlign: 'center',
        }}
      >
        More About Me
      </Typography>
      <Box
        sx={{
          width: '100%',
          minHeight: { lg: 465 },
          display: 'flex',
          alignItems: 'center',
          px: { xs: 3, sm: 5, lg: '55px' },
          py: { xs: 3, sm: 4, lg: '40px' },
          backgroundColor: 'background.paper',
          borderRadius: 0,
        }}
      >
        <Typography
          sx={{
            width: '100%',
            maxWidth: 1160,
            mx: 'auto',
            color: 'text.secondary',
            fontSize: { xs: 18, sm: 24, lg: 48 },
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: 0,
            textAlign: 'left',
          }}
        >
          {about.text}
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutSection
