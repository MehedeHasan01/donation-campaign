// import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import TotalDonationCard from "./TotalDonationCard";
import { useEffect, useState } from "react";

const TotalDonation = () => {
    const [DonationItems, setDonationItems] = useState([])
    const [SeeAll, setSeeAll] = useState(4);
    const [noFound, setNoFound] = useState("")
    useEffect(()=>{

        const Donations = JSON.parse(localStorage.getItem('donation'));
        if(Donations){
            setDonationItems(Donations)
        }else{
            setNoFound('No data Found')
        }
    },[])
    return (
        <div className="max-w-6xl mx-auto my-5 px-5 md:px-0">
            <Helmet>
                <title>Donation | Total Donation</title>
            </Helmet>

            {
                noFound ?

                <div className="h-[50vh] flex items-center justify-center">
                <h1 className="font-extrabold text-5xl">{noFound}</h1>
                 </div>
                 :
                 <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
                {
                    DonationItems.slice(0, SeeAll).map(donation => <TotalDonationCard key={donation.id} donation={donation}></TotalDonationCard>)
                }
                </div>

                {
                    DonationItems.length > 4 && <button className={` ${SeeAll === DonationItems.length && 'hidden' }  px-9 py-3 bg-[#009444] text-white font-semibold rounded-lg block mx-auto my-6`}
                    onClick={()=> setSeeAll(DonationItems.length)}
                    >See All</button>
                }



                </div>

            }
        </div>
    );
};

export default TotalDonation;