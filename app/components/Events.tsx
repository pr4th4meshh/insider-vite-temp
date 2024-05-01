"use client"
import React from "react"
import { FaServicestack } from "react-icons/fa"
import { eventsThisWeek } from "../constants/resuable"
import EventCard from "../constants/eventCard"

const ThisWeek = () => {
  return (
    <div className="xxs:px-[10px] sm:px-[50px] lg:px-[120px] py-[42px]">
      <div className="flex items-center pb-[18px] ">
        <div className="flex  ">
          <FaServicestack
            style={{ fontSize: "26px", color: "black", marginRight: "8px" }}
          />
        </div>
        <div className="flex font-bold text-[24px] ">EVENTS THIS WEEK</div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-0 pt-4 ">
        <>
          {eventsThisWeek.map((event, id) => (
            <EventCard
              key={id}
              dateOfTheEvent={event.dateOfTheEvent}
              dayOfTheEvent={event.dayOfTheEvent}
            />
          ))}
        </>
      </div>
    </div>
  )
}

export default ThisWeek
