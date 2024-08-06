/* eslint-disable no-unused-vars */
import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
