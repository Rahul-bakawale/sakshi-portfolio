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
        pt: { xs: 3, sm: 5, lg: '128px' },
        pb: { xs: 6, sm: 8, md: 9 },
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
          backgroundColor: '#fff',
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
              minHeight: { lg: 342 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              component="p"
              sx={{
                color: '#575757',
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
                mt: 0.5,
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
                mt: { xs: 2, lg: 2.5 },
                maxWidth: 531,
                color: '#575757',
                fontSize: { xs: 16, lg: 18 },
                lineHeight: 1.6,
                letterSpacing: 0,
              }}
            >
              {profile.intro}
            </Typography>
            <Box
              sx={{
                mt: { xs: 3, lg: 4 },
                '& .MuiButton-root': {
                  width: { xs: 'auto', sm: 255 },
                  minHeight: 55,
                  px: { xs: 2, sm: '30px' },
                  py: '10px',
                  border: '1px solid #131313',
                  borderRadius: 0,
                  color: '#131313',
                  fontSize: 14,
                  fontWeight: 500,
                  '&:hover': { borderColor: '#131313' },
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
      <Box
        component="span"
        sx={{
          position: 'absolute',
          zIndex: 2,
          right: { xs: 12, sm: 55, lg: '10%' },
          bottom: { xs: 18, sm: 30, lg: 28 },
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: { xs: 'auto', lg: 171 },
          height: { xs: 'auto', lg: 50 },
          boxSizing: 'border-box',
          px: { xs: '14px', lg: '20px' },
          color: '#fff',
          backgroundColor: '#039754',
          borderRadius: '60px',
          fontSize: { xs: 13, sm: 14, lg: 18 },
          fontWeight: 500,
          lineHeight: { xs: '20px', lg: '30px' },
          py: { xs: '8px', lg: '10px' },
          '& svg': {
            position: 'absolute',
            left: -13,
            top: -12,
            color: '#039754',
            width: 24,
            height: 24,
            transform: 'rotate(-18deg)',
          },
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3.3 2.2 20.7 9.7c.8.35.75 1.5-.08 1.8l-6.42 2.35-2.35 6.42c-.3.83-1.45.88-1.8.08L2.2 3.3c-.35-.8.3-1.45 1.1-1.1Z"
            fill="#039754"
          />
        </svg>
        {profile.role}
      </Box>
    </Box>
  )
}

export default Hero
