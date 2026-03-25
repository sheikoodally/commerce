import { Outlet } from "react-router";
import Nav from "../components/Nav.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Layout() {
  return (
    <>
      <div className="relative">
        <Nav />
      </div>
      <main className="pt-16">
        <Outlet /> {/* child routes render here */}
      </main>
      <Footer />
    </>
  );
}
