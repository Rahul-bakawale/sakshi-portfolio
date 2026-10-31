import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import type { HeaderProps } from '../../types'
import SocialLinks from '../common/SocialLinks'

function Header({ name, socials }: HeaderProps) {
  return (
    <AppBar
      component="header"
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 247, 238, 0.92)',
        color: 'text.primary',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(22, 22, 22, 0.06)',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1220, px: { xs: 2, sm: 3 } }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 'auto', sm: 76 },
            py: { xs: 1.5, sm: 0 },
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'stretch', sm: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 1.5, sm: 2 },
          }}
        >
          <Box>
            <Typography
              component="a"
              href="#top"
              aria-label={`${name}, home`}
              sx={{
                color: 'inherit',
                fontSize: { xs: 16, sm: 18 },
                fontWeight: 800,
                letterSpacing: '-0.05em',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-end', sm: 'flex-start' }, gap: 1 }}>
            <SocialLinks socials={socials} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
