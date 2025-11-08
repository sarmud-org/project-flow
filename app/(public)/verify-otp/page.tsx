import React from "react";
import VerifyOTPComponent from "./VerifyOpt";

const VerifyOTP = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = React.use(searchParams);
  const email = typeof params.email === "string" ? params.email : "";

  return <VerifyOTPComponent email={email} />; // ✅ Pass it to client component
};

export default VerifyOTP;
