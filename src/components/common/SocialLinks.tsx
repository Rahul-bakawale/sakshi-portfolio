import { Box, Chip } from '@mui/material'
import type { SocialLinksProps } from '../../types'

function SocialLinks({ socials, dark = false }: SocialLinksProps) {
  return (
    <>
      {socials.map((social) => (
        <Chip
          key={social.label}
          component="a"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${social.label} profile (opens in a new tab)`}
          icon={
            <Box
              component="span"
              aria-hidden="true"
              sx={{
                display: 'inline-flex',
                width: 16,
                height: 16,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: social.icon === 'linkedin' ? '2px' : '50%',
                color: '#fff',
                backgroundColor: social.icon === 'linkedin' ? '#0A66C2' : '#1769FF',
                fontSize: social.icon === 'linkedin' ? 10 : 8,
                fontWeight: 800,
                letterSpacing: '-0.04em',
              }}
            >
              {social.icon === 'linkedin' ? 'in' : 'Be'}
            </Box>
          }
          label={social.label}
          clickable
          size="small"
          sx={{
            height: 32,
            color: dark ? '#f5f5f5' : '#161616',
            backgroundColor: dark ? '#292929' : '#fff',
            '& .MuiChip-icon': { ml: 1 },
            '&:hover': { backgroundColor: dark ? '#373737' : '#f1f1f1' },
          }}
        />
      ))}
    </>
  )
}

export default SocialLinks
