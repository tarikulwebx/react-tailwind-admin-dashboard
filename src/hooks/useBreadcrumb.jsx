import { useContext, useEffect } from "react";
import { BreadcrumbContext } from "../contexts";


const useBreadcrumb = (breadcrumbItems) => {
    const { setBreadcrumbItems } = useContext(BreadcrumbContext);

    useEffect(() => {
        setBreadcrumbItems(breadcrumbItems);
    }, [breadcrumbItems, setBreadcrumbItems]);
};

export default useBreadcrumb;
