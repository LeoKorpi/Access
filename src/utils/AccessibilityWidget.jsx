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
        borderRadius: "50%",
        bottom: 0,
        left: 99999,
        backgroundColor: theme.palette.primary.secondary,
      }}
    >
      <IconButton
        sx={{
          ":focus-visible": {
            outline: "4px solid rgb(200, 20, 20)",
            outlineOffset: "2px",
          },
        }}
        color="primary"
        size="medium"
        aria-label="Open the accessibility widget"
        title="Open the accessibility widget"
      >
        <AccessibilityNewIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}
