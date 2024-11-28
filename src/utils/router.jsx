import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ErrorPage from "../pages/error-page";
import Home from "../pages/Home";
import Aria from "../pages/Learning/ARIA";
import Colors from "../pages/Learning/Colors";
import Keyboard from "../pages/Learning/Keyboard";
import ScreenReaders from "../pages/Learning/ScreenReaders";
import Text from "../pages/Learning/Text";
import Operable from "../pages/Learning/wcag_principles/Operable";
import Perceivable from "../pages/Learning/wcag_principles/Perceivable";
import Robust from "../pages/Learning/wcag_principles/Robust";
import Understandable from "../pages/Learning/wcag_principles/Understandable";
import WCAGGuidelines from "../pages/Learning/WCAGGuidelines";
import Root from "../routes/root";

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

      <Route path="aria" element={<Aria />} />
      <Route path="keyboard" element={<Keyboard />} />
      <Route path="screenreaders" element={<ScreenReaders />} />
      <Route path="colorblindness" element={<Colors />} />
      <Route path="text" element={<Text />} />
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
