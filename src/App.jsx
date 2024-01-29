import React from "react"
import Banner from "./Component/Banner"
import Navbar from "./Component/Navbar"



function App() {
 

  return (
 <>
 <div   className="back bg-no-repeat  min-h-screen bg-cover bg-bottom overflow-hidden   ">


 <div className=" h-full    max-w-[1596px]">
 <Navbar />
<Banner />
</div>
</div>
 </>
  )
}

export default App
