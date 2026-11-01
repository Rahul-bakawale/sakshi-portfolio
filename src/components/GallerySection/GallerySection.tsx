import { Box, Grid, Typography } from "@mui/material";
import type { GallerySectionProps } from "../../types";
import AppButton from "../common/AppButton";
import AppImage from "../common/AppImage";

function GallerySection({ gallery }: GallerySectionProps) {
  return (
    <Box
      component="section"
      aria-labelledby="gallery-title"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        pb: { xs: 8, md: 11 },
        width: { xl: "calc(100% + 68px)" },
        maxWidth: 1240,
        ml: { xl: "-34px" },
      }}
    >
      <Typography
        id="gallery-title"
        component="h2"
        sx={{
          m: 0,
          color: "#131313",
          fontSize: { xs: 28, sm: 36, lg: 48 },
          fontWeight: 600,
          lineHeight: 1.6,
          letterSpacing: "-0.03em",
          textAlign: "center",
        }}
      >
        Beyond the Interface
      </Typography>
      <Grid container spacing={2.5}>
        {gallery.map((item) => (
          <Grid key={item.id} size={{ xs: 6, md: 4 }}>
            <AppImage
              src={item.image}
              alt={item.alt}
              aspectRatio="20 / 21"
              borderRadius={0}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          "& .MuiButton-root.MuiButton-outlined": {
            width: 184,
            height: 55,
            minHeight: 55,
            px: "30px",
            py: "10px",
            gap: "10px",
            border: "1px solid #131313",
            borderRadius: 0,
          },
        }}
      >
        <AppButton
          label="View More"
          href="https://www.behance.net/sakshigupta46"
          target="_blank"
          variant="outlined"
        />
      </Box>
    </Box>
  );
}

export default GallerySection;
