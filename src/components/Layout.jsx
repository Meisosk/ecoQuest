import { Helmet } from "react-helmet";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen">
      <NavBar />
      <div className="w-full flex justify-center">
        <Helmet>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
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
  );
};

export default Layout;


