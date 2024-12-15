import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Links from "../../components/Links";
import breadcrumbs from "../../links/breadcrumbs.json";
import colorLinks from "../../links/colorLinks.json";

export default function Colors() {
  const theme = useTheme();
  const halfSpacing = 2.5;
  const maxWidth = 800;

  const renderBreadCrumbs = () => (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.color.map((crumb, index) =>
        crumb.link ? (
          <Link key={index} underline="hover" color="inherit" href={crumb.link}>
            {crumb.label}
          </Link>
        ) : (
          <Typography key={index} sx={{ color: "text.primary" }}>
            {crumb.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );

  return (
    <>
      {renderBreadCrumbs()}
      {/*h1 ARIA Roles and Attributes*/}
      <Box component="section" sx={{ maxWidth: maxWidth }}>
        <Typography
          variant="h1"
          sx={{
            mb: theme.typography.spacing("h1"),
            letterSpacing: theme.typography.letterSpacing("h1"),
            wordSpacing: theme.typography.wordSpacing("h1"),
          }}
        >
          Colors
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: halfSpacing,
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          When it comes to colors it can be tricky. You want to choose a palette
          that carries a message about your website but also making sure that
          the colors are accessible. This is mostly imporant for areas where
          different colors overlap. In such occasions their contast has to be
          high enough to make the text easy to read. If youre uncertain about
          your colors do a quick lighthouse report for you page to see if any of
          your colros needs to be adjusted.
        </Typography>
      </Box>

      {/*Useful links*/}
      <Box component="section" sx={{ maxWidth: maxWidth }}>
        <Typography
          variant="h2"
          sx={{
            mb: theme.typography.spacing("h2"),
            letterSpacing: theme.typography.letterSpacing("h2"),
            wordSpacing: theme.typography.wordSpacing("h2"),
          }}
        >
          Useful links
        </Typography>
        <Links links={colorLinks}></Links>
      </Box>
    </>
  );
}
