import "./App.css";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth loginPath="/">
              <Dashboard />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
