import Box from "@mui/material/Box";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function Operable() {
  return (
    <Box
      component="article"
      sx={{
        flexGrow: 1,
        p: 3,
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/wcag-guidelines">
          WCAG
        </Link>
        <Typography sx={{ color: "text.primary" }}>2. Operable</Typography>
      </Breadcrumbs>
      <h1>This page is for operable</h1>
    </Box>
  );
}
