import { Box, Chip } from '@mui/material'
import behanceIcon from '../../assets/icons/behance.svg'
import dribbbleIcon from '../../assets/icons/dribbbleicon.svg'
import linkedInIcon from '../../assets/icons/linkedin.svg'
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
              src={
                social.icon === 'linkedin'
                  ? linkedInIcon
                  : social.icon === 'dribbble'
                    ? dribbbleIcon
                    : behanceIcon
              }
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
            width: 155,
            minWidth: 155,
            height: 52,
            boxSizing: 'border-box',
            flex: '0 0 155px',
            justifyContent: 'flex-start',
            gap: '10px',
            px: '20px',
            py: '10px',
            color: dark ? '#f5f5f5' : '#161616',
            backgroundColor: dark ? '#292929' : '#fff',
            borderRadius: '60px',
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: 0,
            '& .MuiChip-icon': { ml: 0, mr: 0, width: 32, height: 32 },
            '& .MuiChip-label': {
              px: 0,
              overflow: 'visible',
              textOverflow: 'clip',
              whiteSpace: 'nowrap',
            },
            '&:hover': { backgroundColor: dark ? '#373737' : '#f1f1f1' },
          }}
        />
      ))}
    </>
  )
}

export default SocialLinks
