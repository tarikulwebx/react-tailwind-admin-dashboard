import { Route } from "react-router-dom";
import { RootLayout } from "../layouts";
import { Components, Dashboard, Error404, Users } from "../pages";
import { Cards, Tables } from "../pages/component-pages";

const AppRoutes = (
    <Route path="/" element={<RootLayout />} errorElement={<Error404 />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="components" element={<Components />} />
        <Route path="components/tables" element={<Tables />} />
        <Route path="components/cards" element={<Cards />} />
    </Route>
);

export default AppRoutes;
