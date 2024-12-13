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
        mb: theme.typography.spacing("body1"),
      }}
    >
      <Typography
        variant={heading}
        sx={{
          mb: theme.typography.spacing(`${heading}`),
          letterSpacing: theme.typography.letterSpacing(`${heading}`),
          wordSpacing: theme.typography.wordSpacing(`${heading}`),
        }}
      >
        {title}
      </Typography>
      {type === "section" && (
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          <InlineContent content={content} />
        </Typography>
      )}
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
