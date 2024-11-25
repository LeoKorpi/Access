import NestedList from "./NestedList";
import InlineContent from "./InlineContent";
import { Typography } from "@mui/material";

export default function List({
  items,
  nestedLists,
  paragraphAfter,
  type = "unordered",
}) {
  const ListTag = type === "ordered" ? "ol" : "ul";

  return (
    <>
      <ListTag>
        {items.map((item, index) => (
          <li key={index}>
            {item.title && <strong>{item.title}</strong>}
            {item.description && <span>{item.description}</span>}
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
          </li>
        ))}
        {nestedLists && (
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
      </ListTag>
      {paragraphAfter && (
        <Typography variant="body1">
          <InlineContent content={paragraphAfter.text} />
        </Typography>
      )}
    </>
  );
}
