import { useBreadcrumb } from "../hooks";

const Users = () => {
    const breadcrumbItems = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Users",
            path: "",
        }
    ];
    useBreadcrumb(breadcrumbItems);

    return <div>Users</div>;
};

export default Users;
