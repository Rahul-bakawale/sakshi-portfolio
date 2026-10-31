import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { Button } from '@mui/material'
import type { AppButtonProps } from '../../types'

function AppButton({
  label,
  href,
  onClick,
  variant,
  endIcon,
  download,
  target,
  ariaLabel,
}: AppButtonProps) {
  return (
    <Button
      component={href ? 'a' : 'button'}
      href={href}
      onClick={onClick}
      variant={variant}
      endIcon={endIcon ?? <ArrowOutwardIcon aria-hidden="true" />}
      download={download}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      sx={{
        minHeight: 40,
        px: 2,
        borderRadius: '2px',
        borderColor: '#777',
        color: variant === 'contained' ? '#fff' : '#161616',
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1.2,
        '& .MuiButton-endIcon': { ml: 0.75 },
        '& .MuiSvgIcon-root': { fontSize: 15 },
        '&:hover': {
          borderColor: '#161616',
          backgroundColor: variant === 'contained' ? '#333' : 'rgba(22, 22, 22, 0.04)',
        },
      }}
    >
      {label}
    </Button>
  )
}

export default AppButton
