import { Typography } from '@mui/material'
import type { SectionTitleProps } from '../../types'

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Typography
      component="h2"
      sx={{
        color: 'secondary.main',
        fontSize: { xs: 13, sm: 14 },
        fontWeight: 700,
        lineHeight: 1.5,
        textAlign: 'center',
      }}
    >
      {title}
    </Typography>
  )
}

export default SectionTitle
