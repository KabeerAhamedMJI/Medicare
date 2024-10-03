import React from 'react'
import AppointmentCard from '../../components/patient/appointmentCard'

const appointmentPage = () => {
  return (
    <section className="container mx-auto bg-gray-200 rounded-2xl p-6 md:p-12">
      <div className="p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left mt-4 md:mt-6 lg:mt-8 text-[#223C6F]">
          My Appointments
        </h1>
        <AppointmentCard />
      </div>
    </section>

  )
}
export default appointmentPage
