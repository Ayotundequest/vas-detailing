import React from 'react';
import appointmentDesktop from '../assets/appointment.png';
import appointmentMobile from '../assets/appointmentMobile.png';

const Appointment = () => {
  return (
    <div className="mt-10 md:mt-[100px]" data-aos="fade-up">
      {/* Desktop Image */}
      <div className="hidden md:block">
        <img
          src={appointmentDesktop}
          alt="Appointment Banner"
          className="w-full"
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden">
        <img
          src={appointmentMobile}
          alt="Appointment Mobile Banner"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Appointment;
