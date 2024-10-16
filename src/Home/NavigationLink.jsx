import React from "react";
import { Link } from "react-router-dom";

function NavigationLink({ text, className, to }) {
  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
}

export default NavigationLink;
