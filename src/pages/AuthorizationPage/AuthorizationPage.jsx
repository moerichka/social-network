import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authUser } from "../../store/userSlice";
import AuthContainer from "../../components/AuthContainer";

import s from "./AuthorizationPage.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button";

function AuthorizationPage() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(authUser({ email, password }));
  };

  return (
    <AuthContainer>
      <form className={s.form} onSubmit={onSubmit}>
        <div className={s.inputs}>
          <Input
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className={s.button} disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign in"}
        </Button>
      </form>
    </AuthContainer>
  );
}

export default AuthorizationPage;
