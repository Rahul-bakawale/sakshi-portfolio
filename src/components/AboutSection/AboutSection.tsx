import { Box, Typography } from '@mui/material'
import type { AboutSectionProps } from '../../types'
import SectionTitle from '../common/SectionTitle'

function AboutSection({ about }: AboutSectionProps) {
  return (
    <Box component="section" aria-labelledby="about-title" sx={{ pb: { xs: 7, md: 8 } }}>
      <Box id="about-title" sx={{ mb: 2.5 }}>
        <SectionTitle title="More About Me" />
      </Box>
      <Box
        sx={{
          maxWidth: 900,
          mx: 'auto',
          px: { xs: 2.5, sm: 4, md: 5 },
          py: { xs: 2.5, sm: 3.5, md: 4 },
          backgroundColor: '#fff',
          borderRadius: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 15, sm: 18 },
            color: '#373737',
            lineHeight: 1.6,
            textAlign: { xs: 'left', sm: 'center' },
          }}
        >
          {about.text}
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutSection
