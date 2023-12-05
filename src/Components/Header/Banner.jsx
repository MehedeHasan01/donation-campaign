import { useState } from "react";
import swal from "sweetalert";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

const Banner = () => {
    const  [searchValue, setSearchValue] = useOutletContext()
    const [searchInput, setSearchInput ] = useState('');
    const searchFaild = e=> {
        e.preventDefault()

        if(searchInput === ' ' || searchInput.length > 0){
            setSearchValue(searchInput)


        }else{
            swal("Not Found Donations Name", "Please Valied Provided Donations Name.", "error");
        }

    }

    const handleSearchChange =(e) =>{
        setSearchInput(e.target.value)
    }


    return (

        <div className="-mt-[51px] ">

        <Helmet>
         <link rel="icon" type="image/svg+xml" href="/public/react.svg" />
            <title>Donation | Home</title>
        </Helmet>

            <div className="  bgImgColor   h-[85vh]  flex  ">
                <div className="flex items-center w-fit mx-auto">
                    <div>
                    <div >
                    <h1 className="text-[#0B0B0B] text-5xl font-bold  ml-10">I Grow By Helping People In Need</h1>
                    </div>
                    <div className="mt-6 w-fit mx-auto">

                    <form onSubmit={searchFaild} className="join ">
                    <input onChange={handleSearchChange} name="search" className="input input-bordered join-item placeholder:text-gray-900" placeholder="Search here..."/>
                    <button className=" text-white font-semibold text-base px-3 join-item rounded-r-lg  bg-[#FF444A]" type="submit">Subscribe</button>
                    </form>

                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;