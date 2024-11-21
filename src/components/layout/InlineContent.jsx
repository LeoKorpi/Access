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
    if (item.type === "a") {
      return (
        <a
          key={index}
          href={item.href}
          target={item.target}
          rel={item.rel}
          aria-label={item.ariaLabel}
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
    return null;
  });
}
