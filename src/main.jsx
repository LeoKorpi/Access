import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root, {
  action as rootAction,
  loader as rootLoader,
} from "./routes/root";
import "./index.css";
import ErrorPage from "./pages/error-page";
import WCAGGuidelines from "./pages/Learning/WCAGGuidelines";
import Aria from "./pages/Learning/ARIA";
import Keyboard from "./pages/Learning/Keyboard";
import ScreenReaders from "./pages/Learning/ScreenReaders";
import Colors from "./pages/Learning/Colors";
import Text from "./pages/Learning/Text";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}></Route>
      <Route index element={<Home />}></Route>
      <Route path="wcag-guidelines" element={<WCAGGuidelines />}></Route>
      <Route path="aria" element={<Aria />}></Route>
      <Route path="keyboard" element={<Keyboard />}></Route>
      <Route path="screenreaders" element={<ScreenReaders />}></Route>
      <Route path="colorblindness" element={<Colors />}></Route>
      <Route path="text" element={<Text />}></Route>
    </Route>
  ),
  {
    //early Opt in for React-router v.7 to remove warnings
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>
);
