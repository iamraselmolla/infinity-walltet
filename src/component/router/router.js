import LoginPage from "../pages/login/Login";
import { createBrowserRouter } from "react-router-dom";
import DashboardHome from "../pages/dashboard/DashboardHome";
import PendingOrder from "../pages/dashboard/pending-order/PendingOrder";
import OrderHistory from "../pages/dashboard/order-history/OrderHisotry";
import NewRequest from "../pages/dashboard/new-request/NewRequest";
import DashboardLayout from "../layout.js/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardHome />,
            },
            {
                path: "pending-order",
                element: <PendingOrder />,
            },
            {
                path: "order-history",
                element: <OrderHistory />,
            },
            {
                path: "new-request",
                element: <NewRequest />,
            },
        ],
    },
]);

export default router;
