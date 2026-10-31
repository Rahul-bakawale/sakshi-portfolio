import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material'
import type { FooterProps } from '../../types'
import SocialLinks from '../common/SocialLinks'

function Footer({ profile, socials }: FooterProps) {
  return (
    <Box component="footer" sx={{ position: 'relative', overflow: 'hidden', backgroundColor: '#161616', color: '#fff' }}>
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: -230,
          left: -150,
          width: 400,
          height: 400,
          border: '18px solid #292929',
          borderRadius: '50%',
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: -210,
          right: -210,
          width: 390,
          height: 390,
          border: '18px solid #292929',
          borderRadius: '50%',
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1220,
          position: 'relative',
          zIndex: 1,
          px: { xs: 2, sm: 3 },
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Typography sx={{ textAlign: 'center', fontSize: { xs: 15, sm: 18 }, color: '#f1f1f1' }}>
          Ready for the work?
        </Typography>
        <Typography
          component="h2"
          sx={{
            mt: 1,
            mb: { xs: 4, md: 5 },
            background: 'linear-gradient(90deg, #fff 20%, #8e8e8e 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: { xs: 58, sm: 84, md: 120 },
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.07em',
            textAlign: 'center',
          }}
        >
          Let&apos;s Talk
        </Typography>
        <Grid
          container
          sx={{
            maxWidth: 960,
            mx: 'auto',
            border: '1px solid #363636',
            backgroundColor: 'rgba(255, 255, 255, 0.035)',
          }}
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 2.5, sm: 3.5 } }}>
            <Typography sx={{ mb: 2, fontSize: 13, fontWeight: 700 }}>
              Currently Open for Work
            </Typography>
            <Box sx={{ display: 'grid', gap: 1.25 }}>
              <Link
                href={`mailto:${profile.email}`}
                underline="hover"
                sx={{ color: '#e5e5e5', fontSize: 13, overflowWrap: 'anywhere' }}
              >
                {profile.email}
              </Link>
              <Link href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`} underline="hover" sx={{ color: '#e5e5e5', fontSize: 13 }}>
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
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <SocialLinks socials={socials} dark />
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ display: { xs: 'none', md: 'block' }, maxWidth: 960, mx: 'auto', mt: 5, borderColor: '#292929' }} />
      </Container>
    </Box>
  )
}

export default Footer
