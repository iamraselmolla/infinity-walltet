import LoginPage from "../Login";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
]);
export default router;