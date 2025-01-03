import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotate,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotate: number;
  shouldOrbit?: boolean;
  orbitDuration?: number;
  shouldSpin?: boolean;
  spinDuration?: number;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin ")}
        style={{ animationDuration: `${orbitDuration}s` }}
      >
        <div
          className=" flex items-start justify-start "
          style={{
            width: size,
            height: size,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin ")}
            style={{ animationDuration: `${spinDuration}s` }}
          >
            <div
              className=" inline-flex "
              style={{
                transform: `rotate(-${rotate}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
