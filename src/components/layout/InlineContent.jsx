export default function InlineContent({ content }) {
  return content.map((item, index) => {
    if (typeof item === "string") {
      return <span key={index}>{item}</span>;
    }
    if (item.type === "span") {
      return (
        <span key={index} className={item.className}>
          {item.text}
        </span>
      );
    }
    if (item.type === "formatted-text") {
      return (
        <code key={index} style={{ whiteSpace: "pre-wrap" }}>
          {item.text}
        </code>
      );
    }
    if (item.type === "a") {
      return (
        <a
          key={index}
          href={item.href}
          target={item.target || "_blank"}
          rel={item.rel || "noopener"}
          aria-label={item["aria-label"] || "undefined"}
        >
          {item.text}
        </a>
      );
    }
    if (item.type === "abbr") {
      return (
        <abbr key={index} title={item.title}>
          {item.text}
        </abbr>
      );
    }
    if (item.type === "code") {
      return <code key={index}>{`<${item.text}>`}</code>;
    }
    if (item.type === "br") return <br key={index} />;
    return null;
  });
}
