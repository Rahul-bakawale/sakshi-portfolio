import { AppBar, Box, Container, Toolbar } from '@mui/material'
import type { HeaderProps } from '../../types'
import SocialLinks from '../common/SocialLinks'

function Header({ socials }: HeaderProps) {
  return (
    <AppBar
      component="header"
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 247, 238, 0.92)',
        color: 'text.primary',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1220, px: { xs: 2, sm: 3 } }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 'auto', sm: 76 },
            py: { xs: 1.5, sm: 0 },
            justifyContent: 'flex-end',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
            <SocialLinks socials={socials} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
