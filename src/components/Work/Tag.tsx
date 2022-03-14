import React from "react";

import "./Tag.scss";

const Tag = ({ children }: any) => (
  <div className="tag">
    <p>{children}</p>
  </div>
);

export default Tag;
