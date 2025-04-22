import React from "react";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcoming you to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold">Improve yourself everyday!!</h2>
            <p className="text-sm md:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!dolor sit amet consectetur adipisicing elit amet atque expedita!!!
            </p>
          </div>
          {/* <button className="btn mt-6 btn-secondary">Get Started</button> */}
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={"https://images.unsplash.com/photo-1570676765227-b25aa08d9752?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGJvb2t8ZW58MHx8MHx8fDI%3D"}// Use static path without dynamic string
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
