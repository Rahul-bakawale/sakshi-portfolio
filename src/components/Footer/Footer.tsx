import { Box, Container, Grid, Link, Typography } from '@mui/material'
import emailIcon from '../../assets/icons/email.svg'
import phoneIcon from '../../assets/icons/PhoneCall.svg'
import type { FooterProps } from '../../types'
import SocialLinks from '../common/SocialLinks'

function Footer({ profile, socials }: FooterProps) {
  return (
    <Box component="footer" sx={{ backgroundColor: '#131313', color: '#fff' }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1920,
          px: { xs: 2, sm: 3 },
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: { xs: 22, sm: 32, md: 40, lg: 48 },
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#f1f1f1',
          }}
        >
          Ready for the work?
        </Typography>
        <Typography
          component="h2"
          sx={{
            mt: 1,
            mb: { xs: 4, md: 5 },
            background: 'linear-gradient(93.93deg, #FFFFFF 35.88%, #999999 93.36%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: { xs: 58, sm: 84, md: 120, lg: 'clamp(120px, 15.1vw, 290px)' },
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            width: '100%',
          }}
        >
          Let&apos;s Talk
        </Typography>
        <Grid
          container
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            border: '1px solid #363636',
            backgroundColor: 'rgba(255, 255, 255, 0.035)',
          }}
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 2.5, sm: 3.5 } }}>
            <Typography sx={{ mb: 2, fontSize: 13, fontWeight: 700 }}>
              Currently Open for Work
            </Typography>
            <Box sx={{ display: 'grid', gap: 2 }}>
              <Link
                href={`mailto:${profile.email}`}
                underline="hover"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  color: '#e5e5e5',
                  fontSize: 18,
                  lineHeight: 1.6,
                  overflowWrap: 'anywhere',
                }}
              >
                <Box component="img" src={emailIcon} alt="" aria-hidden="true" sx={{ width: 32, height: 32, flex: '0 0 32px' }} />
                {profile.email}
              </Link>
              <Link
                href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
                underline="hover"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  color: '#e5e5e5',
                  fontSize: 18,
                  lineHeight: 1.6,
                }}
              >
                <Box component="img" src={phoneIcon} alt="" aria-hidden="true" sx={{ width: 32, height: 32, flex: '0 0 32px' }} />
                {profile.phone}
              </Link>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              p: { xs: 2.5, sm: 3.5 },
              borderLeft: { xs: 'none', md: '1px solid #363636' },
              borderTop: { xs: '1px solid #363636', md: 'none' },
            }}
          >
            <Typography sx={{ mb: 2, fontSize: 13, fontWeight: 700 }}>Connect on socials</Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: 1,
                overflowX: 'auto',
                '& .MuiChip-root': { flexShrink: 0 },
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
            >
              <SocialLinks socials={socials} dark />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
