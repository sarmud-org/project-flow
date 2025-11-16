import { Suspense } from "react";
import LoginComponent from "./Login";

const Login = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginComponent />
    </Suspense>
  );
};

export default Login;
