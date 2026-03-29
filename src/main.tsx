import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Gallery from "./Gallery.tsx";
import Contacts from "./Contacts.tsx";
import About from "./About_me.tsx";
import Services from "./Services.tsx";
import Major from "./Major.tsx";
import Offer from "./Document_pages/Offers.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Major /> },
      { path: "gallery", element: <Gallery /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contacts", element: <Contacts /> },
      { path: "offer", element: <Offer /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
