/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { BreadcrumbContext } from "../contexts";


const useBreadcrumb = (breadcrumbItems) => {
    const { setBreadcrumbItems } = useContext(BreadcrumbContext);
    useEffect(() => {
        setBreadcrumbItems(breadcrumbItems);
    }, []);
};

export default useBreadcrumb;
