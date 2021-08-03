import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      const newEvent = {
        start,
        end,
        title,
      };
      setEvents([...events, newEvent]);
    }
  };
  return (
    <Calendar
      selectable
      events={events}
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      mx={8}
      style={{ height: 550, width: 550 }}
      views={["month"]}
      onSelectEvent={(event) => alert(event.title)}
      onSelectSlot={handleSelect}
    />
  );
};

export default MyCalendar;
