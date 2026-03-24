import { Outlet } from "react-router";
import Nav from "../components/Nav.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet /> {/* child routes render here */}
      </main>
      <Footer />
    </>
  );
}
