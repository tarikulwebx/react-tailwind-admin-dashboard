import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes";
import { useEffect, useState } from "react";
import { BreadcrumbContext, LoginUserContext, SidebarContext } from "./contexts";
import { loginUser } from "./data";

const App = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [breadcrumbItems, setBreadcrumbItems] = useState([
        {
            label: "Home",
            path: "/"
        }
    ])

	const router = createBrowserRouter(createRoutesFromElements(AppRoutes));
	useEffect(() => {
		setPrimaryColor();
		getUser();
	}, [])

	// set primary color
	const setPrimaryColor = () => {
		if (localStorage.getItem("primaryColor")) {
            document.documentElement.style.setProperty(
                "--color-primary",
                localStorage.getItem("primaryColor")
            );
        }
	}

	// get user here
	const getUser = async () => {
        setUser(loginUser);
        setIsLoggedIn(true);
    };

	
	return (
        <LoginUserContext.Provider
            value={{ isLoggedIn, user, setUser, setIsLoggedIn }}
        >
            <SidebarContext.Provider
                value={{ isOpenSidebar, setIsOpenSidebar }}
            >
                <BreadcrumbContext.Provider
                    value={{ breadcrumbItems, setBreadcrumbItems }}
                >
                    <RouterProvider router={router} />
                </BreadcrumbContext.Provider>
            </SidebarContext.Provider>
        </LoginUserContext.Provider>
    );
	
	
}

export default App