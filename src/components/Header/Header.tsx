import { AppBar, Box, Container, Toolbar } from "@mui/material";
import type { HeaderProps } from "../../types";
import SocialLinks from "../common/SocialLinks";

function Header({ socials }: HeaderProps) {
  return (
    <AppBar
      component="header"
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 247, 238, 0.92)",
        color: "text.primary",
        backdropFilter: "blur(12px)",
      }}
    >
      <Container
        maxWidth={false}
        sx={{ maxWidth: 1220, px: { xs: 2, sm: "30px" } }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 0,
            pt: { xs: 2 },
            pb: { xs: 2, sm: "16px" },
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "10px",
              flexWrap: "nowrap",
            }}
          >
            <SocialLinks socials={socials} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
