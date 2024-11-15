import { useMediaQuery, useTheme } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const listItems = [
  {
    primary: "WCAG Guidelines",
    secondary: [
      {
        primary: "1. Perceivable",
      },
      {
        primary: "2. Operable",
      },
      {
        primary: "3. Understandable",
      },
      {
        primary: "4. Robust",
      },
    ],
  },
  { primary: "ARIA Roles and attributes" },
  { primary: "Keyboard navigation" },
  { primary: "Optimization for screen readers" },
  { primary: "Color blindness" },
  { primary: "Fonts" },
];

// "writer", returns the url to be redirected to
export async function action() {
  //hämta nästa artikel man ska navigera till?
}

// "reader", provides data to the route element before it renders
export async function loader() {}

export default function Root() {
  const [openStates, setOpenStates] = useState(listItems.map(() => false));
  const [drawerState, setDrawerState] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:430px)"); //justera efter minsta önskade bredd på mobilupplösning

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

  const navigationList = (
    <Box sx={{ width: "auto" }} role="presentation">
      <List component="nav" aria-labelledby="nested-list-test">
        {listItems.map((item, index) => (
          <div key={index}>
            <ListItemButton onClick={() => handleClick(index)}>
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
                    <div key={subIndex}>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={subItem.primary} />
                      </ListItemButton>
                    </div>
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
    <Box sx={{ display: "flex" }}>
      {isMobile ? (
        <>
          <Button onClick={toggleDrawer}>Open drawer</Button>
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
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <h1>Welcome to Access.</h1>
        <p>
          Discover the essentials of web accessibility and learn how to create
          inclusive digital experiences
        </p>
      </Box>
    </Box>
  );
}
