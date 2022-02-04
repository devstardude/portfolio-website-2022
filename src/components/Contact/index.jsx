import React from "react";
import { HiOutlineMail } from "react-icons/hi";

//import'./style.css';

const Contact = (props) => {
  return (
    <section id="contact" className="pt-[5rem]">
      <div className="flex items-center ">
        <div className="w-[80px] bg-[#991B1B] h-[10px] rounded-full"></div>
      </div>
      <div className="h-[4px] border-b-[1px] border-[#212D45] pt-[3rem]"></div>
      <div className="pt-[3rem] ">
        <p className="text-slate-400 text-[20px] pb-[15px] flex items-center">
          <HiOutlineMail className="mr-[10px]" color="#E34134" /> Mail me
        </p>
        <p className="text-slate-200 text-[20px]">devstardude@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
