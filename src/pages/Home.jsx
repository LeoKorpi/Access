import {
  Box,
  Breadcrumbs,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  const maxWidth = 800;
  return (
    <Box component="section" sx={{ maxWidth: maxWidth, p: 3 }}>
      <Typography
        variant="h1"
        sx={{
          mb: theme.typography.spacing("h1"),
          letterSpacing: theme.typography.letterSpacing("h1"),
          wordSpacing: theme.typography.wordSpacing("h1"),
        }}
      >
        Welcome to Access.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: theme.typography.spacing("body1"),
          letterSpacing: theme.typography.letterSpacing("body1"),
          wordSpacing: theme.typography.wordSpacing("body1"),
        }}
      >
        Discover the essentials of web accessibility and learn how to create
        inclusive digital experiences.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: theme.typography.spacing("body1"),
          letterSpacing: theme.typography.letterSpacing("body1"),
          wordSpacing: theme.typography.wordSpacing("body1"),
        }}
      >
        Choose any of the topics in the menu to you left (of bottom if youre on
        mobile) to get started.
      </Typography>
    </Box>
  );
}
