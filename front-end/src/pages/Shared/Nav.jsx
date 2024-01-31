import { useContext } from 'react';
import metaMaskIcon from '../../assets/metamask.png';
import { Link } from 'react-router-dom';
import { BlockchainContext } from '../../context/BlockchainContext';

const Nav = () => {
    const {connectWallet, currentAccount}= useContext(BlockchainContext);

    const handleConnect =()=> {
        connectWallet()
    }
    return (
        <div>
            <div className="flex justify-between bg-sky-900 p-5">
                <Link className='font-[700] text-3xl font-mono text-sky-200' to='/'>Bike<span className='text-blue-400'>Chain</span></Link>
                <button className='flex items-center gap-2 px-3 py-2 rounded bg-sky-400 text-white drop-shadow-md active:scale-95' onClick={handleConnect}><img src={metaMaskIcon} alt="" /><h1 className='drop-shadow-md w-[130px] truncate'>{currentAccount? currentAccount: 'Collect to Wallet'} </h1></button>
            </div>
            
        </div>
    );
};

export default Nav;