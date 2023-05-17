import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts";
import { ArrowDown, ArrowUp, CloseIcon, ColorAdjustIcon, MoonIcon, SettingsIcon, Stack3DIcon, SunIcon } from "../assets/icons";
import { NavLink } from "react-router-dom";
import { navigationItems, themeColors } from "../data";
import { Disclosure, Popover, Transition } from "@headlessui/react";

const Sidebar = () => {
    const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext);
    const [isOpen, setIsOpen] = useState(false);
    const [themeMode, setThemeMode] = useState(null);
    const [activePrimaryColor, setActivePrimaryColor] = useState(null);

    // sidebar open useeffect
    useEffect(() => {
        setIsOpen(isOpenSidebar);
    }, [isOpenSidebar]);

    // handle close sidebar
    const handleCloseSidebar = () => {
        setIsOpen(false);
        setTimeout(() => {
            setIsOpenSidebar(false);
        }, 300);
    };

    // handle theme color change
    const handleThemeColor = (color) => {
        document.documentElement.style.setProperty(
            "--color-primary",
            color.code
        );
        localStorage.setItem("primaryColor", color.code);
        setActivePrimaryColor(color.code);
    };

    // first load
    useEffect(() => {
        if (
            localStorage.theme === "dark"
            
        ) {
            setThemeMode("dark");
        } else if ((!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                    setThemeMode("system");
                } else {
            setThemeMode("light");
        }

        const colorCode = document.documentElement.style.getPropertyValue(
            "--color-primary");
        setActivePrimaryColor(colorCode)

    }, []);

    // handle theme mode
    const handleThemeMode = (selectedThemeMode) => {
        if (selectedThemeMode === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            setThemeMode("dark");
        } else if (selectedThemeMode === "system") {
            localStorage.removeItem("theme");
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
                setThemeMode("system");
            } else {
                document.documentElement.classList.remove("dark");
                setThemeMode("system");
            }
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            setThemeMode("light");
        }
    };

    return (
        <div
            className={`fixed bottom-0 left-0 top-0 z-10 h-full w-full bg-black/20 transition-opacity duration-300 xl:pointer-events-none xl:w-0 ${
                isOpen
                    ? "opacity-100"
                    : "pointer-events-none opacity-0 xl:opacity-100 "
            }`}
        >
            <div
                className={`pointer-events-auto fixed left-0 top-0 z-20 h-screen w-[300px] transform bg-gray-800 text-gray-200 transition-transform duration-300 ${
                    isOpen
                        ? "translate-x-0"
                        : "-translate-x-full xl:translate-x-0"
                }`}
            >
                <div className="flex h-full flex-col">
                    <div className=" flex h-[65px] items-center gap-4 px-6 text-2xl font-extrabold text-primary shadow-sm shadow-white/10">
                        <Stack3DIcon />
                        <h1 className="">Admin UI</h1>
                    </div>
                    <div className="flex-1 overflow-y-auto overflow-x-hidden">
                        <nav className="relative flex flex-col gap-1 px-3 py-5">
                            {navigationItems.map((item) => {
                                return item.subItems.length === 0 ? (
                                    <NavLink
                                        to={item.path}
                                        key={item.id}
                                        className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-gray-200 transition-colors duration-200 hover:bg-gray-700 hover:text-white [&.active]:bg-gray-700 [&.active]:text-white "
                                    >
                                        <item.icon className="text-xl" />{" "}
                                        {item.name}
                                    </NavLink>
                                ) : (
                                    <Disclosure key={item.id}>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button as={NavLink} to={item.path}
                                                    className={`flex items-center justify-between rounded-md px-2.5 py-2 text-gray-200 transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                                                        open
                                                            ? "bg-gray-700"
                                                            : ""
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-2.5">
                                                        <item.icon className="text-xl" />{" "}
                                                        {item.name}
                                                    </div>
                                                    {open ? (
                                                        <ArrowUp className="text-gray-200" />
                                                    ) : (
                                                        <ArrowDown className="text-gray-400" />
                                                    )}
                                                </Disclosure.Button>
                                                <Transition
                                                    enter="transition duration-100 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-75 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    <Disclosure.Panel className=" flex flex-col gap-1 rounded-md bg-gray-700 px-2.5 py-3 text-gray-500 shadow-md">
                                                        {item.subItems.map(
                                                            (subItem) => (
                                                                <NavLink
                                                                    to={
                                                                        subItem.path
                                                                    }
                                                                    key={
                                                                        subItem.id
                                                                    }
                                                                    className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-gray-200 transition-colors duration-200 hover:bg-gray-600/40 hover:text-white [&.active]:bg-gray-600/40 [&.active]:text-white "
                                                                >
                                                                    {subItem.icon && (
                                                                        <subItem.icon className="text-xl" />
                                                                    )}
                                                                    {
                                                                        subItem.name
                                                                    }
                                                                </NavLink>
                                                            )
                                                        )}
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Disclosure>
                                );
                            })}
                        </nav>
                    </div>
                    <div className="mt-auto">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={`flex w-full items-center justify-between rounded-t-lg px-5 py-3 text-gray-200 outline-none transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                                            open ? "bg-gray-700" : ""
                                        }`}
                                    >
                                        <div
                                            className={`flex items-center gap-2.5 ${
                                                open ? "text-white" : ""
                                            }`}
                                        >
                                            <SettingsIcon className="text-xl" />{" "}
                                            Settings
                                        </div>
                                        {open ? (
                                            <ArrowUp className="text-white" />
                                        ) : (
                                            <ArrowDown className="text-gray-400" />
                                        )}
                                    </Popover.Button>

                                    <Popover.Panel className="absolute bottom-[60px] left-1 right-1 z-10">
                                        <div className="flex w-full flex-col gap-6 rounded-xl border border-gray-200 bg-white p-4 text-gray-700 shadow shadow-white/10">
                                            <div>
                                                <h3 className="mb-2 font-bold">
                                                    Theme Mode
                                                </h3>
                                                <div className="flex flex-wrap gap-5">
                                                    <button
                                                        className={`inline-flex items-center gap-2 font-medium transition-colors duration-200 hover:text-primary  ${
                                                            themeMode ===
                                                            "light"
                                                                ? "text-primary"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleThemeMode(
                                                                "light"
                                                            )
                                                        }
                                                    >
                                                        <SunIcon /> Light
                                                    </button>
                                                    <button
                                                        className={`inline-flex items-center gap-2 font-medium transition-colors duration-200 hover:text-primary ${
                                                            themeMode === "dark"
                                                                ? "text-primary"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleThemeMode(
                                                                "dark"
                                                            )
                                                        }
                                                    >
                                                        <MoonIcon /> Dark
                                                    </button>
                                                    <button
                                                        className={`inline-flex items-center gap-2 font-medium transition-colors duration-200 hover:text-primary ${
                                                            themeMode ===
                                                            "system"
                                                                ? "text-primary"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleThemeMode(
                                                                "system"
                                                            )
                                                        }
                                                    >
                                                        <ColorAdjustIcon />{" "}
                                                        System
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 font-bold">
                                                    Primary Color
                                                </h3>
                                                <div className="grid w-11/12 grid-cols-4 gap-3">
                                                    {themeColors.map(
                                                        (color) => (
                                                            <button
                                                                key={color.id}
                                                                title={
                                                                    color.name
                                                                }
                                                                style={{
                                                                    backgroundColor:
                                                                        color.code,
                                                                }}
                                                                className={`block h-11 w-11 rounded shadow-lg ring-2 ring-offset-2 ${
                                                                    color.code ===
                                                                    activePrimaryColor
                                                                        ? "ring-primary"
                                                                        : "ring-transparent"
                                                                }`}
                                                                onClick={() =>
                                                                    handleThemeColor(
                                                                        color
                                                                    )
                                                                }
                                                            ></button>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-1.5 right-10 h-0 w-0">
                                            <div className="h-2.5 w-2.5 rotate-45 transform border-r border-t border-white bg-white"></div>
                                        </div>
                                    </Popover.Panel>
                                </>
                            )}
                        </Popover>
                    </div>
                </div>
                {isOpen && (
                    <button
                        onClick={() => handleCloseSidebar()}
                        className="pointer-events-auto absolute -right-10 top-4 z-30 text-3xl text-white xl:hidden"
                    >
                        <CloseIcon />
                    </button>
                )}
            </div>
            <div
                onClick={() => handleCloseSidebar()}
                className={`absolute bottom-0 right-0 top-0 h-full w-[calc(100%-300px)] xl:hidden ${
                    isOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            />
        </div>
    );
}

export default Sidebar