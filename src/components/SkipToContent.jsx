import { Link, useTheme } from "@mui/material";

export default function SkipToContent({ mainContentRef }) {
  const theme = useTheme();

  const handleSkipToContent = (e) => {
    e.preventDefault();
    if (mainContentRef.current && mainContentRef.current) {
      mainContentRef.current.focus();
    }
  };

  return (
    <Link
      sx={{
        color: "#fefefe",
        fontWeight: 600,
        position: "absolute",
        height: 80,
        width: 200,
        left: "45%",
        top: -200,
        fontSize: "1.25rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.primary.link,
        transition: "top 0.25s ease",
        ":focus": {
          top: 20,
        },
      }}
      underline="hover"
      href="#main-content"
      onClick={handleSkipToContent}
    >
      Skip To Content
    </Link>
  );
}
