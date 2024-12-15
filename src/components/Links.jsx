import { Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";

export default function Links({ links = [] }) {
  const theme = useTheme();
  return (
    <List sx={{ listStyleType: "disc", ml: 2.5 }}>
      {links.map((link, index) => (
        <ListItem key={index} sx={{ display: "list-item", padding: 0 }}>
          <Link
            sx={{
              color: theme.palette.primary.link,
              fontWeight: 600,
            }}
            key={index}
            underline="hover"
            color="inherit"
            href={link.href}
            rel={link.rel || "noopener"}
            target={link.target || "_blank"}
            aria-label={link.aria}
          >
            {link.text}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
