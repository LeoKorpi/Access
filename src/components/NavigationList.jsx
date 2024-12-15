import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import navHeadings from "../links/navHeadings.json";

export default function NavigationList({ isMobile }) {
  const [openStates, setOpenStates] = useState(navHeadings.map(() => false));

  const handleClick = (index) => {
    setOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const activeStyle = {
    backgroundColor: "rgba(0,0,0,0.08)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.16)",
    },
  };

  return (
    <Box sx={{ width: "auto" }} role="presentation">
      <List component="nav" aria-label="nested-list-test">
        {navHeadings.map((item, index) => (
          <div key={index}>
            <ListItemButton
              component={NavLink}
              to={item.path || "#"}
              onClick={(e) => {
                if (item.secondary) {
                  e.preventDefault();
                  handleClick(index);
                }
                if (isMobile) {
                  toggleDrawer();
                }
              }}
              sx={location.pathname === item.path ? activeStyle : {}}
            >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={item.primary} />
              {item.secondary ? (
                openStates[index] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItemButton>
            {item.secondary && (
              <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.secondary.map((subItem, subIndex) => (
                    <ListItemButton
                      key={subIndex}
                      component={NavLink}
                      to={subItem.path}
                      sx={{
                        pl: 4,
                        ...(location.pathname === subItem.path
                          ? activeStyle
                          : {}),
                      }}
                      onClick={() => {
                        if (isMobile) {
                          toggleDrawer();
                        }
                      }}
                    >
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={subItem.primary} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Box>
  );
}
