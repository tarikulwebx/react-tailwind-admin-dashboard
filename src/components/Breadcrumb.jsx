import { useContext } from "react";
import { Link } from "react-router-dom";
import { BreadcrumbContext } from "../contexts";

const Breadcrumb = () => {
    const {breadcrumbItems} = useContext(BreadcrumbContext);
    return (
        <nav className="w-full rounded-md px-4 xl:px-5 py-6">
            <ol className="list-reset flex text-gray-400">
                {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index !== 0 && <div className="px-2.5">/</div>}
                        {item.path ? (
                            <Link to={item.path} className="text-primary font-medium transition-opacity hover:opacity-80">{item.label}</Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb