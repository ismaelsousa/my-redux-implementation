import React from "react";
import useSelector from "../../Hooks/useSelector";

const Start: React.FC = () => {
  const state = useSelector((state: any) => state.post);

  console.log("Render: Start");

  return (
    <div>
      <h1>Start</h1>
    </div>
  );
};

export default Start;
