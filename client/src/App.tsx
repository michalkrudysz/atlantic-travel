import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import TripDetails from "./pages/TripDetails";
import SchoolTripDetails from "./pages/SchoolTripDetails";
import LoadingPage from "./pages/LoadingPage";
import "./App.scss";
import { useState } from "react";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
