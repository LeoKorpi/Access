export default function NestedList({ title, text, examples }) {
  return (
    <li>
      <strong>{title}</strong>
      <span>{text}</span>
      {examples &&
        examples.map((example, index) => {
          const isLast = index === examples.length - 1;
          return isLast ? (
            <span key={index}>
              and <code>{`<${example}>`}</code>.
            </span>
          ) : (
            <code key={index}>{`<${example}>, `}</code>
          );
        })}
    </li>
  );
}
