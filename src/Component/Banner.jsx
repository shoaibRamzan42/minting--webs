import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";



const Banner = () => {
    const [count, setCount] = useState(0);


  return (
    <>
     
      <div className="flex flex-col justify-center mt-40 items-center gap-5">
      <button className="px-8 py-4 bg-white rounded-lg shadow-lg shadow-cyan-600 text-[12px] md:text-[16px] font-extrabold ">
            Minted NFT : 480/11569
          </button>
        <div className="flex gap-6 justify-center items-center">
        
          <button onClick={ count> 0 ?()=> setCount(count - 1) : count}  className="bg-white px-2 py-2 rounded-2xl">
            <IconButton>
              <RemoveIcon style={{ color: "black", fontSize: 30 }} />
            </IconButton>
          </button>
          {/* <span class="text-2xl font-bold">{{ count }}</span> */}
          <h1 className="text-2xl text-white font-bold"> {count} </h1>
          <button onClick={ count>= 0 ?()=> setCount(count + 1) : count}  className="bg-white px-2 py-2 rounded-2xl">
            <IconButton>
            
              <AddIcon style={{ color: "black", fontSize: 30 }} />
            </IconButton>
          </button>
        </div>

        <div className="flex gap-3">
          <button className="md:px-20 sm:px-12  py-4 bg-white rounded-full text-[12px] md:text-[16px] font-extrabold ">
            Mint
          </button>
          <button className="md:px-20 sm:px-12  py-4 bg-sky-300 rounded-full text-[12px] md:text-[16px] font-extrabold ">
            Mint
          </button>
        </div>
        </div>
  
    </>
  );
};

export default Banner;
