import React from "react";

export const Banner = () => {
  return (
    <div className="container ">
      <div className=" bg-secondary mt-4 pt-3 pb-4 ps-3 ">
        <h1 className=" pt-5">A Warm Welcome!</h1>
        <p className=" fs-5">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
          <button className="btn btn-primary d-block mt-4 mb-5">
            Call to action!
          </button>
        </p>
      </div>
    </div>
  );
};
