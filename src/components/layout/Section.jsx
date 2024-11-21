import { Typography } from "@mui/material";
import List from "./List";
import InlineContent from "./InlineContent";
import Box from "@mui/material/Box";

export default function Section({ section }) {
  const { heading, type, title, content, list, listType, nestedLists } =
    section;

  return (
    <Box>
      <Typography variant={heading}>{title}</Typography>
      <Typography variant="body1">
        <InlineContent content={content} />
      </Typography>
      {type === "section-with-list" && list && (
        <List items={list} type={listType} nestedLists={nestedLists} />
      )}
    </Box>
  );
}
