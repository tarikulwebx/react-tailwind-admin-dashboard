import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { ArticleFillIcon, PeoplesIcon, UserPlusIcon } from "../assets/icons";
import { useBreadcrumb } from "../hooks";
import SectionGap from "../components/SectionGap";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 8000,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

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
            <section>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-md bg-orange-500 text-white shadow dark:bg-orange-600">
                        <div className="flex items-center gap-4 p-4">
                            <PeoplesIcon className="text-5xl" />
                            <div>
                                <h1 className="text-xl font-bold">
                                    Daily Visitors
                                </h1>
                                <p>12345</p>
                            </div>
                        </div>
                        <div className="h-[90px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    width={200}
                                    height={60}
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <Area
                                        type="monotone"
                                        dataKey="uv"
                                        stroke="rgba(255, 255, 255, 0.2)"
                                        fill="rgba(255, 255, 255, 0.5)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="rounded-md bg-zinc-500 text-white shadow dark:bg-zinc-600">
                        <div className="flex items-center gap-4 p-4">
                            <UserPlusIcon className="text-5xl" />
                            <div>
                                <h1 className="text-xl font-bold">New Users</h1>
                                <p>12345</p>
                            </div>
                        </div>
                        <div className="h-[90px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    width={200}
                                    height={60}
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <Area
                                        type="monotone"
                                        dataKey="uv"
                                        stroke="rgba(255, 255, 255, 0.2)"
                                        fill="rgba(255, 255, 255, 0.5)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="rounded-md bg-purple-500 text-white shadow dark:bg-purple-600">
                        <div className="flex items-center gap-4 p-4">
                            <ArticleFillIcon className="text-5xl" />
                            <div>
                                <h1 className="text-xl font-bold">
                                    Article Published
                                </h1>
                                <p>12345</p>
                            </div>
                        </div>
                        <div className="h-[90px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    width={200}
                                    height={60}
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <Area
                                        type="monotone"
                                        dataKey="uv"
                                        stroke="rgba(255, 255, 255, 0.2)"
                                        fill="rgba(255, 255, 255, 0.5)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </section>
            <SectionGap />
            <section>
                Another section
            </section>
        </>
    );
};

export default Dashboard;
