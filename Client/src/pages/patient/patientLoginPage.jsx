import React, { useState } from 'react';
import LoginForm from '../../components/forms/patientForms/loginForm';
import LoginOtp from '../../components/forms/patientForms/loginOtp';

const PatientLoginPage = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [data, setData] = useState({})

  const handleData = (value) => {
    setData(value);
  }

  const handleOtpSent = () => {
    setIsOtpSent(true);
  };

  return (
    <div>
      {isOtpSent ? <LoginOtp data={data} /> : <LoginForm onOtpSent={handleOtpSent} handleData={handleData} />}
    </div>
  );
};

export default PatientLoginPage;

