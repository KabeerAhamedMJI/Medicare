const appointmentBoard = () => {
    const [appointments, setAppointments] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null); // Store the selected appointment for editing
  
    const showAllAppointments = async () => {
      const response = await getAllAppointments();
      console.log(response.data);
      setAppointments(response.data);
    };
  
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
      setValue,
      formState: { errors }
    } = useForm();
  
    const handleEditClick = (appointment) => {
      setSelectedAppointment(appointment);
      setOpenPopup(true);
  
      // Populate the form with the selected appointment data
      setValue("department", appointment.department?.name || '');
      setValue("phoneNumber", appointment.phoneNumber);
      setValue("appointmentDate", appointment.appointmentDate);
      setValue("time", appointment.time);
      setValue("description", appointment.description || '');
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
                      <Link to="" onClick={() => handleEditClick(appointment)}>
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
            {openPopup && selectedAppointment && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg relative">
                  <div className='flex flex-row justify-between'>
                    <h2 className="text-xl font-bold text-center mb-4 text-blue-900">Update Appointment</h2>
                    <IoCloseSharp className='text-3xl text-blue-800 hover:bg-blue-800 rounded-full hover:text-white' onClick={() => setOpenPopup(false)} />
                  </div>
                  <form onSubmit={handleSubmit()} className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-blue-800 text-sm">Department</span>
                        </label>
                        <div className='w-full h-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none'>
                          <input
                            type="text"
                            {...register("department")}
                            defaultValue={selectedAppointment.department?.name}
                            readOnly
                            className="w-full p-3 rounded-lg shadow-sm bg-gray-200"
                          />
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
                          className="w-full p-3 rounded-lg shadow-sm bg-gray-200 text-sm border border-gray-300"
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
                          className={`w-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300`}
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
                          className={`w-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300`}
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-blue-800 text-sm">Description</span>
                      </label>
                      <textarea
                        {...register("description")}
                        placeholder="Tell us your symptom or health problem"
                        className="w-full p-3 rounded-lg shadow-sm bg-white text-sm border border-gray-300"
                        defaultValue={selectedAppointment.description}
                      />
                    </div>
                    <div className="form-control mt-3">
                      <button
                        type="submit"
                        className="w-full p-3 text-white bg-blue-900 rounded-lg shadow-sm hover:bg-blue-800 transition-colors"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default appointmentBoard;
  