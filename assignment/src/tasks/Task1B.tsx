import { useState, ChangeEvent } from 'react';
import { Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import Props from './Props';
import { useContext } from 'react';
import { MyContext } from '../contexts/contextProvider';


const Task1B = () => {
  const [age, setAge] = useState<number>(0);
  const { name } = useContext(MyContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value));
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-slate-300">
      <div className="px-8 py-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center mt-10 font-semibold font-mono"> Task 1B </h1>
        <h2 className="text-center mt-16 font-semibold font-mono text-xl lg:text-3xl "> I had to create a React Functional component ( with Props ) </h2>
        <h2 className="text-center mt-16 font-semibold font-mono text-xl lg:text-3xl "> This is a functional component, enter your age to pass it as a Prop </h2>
        <div className="flex mt-12 justify-center items-center px-4">
          <input className='border border-4px border-black h-8 px-4' placeholder="your age here ( number) " color='primary' required onChange={handleInputChange} />
          <Props age={age} />
        </div>
        <div className="flex mt-16">
          <Link to="/task1a">
            <Button className='mx-4' rounded> 🡸 Back </Button>
          </Link>
          <Link to="/task2">
            <Button className='mx-4' rounded onClick={console.log(name)}> Proceed 🡺 </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task1B;
