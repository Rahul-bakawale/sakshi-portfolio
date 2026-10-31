import { Box, Grid, Typography } from '@mui/material'
import AppButton from '../common/AppButton'
import AppImage from '../common/AppImage'
import type { HeroProps } from '../../types'

function Hero({ profile, resumeHref }: HeroProps) {
  return (
    <Box
      id="top"
      sx={{
        position: 'relative',
        pt: { xs: 3, sm: 5, md: 7 },
        pb: { xs: 5, sm: 7, md: 9 },
      }}
    >
      <Box
        component="article"
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1120,
          mx: 'auto',
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: '#fff',
          borderRadius: 1,
          boxShadow: '0 16px 50px rgba(32, 25, 16, 0.045)',
        }}
      >
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <AppImage
              src={profile.photo}
              alt={`${profile.name}, UX/UI designer`}
              aspectRatio="0.72 / 1"
              borderRadius={1}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              component="p"
              sx={{ color: '#575757', fontSize: { xs: 25, sm: 32, md: 42 }, lineHeight: 1.12 }}
            >
              Hey, I am
            </Typography>
            <Typography
              component="h1"
              sx={{
                mt: 0.5,
                fontSize: { xs: 38, sm: 54, md: 75 },
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.055em',
                overflowWrap: 'anywhere',
              }}
            >
              {profile.name}
            </Typography>
            <Typography
              sx={{
                mt: 2,
                maxWidth: 480,
                color: 'text.secondary',
                fontSize: { xs: 14, sm: 15 },
                lineHeight: 1.8,
              }}
            >
              {profile.intro}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <AppButton
                label="Download Resume"
                href={resumeHref}
                download={profile.resumeUrl}
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="span"
        sx={{
          position: 'absolute',
          zIndex: 2,
          right: { xs: 12, sm: 55, md: 100 },
          bottom: { xs: 16, sm: 30, md: 45 },
          px: 2,
          py: 0.75,
          color: '#fff',
          backgroundColor: 'secondary.main',
          borderRadius: '999px',
          fontSize: 11,
          fontWeight: 700,
          boxShadow: '0 5px 16px rgba(0, 166, 81, 0.2)',
        }}
      >
        {profile.role}
      </Box>
    </Box>
  )
}

export default Hero
