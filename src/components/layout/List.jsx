import NestedList from "./NestedList";
import InlineContent from "./InlineContent";
import { Typography } from "@mui/material";

export default function List({ items, nestedLists, paragraph, type }) {
  const ListTag = type === "ordered" ? "ol" : "ul";

  const renderParagraphAfter = (paragraph) => {
    return (
      <Typography variant="body1">
        <InlineContent />
      </Typography>
    );
  };

  return (
    <ListTag>
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.title}</strong>: {item.description}
          {item.examples &&
            item.examples.map((example, exampleIndex) => {
              const isLast = exampleIndex === item.examples.length - 1;
              return isLast ? (
                <span key={exampleIndex}>
                  and <code>{`<${example}>`}</code>.
                </span>
              ) : (
                <code key={exampleIndex}>{`<${example}>, `}</code>
              );
            })}
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
  );
}
