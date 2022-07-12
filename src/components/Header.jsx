/** @format */

import React from "react";
import imgPaul from "./../assets/img/paul.jpeg";

const Header = () => {
  return (
    <div className="lg:h-36 bg-base-200 flex px-2">
      <div className="grid justify-items-center shrink w-96 lg:w-128">
        <img src={imgPaul} className="mask mask-circle w-24" alt="" />
        <span className="animate__animated animate__backInLeft text-center md:text-lg text-xs font-bold lg:block font-Slab">
          VINCENT PAULINUS BARU, ST., M.URP
        </span>
      </div>
      <div className="flex items-center shrink w-full border-l border-base-100  border-collapse px-2">
        <span className="animate__animated animate__backInRight font-bold text-sm w-full text-center md:text-xl font-Slab uppercase">
          Pemimpin Perubahan: MUDA, CERDAS,BERSIH, BERANI, INOVATIF, DAN
          PROFESIONAL
        </span>
      </div>
    </div>
  );
};

export default Header;
