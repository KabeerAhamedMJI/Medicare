import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { getAllAppointments } from '../../../services/appointmentApti';
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { updatingAppointment } from '../../../services/appointmentApti';
import { deleteAppointment } from '../../../services/appointmentApti';
import toast from 'react-hot-toast';

const appointmentBoard = () => {
  const [appointments, setAppointments] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [delPopup, setDelPopup] = useState(true)
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [status, setChangeStatus] = useState('');

  const showAllAppointments = async () => {
    const response = await getAllAppointments();
    console.log(response);
    setAppointments(response.data);
  }

  useEffect(() => {
    showAllAppointments();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  const formatTime = (timeString) => {
    const currentDate = new Date();
    const [hours, minutes] = timeString.split(':');
    currentDate.setHours(hours);
    currentDate.setMinutes(minutes);

    return currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const handleDelete = () => {
    setDelPopup(false)
  };

  const openModal = (id) => {
    setSelectedAppointment(id)
    setDelPopup(true);
  };

  const handleEditClick = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenPopup(true);

    const formattedDate = new Date(appointment.appointmentDate).toISOString().split('T')[0];

    setValue("department", appointment.department?.name || '');
    setValue("phoneNumber", appointment.phoneNumber);
    setValue("doctor", appointment.doctor?.doctorName);
    setValue("appointmentDate", formattedDate);
    setValue("time", appointment.time);
    setValue("description", appointment.description || '');

    setChangeStatus(appointment.status);
  };


  const handleChangeStatus = (e) => {
    setChangeStatus(e.target.value);
  };


  const handleFormSubmit = async (data) => {
    const updatedAppointment = {
      appointmentId: selectedAppointment._id,
      ...data,
      status,
    };

    try {
      const response = await updatingAppointment(updatedAppointment.appointmentId, updatedAppointment, selectedAppointment._id);

      if (response.success) {
        toast.success("Appointment updated successfully.");
        setOpenPopup(false);
        showAllAppointments();
      } else {
        toast.error('Error updating appointment.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error updating appointment.');
    }
  };

  const delAppointment = async () => {
    try {
      const response = await deleteAppointment(selectedAppointment._id);
      if (response.success) {
        setDelPopup(false);
        toast.success("Appointment deleted successfully.");
        showAllAppointments();
      } else {
        toast.error("Error deleting appointment.");
      }
    } catch (error) {
      toast.error("Error deleting appointment.");
    }
  };
 

  return (
    <div>
      <h2 className='text-xl font-bold md:text-3xl p-2 text-[#223C6F]'>All Appointments</h2>
      <div className='pt-6'>
        <div className='flex flex-row p-3 gap-3 bg-gray-200 rounded-t-xl'>
          <h2 className='text-base font-bold md:text-lg p-2 text-[#FFB74D]'>Appointments</h2>
          <div className="relative flex items-center w-full max-w-xs hidden md:flex">
            <i className="fa-solid fa-magnifying-glass absolute left-3 text-[#223C6F] text-xs sm:text-sm md:text-base" />
            <input
              type="text"
              placeholder="Search..."
              className="input pl-10 w-full rounded-xxl text-sm sm:text-base"
            />
          </div>
        </div>
        <div className="overflow-x-auto bg-gray-200 rounded-b-xl">
          <table className="table w-full border-doted" style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
            <thead className='bg-[#223C6F] text-white'>
              <tr className="border-dotted text-center">
                <th className="text-center border-dotted border-white border">S.No.</th>
                <th className="text-center border-dotted border-white border">Profile & Name</th>
                <th className="text-center border-dotted border-white border">Department</th>
                <th className="text-center border-dotted border-white border">Doctor</th>
                <th className="text-center border-dotted border-white border">Date & Time</th>
                <th className="text-center border-dotted border-white border">Contact</th>
                <th className="text-center border-dotted border-white border">Status</th>
                <th className="text-center border-dotted border-white border">Update</th>
                <th className="text-center border-dotted border-white border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment.id || index} className="border-dotted border-b text-center">
                  <td className="text-center border-dotted border-white border">{index + 1}</td>
                  <td className="text-center border-dotted border-white border">
                    <div className="flex items-center justify-center gap-2">
                      <div className="avatar">
                        <div className="mask mask-squircle h-8 w-8">
                          <img
                            src={appointment.patient?.profilePic || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{appointment.patient?.fullName || "Unknown"}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center border-dotted border-white border">{appointment.department?.name || "Unknown"}</td>
                  <td className="text-center border-dotted border-white border">{appointment.doctor?.doctorName || "Any Available Doctor"}</td>
                  <td className="text-center border-dotted border-white border">
                    <div className="flex flex-col gap-2">
                      <span>{formatTime(appointment.time)}</span>
                      <span>{formatDate(appointment.appointmentDate)}</span>
                    </div>
                  </td>
                  <td className="text-center border-dotted border-white border">
                    <div className='flex flex-row items-center justify-center gap-2'>
                      <CiMobile3 className='text-2xl text--[#223C6F] font-bold' />
                      <span>{appointment.phoneNumber}</span>
                    </div>
                  </td>
                  <td
                    className={`text-center border-dotted border-white border font-bold ${appointment.status === 'Cancelled' ? 'text-red-600' :
                      appointment.status === 'Active' ? 'text-green-600' :
                        appointment.status === 'Completed' ? 'text-black' : ''
                      }`}
                  >
                    {appointment.status}
                  </td>
                  <td className="text-center border-dotted border-white border">
                    <Link onClick={(e) => { e.preventDefault(); handleEditClick(appointment) }}>
                      <FaRegEdit className="text-xl font-bold text-purple-600 mx-auto" />
                    </Link>
                  </td>
                  <td className="text-center border-dotted border-white border">
                    <a onClick={() => openModal(appointment)} href="#my_modal_8">
                      <RiDeleteBin6Line className="text-xl font-bold text-red-500 mx-auto" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {openPopup && selectedAppointment && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg relative">
                <div className='flex flex-row justify-between'>
                  <h2 className="text-xl font-bold text-center mb-4 text-blue-900">Update Appointment</h2>
                  <IoCloseSharp className='text-3xl text-blue-800 hover:bg-blue-800 rounded-full hover:text-white' onClick={() => setOpenPopup(false)} />
                </div>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-800 text-sm">Department</span>
                      </label>
                      <div className='w-full h-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none'>
                        {selectedAppointment.department?.name}
                      </div>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-800 text-sm">Contact Number</span>
                      </label>
                      <input
                        type="text"
                        {...register("phoneNumber")}
                        defaultValue={selectedAppointment.phoneNumber}
                        className="w-full p-3 rounded-lg shadow-sm bg-gray-200 text-sm border border-gray-300 cursor-not-allowed"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-800 text-sm">Appointment Date</span>
                      </label>
                      <input
                        type="date"
                        {...register("appointmentDate")}
                        defaultValue={selectedAppointment.appointmentDate}
                        className={`w-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.appointmentDate ? 'border-red-500' : ''}`}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-800 text-sm">Preferred Time</span>
                      </label>
                      <input
                        type="time"
                        {...register("time")}
                        defaultValue={selectedAppointment.time}
                        className={`w-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.time ? 'border-red-500' : ''}`}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="label">
                        <span className="label-text text-blue-800 text-sm">Doctor</span>
                      </label>
                      {selectedAppointment.doctor?.doctorName ? (
                        <div className="p-3 rounded-lg bg-gray-200 text-blue-900">
                          {selectedAppointment.doctor?.doctorName}
                        </div>
                      ) : (
                        <select className="w-full p-3.5 rounded-lg shadow-sm bg-white text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                          {selectedAppointment.department?.doctors.map((doctor, index) => (
                            <option key={index} value={doctor.doctorName}>
                              {doctor.doctorName}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text text-[#223C6F] text-sm">Change Status</span>
                      </label>
                      <div className="rounded-lg bg-[#223C6F] text-[#223C6F]">
                        <select
                          value={status}
                          onChange={handleChangeStatus}
                          className="w-full p-3.5 rounded-lg shadow-sm bg-[#223C6F] text-white text-sm border border-gray-300 focus:ring-[#223C6F] focus:outline-none"
                        >
                          <option value="Active">Active</option>
                          <option value="Cancelled">Cancelled</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[#223C6F] text-sm">Description</span>
                    </label>
                    <textarea
                      {...register("description")}
                      placeholder="Tell us your symptom or health problem"
                      defaultValue={selectedAppointment.description}
                      className="w-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300 focus:ring-2 focus:ring-[#223C6F] focus:outline-none"
                    ></textarea>
                  </div>
                  <div className="form-control mt-3">
                    <button
                      type="submit"
                      className="w-full p-3 text-white bg-[#223C6F] rounded-lg shadow-sm hover:bg-[#223C6F]transition-colors"
                    >Save</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        {delPopup && (
        <div className="modal" role="dialog" id="my_modal_8">
          <div className="modal-box p-6">
            <div className="text-center">
              <RiDeleteBin6Line className="text-4xl text-red-500 mb-3 mx-auto" />
              <p className="text-lg font-medium text-gray-800 mb-4">
                Are you sure you want to delete this appointment?
              </p>
            </div>
            <div className="modal-action justify-center space-x-4">
              <button onClick={delAppointment} className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none">
                Delete
              </button>
              <button onClick={handleDelete} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default appointmentBoard;
