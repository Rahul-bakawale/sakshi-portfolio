import { Box, Grid } from '@mui/material'
import type { GallerySectionProps } from '../../types'
import AppButton from '../common/AppButton'
import AppImage from '../common/AppImage'
import SectionTitle from '../common/SectionTitle'

function GallerySection({ gallery }: GallerySectionProps) {
  return (
    <Box component="section" aria-labelledby="gallery-title" sx={{ pb: { xs: 8, md: 11 } }}>
      <Box id="gallery-title" sx={{ mb: 3 }}>
        <SectionTitle title="Beyond the Interface." />
      </Box>
      <Grid container spacing={{ xs: 1.5, sm: 2 }} sx={{ maxWidth: 980, mx: 'auto' }}>
        {gallery.map((item) => (
          <Grid key={item.id} size={{ xs: 6, md: 4 }}>
            <AppImage
              src={item.image}
              alt={item.alt}
              aspectRatio="1 / 1"
              borderRadius={1}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3.5 }}>
        <AppButton
          label="View More"
          href="https://www.behance.net/sakshigupta46"
          target="_blank"
          variant="outlined"
        />
      </Box>
    </Box>
  )
}

export default GallerySection
