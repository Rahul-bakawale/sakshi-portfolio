import { Box, Chip } from '@mui/material'
import behanceIcon from '../../assets/images/behance.png'
import linkedInIcon from '../../assets/images/linkedin.png'
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
              component="img"
              src={social.icon === 'linkedin' ? linkedInIcon : behanceIcon}
              alt=""
              aria-hidden="true"
              sx={{
                display: 'block',
                width: 32,
                height: 32,
                objectFit: 'contain',
              }}
            />
          }
          label={social.label}
          clickable
          size="small"
          sx={{
            height: 40,
            px: 0.25,
            color: dark ? '#f5f5f5' : '#161616',
            backgroundColor: dark ? '#292929' : '#fff',
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: 0,
            '& .MuiChip-icon': { ml: 1, mr: 1 },
            '& .MuiChip-label': { px: 1 },
            '&:hover': { backgroundColor: dark ? '#373737' : '#f1f1f1' },
          }}
        />
      ))}
    </>
  )
}

export default SocialLinks
