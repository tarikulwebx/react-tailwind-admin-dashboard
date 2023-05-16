import { ArticleIcon, DashboardIcon, EnvelopeIcon, UserCircleIcon, UsersIcon } from "../assets/icons";

export const navigationItems = [
    {
        id: 1,
        name: "Dashboard",
        path: "/",
        icon: DashboardIcon,
    },
    {
        id: 2,
        name: "Users",
        path: "/users",
        icon: UsersIcon,
    },
    {
        id: 3,
        name: "Contacts",
        path: "/contacts",
        icon: EnvelopeIcon,
    },
    {
        id: 4,
        name: "Contacts",
        path: "/contacts",
        icon: EnvelopeIcon,
    },
];

export const themeColors = [
    {
        id: 1,
        name: "green",
        code: "#22c55e",
    },
    {
        id: 2,
        name: "blue",
        code: "#2196f3",
    },
    {
        id: 3,
        name: "orange",
        code: "#ff9800",
    },

    {
        id: 4,
        name: "purple",
        code: "#9c27b0",
    },

    {
        id: 5,
        name: "indigo",
        code: "#3f51b5",
    },
    {
        id: 6,
        name: "pink",
        code: "#e91e63",
    },
];

export const loginUser = {
    first_name: "Tarikul",
    last_name: "Islam",
    email: "tarikulwebx@gmail.com",
    profile_picture: "",
    is_admin: 1,
}

export const profileNavigationItems = [
    {
        id: 1,
        name: "Profile",
        path: "/profile",
        icon: UserCircleIcon,
    },
    {
        id: 2,
        name: "Articles",
        path: "/articles",
        icon: ArticleIcon,
    },
];