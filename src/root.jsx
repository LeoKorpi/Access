import ListIcon from "@mui/icons-material/List";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavigationList from "./components/NavigationList";
import AccessibilityWidget from "./utils/AccessibilityWidget";
import SkipToContent from "./components/SkipToContent";

// "writer", returns the url to be redirected to
export async function action() {
  //hämta nästa artikel man ska navigera till?
}

// "reader", provides data to the route element before it renders
export async function loader() {}

export default function Root() {
  const [drawerState, setDrawerState] = useState(false);
  const isMobile = useMediaQuery("(max-width:430px)"); //justera efter minsta önskade bredd på mobilupplösning
  const location = useLocation();
  const pathName = location.pathname.slice(1); //slice för att ta bort'\' i början
  const mainContentRef = useRef(null);

  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  //Makes the page scroll to the top when the section-component is reloaded (visiting new page)
  useEffect(() => {
    const container = document.querySelector(".main-content");
    container.scrollTo(0, 0);
  }, [pathName]);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        height: "100dvh",
        flexDirection: isMobile ? "column-reverse" : "row",
        flexShrink: 0,
      }}
    >
      <SkipToContent mainContentRef={mainContentRef} />
      {isMobile ? (
        <>
          <IconButton onClick={toggleDrawer}>
            <ListIcon />
          </IconButton>
          <Drawer anchor={"bottom"} open={drawerState} onClose={toggleDrawer}>
            <NavigationList isMobile={isMobile} />
          </Drawer>
        </>
      ) : (
        <Box
          component="aside"
          sx={{
            height: "100dvh",
            position: "sticky",
            top: 0,
            overflowY: "auto",
            width: 2 / 9,
            minWidth: 210,
            flexShrink: 0,
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          <NavigationList />
        </Box>
      )}

      <Box
        component="article"
        className="main-content"
        id="main-content"
        ref={mainContentRef}
        tabIndex={-1}
        sx={{
          flexGrow: 1,
          p: 3,
          overflowY: "auto",
        }}
      >
        <Outlet />
        <AccessibilityWidget isMobile={isMobile} />
      </Box>
    </Box>
  );
}
