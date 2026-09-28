import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Professional } from "./pages/Professional";
import { Personal } from "./pages/Personal";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Professional />}
        />

        <Route
          path="/personal"
          element={<Personal />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;