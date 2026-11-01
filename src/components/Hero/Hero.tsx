import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { Box, Typography } from '@mui/material'
import AppButton from '../common/AppButton'
import AppImage from '../common/AppImage'
import type { HeroProps } from '../../types'

function Hero({ profile, resumeHref }: HeroProps) {
  return (
    <Box
      id="top"
      sx={{
        position: 'relative',
        pb: { xs: 6, md: 9 },
      }}
    >
      <Box
        component="article"
        sx={{
          position: 'relative',
          maxWidth: 1220,
          width: '100%',
          mx: 'auto',
          '@media (min-width: 1200px)': {
            width: 'calc(100% + 48px)',
            ml: '-24px',
          },
          p: { xs: 2, sm: 3, md: '30px' },
          backgroundColor: 'background.paper',
          borderRadius: 0,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'minmax(0, 579fr) minmax(0, 531fr)' },
            columnGap: { xs: 0, lg: '50px' },
            rowGap: { xs: 3, lg: 0 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ filter: 'grayscale(100%)', minWidth: 0 }}>
            <AppImage
              src={profile.photo}
              alt={`${profile.name}, UX/UI designer`}
              aspectRatio={{ xs: '0.72 / 1', lg: '579 / 549' }}
              borderRadius={0}
            />
          </Box>
          <Box
            sx={{
              minWidth: 0,
              alignSelf: { lg: 'start' },
              mt: { lg: '210px' },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              component="p"
              sx={{
                m: 0,
                color: 'text.primary',
                fontSize: { xs: 36, sm: 52, lg: 75 },
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Hey, I am
            </Typography>
            <Typography
              component="h1"
              sx={{
                m: 0,
                fontSize: { xs: 38, sm: 54, lg: 75 },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                overflowWrap: 'anywhere',
              }}
            >
              {profile.name}
            </Typography>
            <Typography
              sx={{
                mt: { xs: 2, lg: 2 },
                maxWidth: 531,
                color: 'text.secondary',
                fontSize: { xs: 16, lg: 18 },
                lineHeight: 1.6,
                letterSpacing: 0,
              }}
            >
              {profile.intro}
            </Typography>
            <Box
              sx={{
                mt: { xs: 3, lg: '45px' },
                '& .MuiButton-root': {
                  width: { xs: 'auto', sm: 255 },
                  minHeight: 55,
                  px: '30px',
                  py: '10px',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 0,
                  color: 'primary.main',
                  backgroundColor: 'background.paper',
                  gap: '10px',
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
                label="Download Resume"
                href={resumeHref}
                download={profile.resumeUrl}
                variant="outlined"
                endIcon={<FileDownloadOutlinedIcon />}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
