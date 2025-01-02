import React, { PropsWithChildren } from "react";

const HeroOrbit = ({ children, size, rotate }: PropsWithChildren<{ size: number,rotate:number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div
        className="  "
        style={{ width: size, height: size ,transform:`rotate(${rotate}deg)`}}
      >
        <div className=" inline-flex " style={{
            transform: `rotate(-${rotate}deg)`,
        }}>{children}</div>
      </div>
    </div>
  );
};

export default HeroOrbit;
