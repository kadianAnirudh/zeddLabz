import { Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Usestated = () => {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
        <div className="w-screen h-screen overflow-hidden bg-slate-300">
      <div className="px-8 py-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center mt-10 font-semibold font-mono"> useState Hook </h1>
        <h2 className="text-center mt-10 font-semibold font-mono text-xl lg:text-3xl "> You've already 'use'd this, an increment counter </h2>
        <div className="flex mt-12 justify-center items-center px-4">
                    <div className="flex mt-2 justify-center items-center">
          <Button className='cursor-pointer' rounded onClick={decrementCount} size='sm'> - </Button>
          <h3 className="text-4xl font-semibold mx-4">{count}</h3>
          <Button className='cursor-pointer' rounded onClick={incrementCount} size='sm'> + </Button>
        </div>
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

export default Usestated