import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import TotalDonation from "../Pages/Donation/TotalDonation";
import Statistics from "../Pages/Statistics/Statistics";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Location from "../Pages/Location/Location";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element: <Home/>,

            },
            {
                path: '/donation',
                element: <TotalDonation/>,
            },
            {
                path: '/statistics',
                element: <Statistics/>,
                loader: ()=> fetch('donation.json')

            },
            {
                path: '/DonationDetails/:id',
                element: <DonationDetails/>,
                loader: ()=> fetch('donation.json')
            },
            {
                path: '/location',
                element: <Location/>
            }
        ]
    }
]);

export default Router;