import { Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { MyContext } from '../contexts/contextProvider';
import { useContext } from 'react';

const UseContextComponent = () => {
  const { name } = useContext(MyContext);

  return (
    <div className="w-screen h-screen overflow-hidden bg-slate-300">
      <div className="px-8 py-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center mt-10 font-semibold font-mono"> useContext Hook </h1>
        <h2 className="text-center mt-10 font-semibold font-mono text-xl lg:text-3xl "> Your name is {name} </h2>
        <h2 className="text-center mt-10 font-semibold font-mono text-xl lg:text-3xl "> How do I know? UseContext! </h2>
        <h2 className="text-center mt-10 font-semibold font-mono text-xl lg:text-3xl "> I even paired it up with localStorage, page refresh will not erase the value</h2>
        <div className="flex mt-12 justify-center items-center px-4">
        </div>
        <div className="flex mt-12">
          <Link to="/task3">
            <Button className='mx-4' rounded> 🡸 Back </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UseContextComponent;
