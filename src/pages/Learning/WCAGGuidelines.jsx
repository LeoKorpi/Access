import Box from "@mui/material/Box";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function WCAGGuidelines() {
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
        <Typography sx={{ color: "text.primary" }}>WCAG</Typography>
      </Breadcrumbs>
      <h1>This page is for the WCAG guidelines</h1>
    </Box>
  );
}
