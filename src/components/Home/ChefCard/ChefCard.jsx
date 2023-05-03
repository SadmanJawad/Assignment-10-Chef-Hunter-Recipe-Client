import React, { useEffect, useState } from "react";
import CardDetails from "../../CardDetails/CardDetails";

const ChefCard = () => {
  const [chefDatas, setChefDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef-data")
      .then((res) => res.json())
      .then((data) => setChefDatas(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-3 mt-4 gap-4">
        {chefDatas.map((chefData) => (
          <CardDetails 
          key={chefData.id} 
          chefData={chefData}
          >
          </CardDetails>
        ))}
      </div>
    </div>
  );
};

export default ChefCard;
