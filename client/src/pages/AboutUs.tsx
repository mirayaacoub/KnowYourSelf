import Navbar from "../components/NavBar";
import FooterComponent from "../components/Footer";

export function AboutUs() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="mb-4">
            Welcome to Know YourSelf, your go-to destination for online therapy
            and mental health resources.
          </p>
          <p className="mb-4">
            Our mission is to provide accessible and affordable therapy services
            to everyone, regardless of their background or location. We believe
            that everyone deserves to live a happy and fulfilling life, and
            we're here to help you achieve that.
          </p>
          <p className="mb-4">
            Our team of experienced therapists is dedicated to providing you
            with personalized and effective therapy sessions, tailored to your
            specific needs and goals.
          </p>
          <p className="mb-4">
            Whether you're struggling with anxiety, depression, stress, or any
            other mental health issue, we're here to support you every step of
            the way.
          </p>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
