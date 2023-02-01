import React from "react";
import { useEffect } from "react";
export const Not_found = () => {
  useEffect(() => {
    let interval = setInterval(() => {
      window.location.href = "/Account_Page";
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className=" text-2xl text-center text-red-500">
        <div className="items-center">
          Page Not Found/You Are Not Authenticated!!!
        </div>
        <div className="text-md">Will be redirected in 3 secounds</div>
      </div>
    </>
  );
};
