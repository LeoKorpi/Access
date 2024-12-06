import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import Box from "@mui/material/Box";

export default function AccessibilityWidget() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "inline-block",
        position: "sticky",
        borderRadius: "3rem",
        bottom: 0,
        left: 1000,
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <IconButton color="primary" size="medium">
        <AccessibilityNewIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}
