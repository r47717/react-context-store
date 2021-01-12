import React from "react";
import { login } from "../../api";
import { useStoreDispatch } from "../../store";

const LoginPage = () => {
  const dispatch = useStoreDispatch();

  return (
    <>
      <button onClick={() => dispatch(login)}>Login</button>
    </>
  );
};

export default LoginPage;
