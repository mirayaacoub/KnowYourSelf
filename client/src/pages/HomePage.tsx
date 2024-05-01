import Navbar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import Card from "../components/card";
import Profile from "../App";

export function HomePage() {
  const profile = {
    firstName: "Victor",
    lastName: "Crest",
    age: 26,
    country: "London",
    followers: 80_000,
    likes: 803_000,
    photos: 1_400,
    headShot: "",
  };

  // if (sessionStorage.getItem("token")) return <h1>HOMEPAGE</h1>;
  return (
    <>
      <Navbar></Navbar>
      {/* <Card profile={profile} /> */}
      <FooterComponent></FooterComponent>
    </>
  );
}
