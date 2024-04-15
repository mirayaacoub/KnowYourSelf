import Navbar from "../components/NavBar";
import FooterComponent from "../components/Footer";
export function HomePage() {
  // if (sessionStorage.getItem("token")) return <h1>HOMEPAGE</h1>;
  return (
    <>
      <Navbar></Navbar>
      <FooterComponent></FooterComponent>
    </>
  );
}
