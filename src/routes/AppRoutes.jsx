import { Route } from "react-router-dom";
import { RootLayout } from "../layouts";
import { Dashboard, Error404, Users } from "../pages";

const AppRoutes = (
    <Route path="/" element={<RootLayout />} errorElement={<Error404 />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
    </Route>
);

export default AppRoutes;
