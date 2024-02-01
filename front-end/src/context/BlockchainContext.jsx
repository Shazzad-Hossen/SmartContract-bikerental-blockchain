import React, { createContext, useEffect, useState } from "react";
import { abi, contractAddress } from "../config.json";
import { ethers, formatUnits, parseUnits } from "ethers";

export const BlockchainContext = createContext();

// eslint-disable-next-line react/prop-types
const BlockchainProvider = ({ children }) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const address = contractAddress;
  const daiAbi = abi;
  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract]=useState(null);
  const [balance, setBalance] = useState(0.00);
  const [renter, setRenter]=useState(false);
  const [due, setDue]=useState(0.00);
  const [totalDuration, setTotalDuration]=useState(0);
  const [renterDetails,setRenterDetails]=useState(null);

  console.log(renter);

  const getContract = async()=> {
    const signer =  await provider.getSigner();
    const contract = new ethers.Contract(address, daiAbi, signer);
    setContract(contract);

  }

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install meta mask");
      const accounts = await provider.send("eth_requestAccounts");
      setCurrentAccount(accounts[0]);
    //   console.log(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkConnectAccounts = async () => {
    try {
      if (!window.ethereum) return alert("Please install meta mask");
      const accounts = await provider.send("eth_accounts");
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
        getContract();
        
      } else console.log("No Connected Accounts");
    } catch (error) {
      console.log(error);
    }
  };
  //Cet balance
  const getBalance = async () => {
    try {
      const mybalance = await contract.balanceOf();
      setBalance(formatUnits(mybalance,18));
    } catch (error) {
      console.log(error);
    }
  };

  //Get Due amount

  const getDue = async()=> {
    const dueAmount = await contract.getDue(currentAccount);
    console.log('Due:' , dueAmount);
    setDue(formatUnits(dueAmount,18));
  }

  //Get Total Duration 
  const getTotalDuration = async ()=> {
    const totalDurationMinute = await contract.getTotalDuration(currentAccount);
    setTotalDuration(Number(totalDurationMinute))
    
  }

  //Check if renter exists or not
  const checkRenterExist =async()=> {
    const isRenter = await contract.renterExists(currentAccount);
    setRenter(isRenter);
  }
  

  //Register Renter

  const addRenter = async({first, last})=>{
    const newRenter = await contract.addRenters(currentAccount,first, last, true, false ,0,0,0,0);
    console.log(newRenter);
    if(newRenter) {
        checkRenterExist();
        // const renterInfo = await contract.getRenter(currentAccount);
        // console.log('renterInfo: ', renterInfo);
    }
  }

  //Diposit

  const diposit = async(amount)=> {
    const dipositRes = await contract.diposit(currentAccount, { value: parseUnits(amount, 18)});
    await dipositRes.wait();
    await getBalance();
    
  }

  //Make Due Payment

  const makeduePayment = async(amount)=>{
    const paymentRes = await contract.makePayment(currentAccount, { value: parseUnits(amount,18)});
    await paymentRes.wait();
    await getBalance();
    await getDue();
    await getTotalDuration();
    if(paymentRes) alert('Due Payment Successful');
    
  }

  //Checkout Bike

  const checkoutBike = async()=> {
    const checkoutRes= await contract.checkOut(currentAccount);
    await checkoutRes.wait();
    await getRenter();
    if(checkoutRes) alert('Checkout Successfull');
  }

  //Checkin Bike

  const checkinBike = async()=> {
    const checkinRes = await contract.checkIn(currentAccount);
    await checkinRes.wait();
    await getRenter();
    await getTotalDuration();
    await getDue();
    alert('Check In Successfull')
  }

  const getRenter = async()=> {
    const renterDetailsInfo = await contract.getRenter(currentAccount);
    setRenterDetails(renterDetailsInfo);
  }

  useEffect(()=> {
    if(currentAccount && contract) {
        checkRenterExist();
    }
  },[currentAccount, contract])

  useEffect(() => {
    checkConnectAccounts();
  }, []);

  useEffect(()=> {
    if(renter) {
        getBalance();
        getDue();
        getTotalDuration();
        getRenter();

    }

  }, [renter]);



  return (
    <BlockchainContext.Provider value={{ connectWallet, currentAccount, renter , addRenter, diposit, balance, due, totalDuration, checkoutBike, checkinBike, makeduePayment, renterDetails}}>
      {children}
    </BlockchainContext.Provider>
  );
};

export default BlockchainProvider;
