import { Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { MyContext } from '../contexts/contextProvider';
import { useContext } from 'react';

const HomePage = () => {
    
const { setName, name } = useContext(MyContext);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
};

const handleButtonClick = () => {
  console.log(name);
}


return (
        <div className="w-screen h-screen overflow-hidden bg-slate-300">
      <div className="px-8 py-8 flex flex-col justify-center items-center">
    <h1 className="text-5xl text-center mt-10 font-semibold font-mono"> Welcome Human </h1>
    <h2 className="text-center mt-16 font-semibold font-mono text-xl lg:text-3xl "> This is Anirudh Kadian's assessment </h2>
    <h2 className="text-center mt-6 font-semibold font-mono text-xl lg:text-3xl "> Please input your name to proceed </h2>
    <input className='border border-4px border-black h-16 w-56 rounded-lg px-4 mt-16' placeholder="your name here " color='primary' onChange={handleInputChange} />
     <Link to='/task1a'>
     <Button className='mt-10' rounded onClick={handleButtonClick}> Proceed ➤ </Button>
     </Link>
      </div>
    </div>
  )
}

export default HomePage