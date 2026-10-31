import { Box } from '@mui/material'
import { useState } from 'react'
import type { AppImageProps } from '../../types'

function AppImage({
  src,
  alt,
  aspectRatio = '1 / 1',
  objectFit = 'cover',
  borderRadius = 2,
}: AppImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <Box
        role="img"
        aria-label={alt}
        sx={{
          width: '100%',
          aspectRatio,
          borderRadius,
          backgroundColor: '#D9D9D9',
        }}
      />
    )
  }

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      sx={{
        width: '100%',
        aspectRatio,
        objectFit,
        borderRadius,
        backgroundColor: '#D9D9D9',
      }}
    />
  )
}

export default AppImage
