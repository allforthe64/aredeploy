import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
    return (
        <main className="App">
            <Nav />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout