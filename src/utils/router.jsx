import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Colors from "../pages/Learning/Colors";
import Font from "../pages/Learning/Font";
import Keyboard from "../pages/Learning/Keyboard";
import Operable from "../pages/Learning/Operable";
import Perceivable from "../pages/Learning/Perceivable";
import Robust from "../pages/Learning/Robust";
import ScreenReaders from "../pages/Learning/ScreenReaders";
import Understandable from "../pages/Learning/Understandable";
import WCAGGuidelines from "../pages/Learning/WCAGGuidelines";
import Root from "../root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />} />
      <Route index element={<Home />} />
      <Route path="wcag-guidelines" element={<WCAGGuidelines />} />

      <Route path="wcag-guidelines/perceivable" element={<Perceivable />} />
      <Route path="wcag-guidelines/operable" element={<Operable />} />
      <Route
        path="wcag-guidelines/understandable"
        element={<Understandable />}
      />
      <Route path="wcag-guidelines/robust" element={<Robust />} />
      <Route path="keyboard" element={<Keyboard />} />
      <Route path="screenreaders" element={<ScreenReaders />} />
      <Route path="colorblindness" element={<Colors />} />
      <Route path="font" element={<Font />} />
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

export default router;
