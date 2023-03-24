import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../../store/userSlice";

import AuthContainer from "../../components/AuthContainer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button";

import s from "./RegistrationPage.module.scss";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser({ email, password })).then(() => {
      navigate("/");
    });
  };

  return (
    <AuthContainer isRegistration>
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
          <Input
            label="Confirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          Register
        </Button>
      </form>
    </AuthContainer>
  );
}

export default RegistrationPage;
