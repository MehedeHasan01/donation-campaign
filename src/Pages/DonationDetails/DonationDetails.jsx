
import { Helmet } from 'react-helmet';
import {   useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const DonationDetails = () => {
    const {id} = useParams();
    const idInt = parseInt(id)
    const donations = useLoaderData();
    const DonationDetail = donations.find(donation => donation.id === idInt);
    const {picture, title, description, price, colors} = DonationDetail;
    const btnStyle = {backgroundColor: colors.text_btn_bg};

    const handleAddtoDonation = ()=>{
        const addedDonationArray = [];
        const DonationItems = JSON.parse(localStorage.getItem('donation'))
        if(!DonationItems){
            addedDonationArray.push(DonationDetail);
            localStorage.setItem('donation', JSON.stringify(addedDonationArray));
            swal("You Are Greate!", "Your Donation Successful Done!!", "success");
        }
        else{
            const isExits = DonationItems.find(Donation => Donation.id === idInt)
            if(!isExits){
                addedDonationArray.push(...DonationItems,DonationDetail );
                localStorage.setItem('donation', JSON.stringify(addedDonationArray));
                swal("Good job!", "Your Donation Successfully.", "success");
            }else{

                swal("Donation Allready Added!", "Your Donation  Allready Added.", "error");
            }
        }
    }


    return (
        <div className='max-w-5xl mx-auto my-2 px-5 md:px-0'>
        <Helmet>
        <link rel="icon" type="image/svg+xml" href="/public/icon.png" />

            <title> { `Donation  | Donation Details: ${idInt}` }  </title>
        </Helmet>
            <div>
                <div className='relative'>
                    <div className='w-full'><img src={picture} className='w-[100%] rounded-lg h-[75vh]'  /></div>

                    <div className='absolute bottom-0 left-0 bg-[#0B0B0B80] rounded-b-lg p-8 w-full'>

                    <button
                    onClick={handleAddtoDonation}
                    className='py-3 px-6  rounded text-white font-semibold text-lg' style={btnStyle}
                    >Donate {price}</button>

                    </div>
                </div>
                <h1 className='text-[#0B0B0B] font-bold text-4xl mt-14'>{title}</h1>
                <p className='text-[#0B0B0BB2] font-normal text-base mt-6'>{description}</p>
            </div>


        </div>
    );
};


export default DonationDetails;