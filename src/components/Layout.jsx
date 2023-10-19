import { Helmet } from "react-helmet";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import LandingPage from "./LandingPage";
import "../App.css";

const Layout = ({ children }) => {
  return (
    <>
      <LandingPage />
      <div className="body-container flex w-screen">
        <NavBar />
        <MobileNav />
        <div className="w-full flex justify-center">
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Gluten:wght@300&family=Lato&family=Raleway&family=VT323&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
