import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state;
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        onChange={onChange}
      />
      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
        Log In
      </Button>
    </form>
  );
};

export default Login;
