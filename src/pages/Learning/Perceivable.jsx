import Box from "@mui/material/Box";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function Perceivable() {
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
        <Typography sx={{ color: "text.primary" }}>1. Perceivable</Typography>
      </Breadcrumbs>
      <h1>This page is for perceivable</h1>
    </Box>
  );
}
