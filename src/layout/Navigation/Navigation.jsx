import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import s from "./Navigation.module.scss";

function Navigation() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={s.navigation}>
      <div className={s.user}>
        <div className={s.name}>{user.name ? user.name : user.email}</div>
        {user.avatar && (
          <div className={s.imageWrapper}>
            <img className={s.avatar} src={user.avatar} alt="" />
          </div>
        )}
      </div>
      <Link to="/feed" className={s.link}>
        Feed
      </Link>
    </div>
  );
}

export default Navigation;
