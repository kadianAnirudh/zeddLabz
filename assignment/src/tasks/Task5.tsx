import React from 'react';

interface Task5Props {
  name: string;
  month: string;
}

const Task5: React.FC<Task5Props> = ({ name, month }) => {
  return (
    <div>
      <h1>This is Task 5 and the data here is being received from Task 1</h1>
      <p>Thank you for going through this assignment, {name}!</p>
      <p>I hope you achieve a lot in this month of {month}.</p>
    </div>
  );
};

export default Task5;