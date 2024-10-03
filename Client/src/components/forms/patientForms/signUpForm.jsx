import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Hospital from '../../../assets/images/Static Images/hospital.jpg';
import { userCreate } from '../../../services/patientApi';


const SignUpForm = ({ onOtpSent, handleData }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {

    setLoading(true);
    console.log(data);
    handleData(data);

    try {
      const response = await userCreate(data);
      
      if (response && response.success) { 
        setLoading(false);
        onOtpSent();
        toast.success("OTP sent successfully.");
      } else {
        setLoading(false);
        toast.error('You already have an account!');
      }
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong!');
      console.log('Error in user creation:', error); 
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
              <img
                className="w-auto"
                src={Hospital}
                alt="Hospital"
              />
            </div>
          </div>
          <div className="xl:w-5/12 p-6 sm:p-12">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-2">
              <div className='flex flex-row items-center justify-center mb-2 p-3 border-b-2 gap-16 pt-3 pb-3'>
                <span className='font-bold text-grey-300 items-start justify-start hidden md:flex'>Join Us</span>
                <div>
                  <span className="text-sm pr-2">Are you a Doctor?</span>
                  <a href="https://example.com/register" className="text-sm text-orange-500 cursor-pointer hover:underline">
                    Register Here
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body pt-0">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input type="text" placeholder="Full Name" className="input input-bordered" {...register("fullName", { required: true })} />
                  {errors.fullName && <p className="text-red-500">Full Name is required</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mobile Number / Email ID</span>
                  </label>
                  <input type="text" placeholder="Mobile Number / Email ID" className="input input-bordered" {...register("emailOrMobile", { required: true })} />
                  {errors.emailOrMobile && <p className="text-red-500">Mobile Number / Email ID is required</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Create Password</span>
                  </label>
                  <input type="password" placeholder="Create Password" className="input input-bordered" {...register("password", { required: true })} />
                  {errors.password && <p className="text-red-500">Password is required</p>}
                </div>
                <div className="form-control mt-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="terms" className="mr-2" {...register("checkBox", { required: true })} />
                    <label htmlFor="terms" className="text-sm">By signing up, I agree to the <a href="#" className="text-orange-500 cursor-pointer hover:underline">terms</a>.</label>
                  </div>
                  {errors.checkBox && <p className="text-red-500">You must agree to the terms</p>}
                </div>
                <div className="form-control mt-3">
                <button
                    type="submit"
                    style = {{ backgroundColor: '#223C6F', color: 'white', border: '#223C6F' }} className = "btn btn-primary"
                  >
                    {loading ? (
                      <span className="loading loading-ring loading-lg"></span>
                    ) : (
                      "Send OTP"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
