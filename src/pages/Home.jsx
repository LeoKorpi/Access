import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      component="article"
      sx={{
        flexGrow: 1,
        p: 3,
        overflowY: "auto",
      }}
    >
      <h1>Welcome to Access.</h1>
      <p>
        Discover the essentials of web accessibility and learn how to create
        inclusive digital experiences
      </p>
    </Box>
  );
}
