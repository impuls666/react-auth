import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Login} />
        <Route
          path={"/dashboard"}
          element={
            <RequireAuth loginPath={"/"}>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
