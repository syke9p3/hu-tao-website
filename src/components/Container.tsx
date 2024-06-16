import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container px-4 sm:px-12 mx-auto max-w-7xl xl:px-6">{children}</div>
  );
};

export default Container;
