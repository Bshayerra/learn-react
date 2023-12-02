import React from "react";

function Header (){
  const title="Types of roses";
  return (
    <div className="navbar bg-danger rounded" >
        <h1 className="text-light" >{title}</h1>
    </div>

  );
}

export default Header;
