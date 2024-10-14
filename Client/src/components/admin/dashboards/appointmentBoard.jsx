import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { getAllAppointments } from '../../../services/appointmentApti';


const appointmentBoard = () => {
  const [appointments, setAppointments] = useState([])

  const showAllAppointments = async () => {
    const response = await getAllAppointments();
    console.log(response.data);
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

  return (
    <div >
      <h2 className='text-xl font-bold md:text-3xl p-2 text-[#223C6F]'>All Appointments</h2>
      <div className='pt-6'>
        <div className='flex flex-row  p-3 gap-3 bg-gray-200 rounded-t-xl'>
          <h2 className='text-base font-bold md:text-lg p-2 text-[#FFB74D] text-shadow-sm'>Appointments</h2>
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
            <thead className='bg-[#223C6F] text-white '>
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
                    <CiMobile3 className='text-2xl text--[#223C6F] font-bold'/>
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
                    <Link to="/update">
                      <FaRegEdit className="text-xl font-bold text-purple-600 mx-auto" />
                    </Link>
                  </td>
                  <td className="text-center border-dotted border-white border">
                    <Link to="/delete">
                      <RiDeleteBin6Line className="text-xl font-bold text-red-500 mx-auto" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default appointmentBoard;