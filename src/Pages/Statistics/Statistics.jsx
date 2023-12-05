import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Statistics = () => {
    const data = useLoaderData();

    const [totalDonations, setTotalDonations] = useState(0);
    const [currentDonations, setCurrentDonations] = useState(0);
    const [noFound, setNoFound] = useState("")

    useEffect(() => {
      const Donations = JSON.parse(localStorage.getItem('donation'));
    // Assuming data is an array and Donations is an array
    if(Donations){
        setTotalDonations(data.length);
        setCurrentDonations(Donations.length);
    }else{
        setNoFound('No data Found')
    }
  }, [data]);


  // Prepare data for the pie chart
  const pieChartData = [
    { name: 'Total Donations', value: totalDonations, fill: '#FF444A' },
    { name: 'Donations', value: currentDonations, fill: '#00C49F' },
  ];

  return (
    <>
    <Helmet>
        <title>Donation | Statistics Donation</title>
    </Helmet>
    {
        noFound ?
        <div className="h-[50vh] flex items-center justify-center">
        <h1 className="font-extrabold text-5xl">{noFound}</h1>
        </div>
        :
        <div className=" flex items-center justify-center">
        <div>
            <ResponsiveContainer  width={350} height={300}>

        <PieChart >
          <Pie
            dataKey="value"
            data={pieChartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            paddingAngle={5}
          />
          <Tooltip />
        </PieChart>
            </ResponsiveContainer>
        <div className="text-lg gap-2 font-bold  ml-5 flex flex-col md:flex-row w-fit mx-auto">
        <p>Total Donations: <span className="text-[#FF444A]">{totalDonations}</span>,</p>
        <p>Your Donations: <span className="text-[#00C49F]">{currentDonations}</span></p>
        </div>
        </div>
      </div>
    }
    </>
  );
};

export default Statistics;
