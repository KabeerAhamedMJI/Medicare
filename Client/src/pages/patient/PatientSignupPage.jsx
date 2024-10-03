import React, { useState } from 'react';
import SignUpForm from '../../components/forms/patientForms/signUpForm';
import SignUpOtp from '../../components/forms/patientForms/signUpOtp'

const PatientSignupPage = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [data, setData] = useState({})

  const handleData = (value) => {
    setData(value);
  };

  const handleOtpSent = () => {
    setIsOtpSent(true);
  };

  return (
    <div>
      {isOtpSent ? <SignUpOtp data={data} /> : <SignUpForm onOtpSent={handleOtpSent} handleData={handleData} />}
    </div>
  );
};

export default PatientSignupPage;
