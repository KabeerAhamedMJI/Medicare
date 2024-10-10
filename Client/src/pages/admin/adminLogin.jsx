import React, { useState } from 'react';
import AdminLoginForm from '../../components/forms/adminforms/adminLoginForm';
import AdminLoginOtp from '../../components/forms/adminforms/loginOtp';

const AdminLogin = () => {
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
      {isOtpSent ? <AdminLoginOtp data={data} /> : <AdminLoginForm onOtpSent={handleOtpSent} handleData={handleData} />}
    </div>
  );
};

export default AdminLogin;

