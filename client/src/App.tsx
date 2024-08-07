import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import TripDetails from "./pages/TripDetails";
import SchoolTripDetails from "./pages/SchoolTripDetails";
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

  const Layout = () => {
    return (
      <div className="App">
        <Header />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
  ]);

  if (!logoLoaded) {
    return null;
  }

  return <RouterProvider router={router} />;
};

export default App;
