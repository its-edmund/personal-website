import React from "react";
import "./index.scss";

const Center = ({ children, ...props }: { children?: JSX.Element | JSX.Element[] }) => (
  <div className="center" {...props}>
    {children}
  </div>
);

export default Center;
