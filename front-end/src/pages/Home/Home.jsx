import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-[calc(100vh-80px)] w-screen flex justify-center items-center'>
            <button className='bg-sky-600 px-3 py-2 rounded  text-white font-[700] active:scale-95 shadow-md' onClick={()=>navigate('/dashboard')}>Get Started</button>
            
        </div>
    );
  };

export default Home;