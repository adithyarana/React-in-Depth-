import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-3xl text-center">Contact</h1>
      {/* build contact basic form */}
      <div className="flex justify-center items-center">
        <form action="" className="flex flex-col gap-2 w-[400px] py-4">
          <input type="text" placeholder="Enter your name" className="p-2 border border-gray-400" />
          <input type="email" placeholder="Enter your email" className="p-2 border border-gray-400" />
          <input type="number" placeholder="Enter your number" className="p-2 border border-gray-400" />
          <button className="p-2 font-medium text-green-500 bg-gray-100 rounded-2xl cursor-pointer">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
