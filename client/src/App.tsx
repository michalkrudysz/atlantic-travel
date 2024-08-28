import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import TripDetails from "./pages/TripDetails";
import SchoolTripDetails from "./pages/SchoolTripDetails";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.scss";

const saveLogoToLocalStorage = async () => {
  const response = await fetch("../public/logo.svg");
  const svgText = await response.text();
  localStorage.setItem("logoSVG", svgText);
};

const App = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const loadLogo = async () => {
      if (!localStorage.getItem("logoSVG")) {
        await saveLogoToLocalStorage();
      }
      setLogoLoaded(true);
    };

    loadLogo();
  }, []);

  const MainLayout = () => {
    return (
      <div className="App">
        <Header />
        <Outlet />
      </div>
    );
  };

  const AuthLayout = () => {
    return (
      <div className="App">
        <Outlet />
      </div>
    );
  };

  const DashboardLayout = () => {
    return (
      <div className="Dashboard">
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ":tripTitleDetails",
          element: <TripDetails />,
        },
        {
          path: "szkolne/:schoolTrips",
          element: <SchoolTripDetails />,
        },
      ],
    },
    {
      path: "login",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <ProtectedRoute />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ]);

  if (!logoLoaded) {
    return null;
  }

  return <RouterProvider router={router} />;
};

export default App;
