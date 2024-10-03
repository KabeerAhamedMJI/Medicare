import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import Hospital from '../../../assets/images/Static Images/hospital.jpg'
import { signUpOtp } from '../../../services/patientApi';

const SignUpOtp = ({ emailOrMobile, data }) => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  console.log(emailOrMobile);
  console.log(data, "userData");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signUpOtp({ ...data, otp });
      console.log(response);

      if (response.success) {
        toast.success("SignedUp successfully.");
        navigate('/patientLoginpage');
      } else {
        toast.error('OTP has expired or invalid.');
      }
    } catch (error) {
      toast.error('OTP has expired or invalid');
      console.log(error);
    }
  };

  return (
    <section>
      <div className="container2 border-b-2 flex flex-row gap-9 items-center justify-center">
        <NavLink
          to='/patientLoginpage'
          className={({ isActive }) =>
            `text-[#2244F] ${isActive ? 'border-b-2 border-[#223C6F] font-bold text-[#2244F]' : ''}`
          }
        >
          Login
        </NavLink>
        <NavLink
          to='/patientSignupPage'
          className={({ isActive }) =>
            `text-[#2244F] ${isActive ? 'border-b-2 border-[#223C6F] font-bold text-[#2244F]' : ''}`
          }
        >
          SignUp
        </NavLink>
      </div>
      <div className="flex justify-center items-center px-5 lg:px-0">
        <div className="max-w-screen-xl md:flex bg-white sm:rounded-lg flex flex-1">
          <div className="hidden md:flex flex-1 justify-center">
            <div>
              <img className="w-auto" src={Hospital} alt="Hospital Logo" />
            </div>
          </div>
          <div className="xl:w-5/12 p-24 sm:p-12">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-2 p-6">
              <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <div className="font-semibold text-3xl">
                    <p>Email Verification</p>
                  </div>
                  <div className="flex flex-row text-sm font-medium text-gray-400">
                    <p>We have sent an OTP to <span className='pl-1 text-orange-500'>{data.emailOrMobile}</span></p>
                  </div>
                </div>
                <div>
                  <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-14">
                    <div className="flex flex-col items-center">
                      <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span className="mx-2"> </span>}
                        renderInput={(props) => (
                          <input
                            {...props}
                            className="w-12 h-12 text-center border rounded text-black"
                            style={{ padding: '0 10px' }}
                          />
                        )}
                        shouldAutoFocus
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button 
                        type="submit" 
                        style={{ backgroundColor: '#223C6F', color: 'white', border: '#223C6F' }} 
                        className="btn btn-primary mb-3"
                      >
                        Submit
                      </button>
                      <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                        <p>Didn't receive the code?</p>{" "}
                        <a
                          className="text-blue-600"
                          href="#"
                          onClick={() => toast.info('Resend OTP functionality not implemented yet.')}
                        >
                          Resend
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpOtp;
