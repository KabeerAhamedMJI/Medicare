import React, { useState } from "react";
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import Appointments from '../../../assets/images/Static Images/appointment.jpg';
import { AdminLogin } from "../../../services/adminApi";

const AdminLoginForm = ({ onOtpSent, handleData }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    setLoading(true);
    handleData(data);

    try {
      const response = await AdminLogin(data);

      if (!response.success) {
        throw new Error(response.message || "Login failed");
      }

      if (response.success) {
        setLoading(false);
        onOtpSent();
        toast.success("OTP sent successfully.");
      } else {
        toast.error('Wrong credentials!');
      }

    } catch (error) {
      setLoading(false);
      toast.error('Wrong credentials!');
      console.log(error);
    }

  };

  return (
    <section className="container">
      <div className="p-5">
        <div className="flex flex-col md:flex-row justify-center items-center px-5 lg:px-0">
          <div className="hidden md:flex flex-1 justify-center">
            <div className="hidden md:flex flex-1 justify-center items-center p-6">
              <img
                className="w-full h-auto max-w-md object-cover rounded-r-xl"
                src={Appointments}
                alt="Hospital"
              />
            </div>
          </div>

          <div className="flex justify-center items-center flex-1 p-6 sm:p-12 lg:mt-6">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-2 border-gray-300 rounded-lg p-4">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span style={{ color: '#223C6F' }} className="label-text">Email Address</span>
                  </label>
                  <input
                    type="text"
                    {...register("email")}
                    placeholder="Email Address"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span style={{ color: '#223C6F' }} className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-orange-500">Forgot password?</a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button
                    type="submit"
                    style={{ backgroundColor: '#223C6F', color: 'white', border: '#223C6F' }}
                    className="btn btn-primary"
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

export default AdminLoginForm;
