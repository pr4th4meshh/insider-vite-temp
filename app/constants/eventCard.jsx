import React from 'react'

const EventCard = ({dayOfTheEvent, dateOfTheEvent}) => {
  return (
    <div
    className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] mx-2 border border-gray-300 hover:border-[#EC1066] rounded-xl cursor-pointer "
  >
    <div className="px-4 py-2 flex flex-col items-start ">
      <p className="text-[#EC1066] font-bold xxs:text-[12px] sm:text-[22px] text-[16px]">
        {dayOfTheEvent}
        <br />
      </p>
      <h4 className="xxs:text-[12px] sm:text-[12px] lg:text-[16px] text-gray-500">
        {" "}
        {dateOfTheEvent}
      </h4>
    </div>
  </div>
  )
}

export default EventCard