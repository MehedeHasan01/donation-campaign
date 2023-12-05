import { Link } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";


const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
        <div className="h-[78vh] flex items-center justify-center">
            <div>
            <h1 className="font-extrabold text-5xl">No data Found</h1>
            <Link to={'/'} >
                <button className="btn bg-red-400 block mx-auto mt-4">Home</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;