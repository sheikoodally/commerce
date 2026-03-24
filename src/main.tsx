import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
// import { createBrowserRouter, Outlet } from "react-router";

// const Layout = () => {
//   return (
//     <div>
//       <h1>Layout</h1>
//       <Outlet />
//     </div>
//   );
// };

// const router = createBrowserRouter([{ path: "/", element: <Layout /> }]);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
);
