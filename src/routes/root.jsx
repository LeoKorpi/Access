import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListIcon from "@mui/icons-material/List";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navHeadings } from "../content/nav_headings";

// "writer", returns the url to be redirected to
export async function action() {
  //hämta nästa artikel man ska navigera till?
}

// "reader", provides data to the route element before it renders
export async function loader() {}

export default function Root() {
  const [openStates, setOpenStates] = useState(navHeadings.map(() => false));
  const [drawerState, setDrawerState] = useState(false);
  const isMobile = useMediaQuery("(max-width:430px)"); //justera efter minsta önskade bredd på mobilupplösning
  const location = useLocation();

  const handleClick = (index) => {
    setOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  const activeStyle = {
    backgroundColor: "rgba(0,0,0,0.08)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.16)",
    },
  };

  const navigationList = (
    <Box sx={{ width: "auto" }} role="presentation">
      <List component="nav" aria-labelledby="nested-list-test">
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

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "row",
      }}
    >
      {isMobile ? (
        <>
          <IconButton onClick={toggleDrawer}>
            <ListIcon />
          </IconButton>
          <Drawer anchor={"bottom"} open={drawerState} onClose={toggleDrawer}>
            {navigationList}
          </Drawer>
        </>
      ) : (
        <Box
          component="aside"
          sx={{
            maxWidth: 280,
            minWidth: 210,
            width: 1 / 3,
            flexShrink: 0,
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          {navigationList}
        </Box>
      )}

      <Box
        component="section"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
