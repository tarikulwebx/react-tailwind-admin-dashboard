import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components"

const RootLayout = () => {
    return (
        <div className="relative">
            <Sidebar />
            <div className="xl:absolute xl:left-[300px]">
                <div className="relative">
                    <Navbar />
                    <div className="h-[65px]"></div>
                    <div className="p-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RootLayout