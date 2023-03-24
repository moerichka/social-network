import React from "react";
import { Link } from "react-router-dom";

import s from "./Button.module.scss";

function Button({
  children,
  className,
  variant,
}) {
  const inputClassName = `${className} ${s[variant]} ${s.button}`;

  return <Link className={inputClassName}>{children}</Link>;
}

export default Button;
