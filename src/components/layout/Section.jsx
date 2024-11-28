import { Typography } from "@mui/material";
import List from "./List";
import InlineContent from "./InlineContent";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

export default function Section({ section }) {
  const theme = useTheme();

  const {
    heading,
    type,
    title,
    content,
    list,
    listType,
    nestedLists,
    paragraphAfter,
  } = section;

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        mb: theme.spacing("body1"),
      }}
    >
      <Typography
        variant={heading}
        sx={{
          mb: theme.spacing("h1"),
          letterSpacing: theme.letterSpacing("h1"),
          wordSpacing: theme.wordSpacing("h1"),
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: theme.spacing("body1"),
          letterSpacing: theme.letterSpacing("body1"),
          wordSpacing: theme.wordSpacing("body1"),
        }}
      >
        <InlineContent content={content} />
      </Typography>
      {type === "section-with-list" && (
        <List
          items={list}
          type={listType}
          nestedLists={nestedLists}
          paragraphAfter={paragraphAfter}
        />
      )}
    </Box>
  );
}
