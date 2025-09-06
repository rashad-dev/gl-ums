import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex mt-28 items-center justify-center w-full h-96">
      <HashLoader color="#3A4980" />
    </div>
  );
};

export default Loader;
