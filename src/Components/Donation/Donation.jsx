import { useOutletContext } from 'react-router-dom';
import DonationCard from './DonationCard';
import {  useEffect, useState } from 'react';

const Donation = () => {
    const searchValue = useOutletContext()

    const [donations, setDonations] = useState([]);
    const [searchDination, setSearchDination] = useState([]);
    useEffect(()=>{
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    },[]);
    useEffect(()=>{
        const InputValue = searchValue[0]?.toLowerCase()
        setSearchDination(donations)
        if(InputValue == 'health'){
            const filter = donations.filter(donation => donation.category == 'Health');
            setSearchDination(filter)
        }
        if(InputValue == 'food'){
            const filter = donations.filter(donation => donation.category == 'Food');
            setSearchDination(filter)
        }
        if(InputValue == 'clothing'){
            const filter = donations.filter(donation => donation.category == 'Clothing');
            setSearchDination(filter)
        }
        if(InputValue == 'education'){
            const filter = donations.filter(donation => donation.category == 'Education');
            setSearchDination(filter)
        }


    },[searchValue, donations])
    return (
        <div className="max-w-6xl mx-auto my-24">
            <div className='w-fit mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    searchDination?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Donation;
