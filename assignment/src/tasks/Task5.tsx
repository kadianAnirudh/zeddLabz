import { Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../contexts/contextProvider';


const Task5 = () => {
  const { name } = useContext(MyContext);

  return (
    <div className="w-screen h-screen overflow-hidden bg-slate-300">
      <div className="px-8 py-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center mt-10 font-semibold font-mono"> Task 5 </h1>
        <h2 className="text-center mt-16 font-semibold font-mono text-xl lg:text-3xl "> I was supposed to pass data from one component to another </h2>
        <h2 className="text-center mt-16 font-semibold font-mono text-xl lg:text-3xl "> {name}, your name is being passed here from page 1.  </h2>
        <div className="flex mt-16">
          <Link to="/task4">
            <Button className='mx-4' rounded> 🡸 Back </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task5
