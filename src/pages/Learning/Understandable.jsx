import Box from "@mui/material/Box";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function Understandable() {
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
        <Typography sx={{ color: "text.primary" }}>
          3. Understandable
        </Typography>
      </Breadcrumbs>
      <h1>This page is for understandable</h1>
    </Box>
  );
}
