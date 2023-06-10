import { Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import React from 'react';

interface Task1AProps {
  // Define your props here (if any)
}

interface Task1AState {
  inputValue: string;
}

class Task1A extends React.Component<Task1AProps, Task1AState> {
  constructor(props: Task1AProps) {
    super(props);
    this.state = {
      inputValue: '' // Initialize the state to an empty string
    };
  }

  render() {

    return (
      <div className="w-screen h-screen overflow-hidden bg-slate-300">
        <div className="px-8 py-8 flex flex-col justify-center items-center">
          <h1 className="text-5xl text-center mt-10 font-semibold font-mono"> Task 1A </h1>
          <h2 className="text-center mt-16 font-semibold font-mono text-xl lg:text-3xl "> I was supposed to create a class component </h2>
          <h2 className="text-center mt-16 font-semibold font-mono text-xl lg:text-3xl "> This is a class component made with "class X extends React.component" </h2>
          {/* <Link to='/task1a' className="mt-16"> */}
            <div className="flex mt-16">
                <Link to="/">
            <Button className='mx-4' rounded> 🡸 Back </Button>
                </Link>

                <Link to="/task1b">
            <Button className='mx-4' rounded> Proceed 🡺 </Button>
                </Link>
            </div>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default Task1A;
