import { FaGoogleWallet } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import kTM from '../../assets/ktm.png';
import kawasaki from '../../assets/kawasaki.png';
import mt09 from '../../assets/sec03_04_mt-09.jpg';
import { useContext, useState } from "react";
import { BlockchainContext } from "../../context/BlockchainContext";

const Dashboard = () => {
  const {renter, addRenter, diposit, balance, due, totalDuration}= useContext(BlockchainContext);
  const [name,setName]=useState({first:'', last:''});
  const [creditAmount, setCreditAmount]=useState(0);

  

  return (
    <>
    {
      renter? <div className="p-5">
      <h1 className="text-end font-[700] text-lg">
        Welcome <span className="text-sky-700">Shazzad</span>!
      </h1>
      {/* Stats */}
      <div className="px-5 py-10 flex justify-center">
        <div className="flex items-center gap-5">
          <div className="border rounded-[0.5rem] p-2 w-[200px] h-[100px] shadow-md flex justify-between items-center">
            <div className="">
              <h2>BNB Credit</h2>
              <h1 className="font-[700] text-xl">{balance}</h1>
            </div>
            <FaGoogleWallet className="h-[50px] w-[50px] text-sky-700" />
          </div>

          <div className="border rounded-[0.5rem] p-2 w-[200px] h-[100px] shadow-md flex justify-between items-center">
            <div className="">
              <h2>BNB Due</h2>
              <h1 className="font-[700] text-xl">{due}</h1>
            </div>
            <FaSackDollar className="h-[50px] w-[50px] text-sky-700" />
          </div>

          <div className="border rounded-[0.5rem] p-2 w-[200px] h-[100px] shadow-md flex justify-between items-center">
            <div className="">
              <h2>Ride Minutes</h2>
              <h1 className="font-[700] text-xl">{totalDuration}</h1>
            </div>
            <MdOutlineAccessTimeFilled className="h-[50px] w-[50px] text-sky-700" />
          </div>

          <div className="border rounded-[0.5rem] p-2 w-[200px] h-[100px] shadow-md flex justify-between items-center">
            <div className="">
              <h2>Bike Status</h2>
              <h1 className="font-[700] text-xl">&nbsp;</h1>
            </div>
            <FaCheck className="h-[50px] w-[50px] text-sky-700" />
          </div>
        </div>
      </div>

      {/* Forms */}
      <div className="flex justify-center">
      <div className="flex items-center gap-14 justify-center border rounded bg-slate-50 p-5 ">
        <div className="rounded shadow-md max-w-[300px] w-full">
          <h1 className="px-2 py-3 bg-sky-500 text-white rounded-t font-[600]">
            Pay Due Amount
          </h1>
          <div className="p-2">
          <input type="number" className="p-2 rounded border w-full outline-none " />

          </div>
          <div className="p-2">
          <button className="p-2 w-full bg-sky-600 active:scale-95 font-[700] rounded text-white">Submit</button>
          </div>
        </div>

        <div className="rounded shadow-md max-w-[300px] w-full">
          <h1 className="px-2 py-3 bg-sky-500 text-white rounded-t font-[600]">
            Credit Your Account
          </h1>
          <div className="p-2">
          <input type="number" className="p-2 rounded border w-full outline-none " value={creditAmount} onChange={({target:{value}})=>setCreditAmount(value)} />

          </div>
          <div className="p-2">
          <button className="p-2 w-full bg-sky-600 active:scale-95 font-[700] rounded text-white" onClick={()=>diposit(creditAmount)} >Submit</button>
          </div>
        </div>
      </div>
      </div>

      {/* Bike cards */}
      <div className="flex justify-center py-10">
        <div className="grid grid-cols-3 gap-4 ">
            

        <div className="border max-w-[400px] w-full rounded">
                <img src={kTM} alt="KTM" className="w-full rounded-t" />
                <div className="p-2 bg-slate-100 border-t ">
                    <p className="text-justify font-[500]">The KTM RC 390 is a high-performance sport motorcycle known for its aggressive design and dynamic performance. Powered by a 373.2cc single-cylinder engine, it boasts impressive horsepower and torque. With a lightweight frame, advanced suspension, and modern features like a slipper clutch, the RC 390 offers an exhilarating riding experience on both the road and track.</p>

                    <div className="flex justify-center items-center gap-2 py-5">
                        <button className="bg-sky-700 p-2 rounded shadow-md active:scale-95 text-white font-[700] w-[150px]">Check Out</button>
                        <button className="bg-sky-700 p-2 rounded shadow-md active:scale-95 text-white font-[700] w-[150px]">Check In</button>
                    </div>
                </div>
            </div>


            <div className="border max-w-[400px] w-full rounded">
                <img src={kawasaki} alt="KTM" className="w-full rounded-t " />
                <div className="p-2 bg-slate-100 border-t ">
                    <p className="text-justify font-[500]">The Kawasaki Ninja ZX-10R is a high-performance sport motorcycle known for its aggressive design and dynamic performance. Powered by a 373.2cc single-cylinder engine, it boasts impressive horsepower and torque. With a lightweight frame, advanced suspension, and modern features like a slipper clutch, the RC 390 offers an exhilarating riding experience on both the road and track.</p>

                    <div className="flex justify-center items-center gap-2 py-5">
                        <button className="bg-sky-700 p-2 rounded shadow-md active:scale-95 text-white font-[700] w-[150px]">Check Out</button>
                        <button className="bg-sky-700 p-2 rounded shadow-md active:scale-95 text-white font-[700] w-[150px]">Check In</button>
                    </div>
                </div>
            </div>


            <div className="border max-w-[400px] w-full rounded">
                <img src={mt09} alt="KTM" className="w-full rounded-t" />
                <div className="p-2 bg-slate-100 border-t ">
                    <p className="text-justify font-[500]">The Yamaha MT09 is a high-performance sport motorcycle known for its aggressive design and dynamic performance. Powered by a 373.2cc single-cylinder engine, it boasts impressive horsepower and torque. With a lightweight frame, advanced suspension, and modern features like a slipper clutch, the RC 390 offers an exhilarating riding experience on both the road and track.</p>

                    <div className="flex justify-center items-center gap-2 py-5">
                        <button className="bg-sky-700 p-2 rounded shadow-md active:scale-95 text-white font-[700] w-[150px]">Check Out</button>
                        <button className="bg-sky-700 p-2 rounded shadow-md active:scale-95 text-white font-[700] w-[150px]">Check In</button>
                    </div>
                </div>
            </div>


        </div>
      </div>



    </div>
    :
    <div className="p-5 min-h-[calc(100vh-80px)] flex justify-center items-center">

      <div className="border rounded p-5 max-w-[500px] w-full mx-auto">
      <h1 className="pb-2">First Name</h1>
      <input type="text" placeholder="First Name" className="border rounded p-2 w-full" value={name.first} onChange={({target:{value}})=>setName(prev=>{prev.first=value; return {...prev}})} />
      <h1 className="pb-2 pt-3">Last Name</h1>
      <input type="text" placeholder="Last Name" className="border rounded p-2 w-full" value={name.last} onChange={({target:{value}})=>setName(prev=>{prev.last=value; return {...prev}})} />
      <button className="mt-5 px-3 py-2 bg-sky-700 text-white w-full rounded active:scale-95"  onClick={()=> addRenter(name)} >Register</button>
      </div>
    </div>
    }
    </>
  );
};

export default Dashboard;
