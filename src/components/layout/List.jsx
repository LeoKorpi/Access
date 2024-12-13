import NestedList from "./NestedList";
import InlineContent from "./InlineContent";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";

export default function List({
  items,
  nestedLists,
  paragraphAfter,
  type = "unordered",
}) {
  const ListTag = type === "ordered" ? "ol" : "ul";
  const theme = useTheme();

  return (
    <>
      <ListTag className="list">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li key={index}>
              {item.title && <strong>{item.title}</strong>}
              {item.description && <span>{item.description} </span>}
              {item.examples && (
                <InlineContent
                  content={item.examples.map((example, exampleIndex) => {
                    const isLast = exampleIndex === item.examples.length - 1;
                    return isLast
                      ? { type: "code", text: example, suffix: "." }
                      : { type: "code", text: example, suffix: ", " };
                  })}
                />
              )}
              {item.link && <InlineContent content={item.link} />}
              {isLastItem && nestedLists && (
                <ul>
                  {nestedLists.map((nested, nestedIndex) => (
                    <NestedList
                      key={nestedIndex}
                      title={nested.title}
                      text={nested.text}
                      examples={nested.examples}
                    />
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ListTag>
      {paragraphAfter && (
        <Typography
          variant="body1"
          sx={{
            mb: theme.typography.spacing("body1"),
            letterSpacing: theme.typography.letterSpacing("body1"),
            wordSpacing: theme.typography.wordSpacing("body1"),
          }}
        >
          <InlineContent content={paragraphAfter.text} />
        </Typography>
      )}
    </>
  );
}
