import { useBreadcrumb } from "../hooks";

const Dashboard = () => {
    const breadcrumbItems = [
        {
            label: "Home",
            path: "/",
        },
    ];
    useBreadcrumb(breadcrumbItems);

    return (
        <>
            <div>Dashboard</div>
        </>
    );
};

export default Dashboard;
