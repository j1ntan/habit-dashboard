import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const App = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    const Event_Data_Update = (event) => {
        setEventName(event.target.value);
    };

    const Create_Event_Fun = () => {
        if (selectedDate && eventName) {
            const newEvent = {
                id: new Date().getTime(),
                date: selectedDate,
                title: eventName,
            };
            setEvents([...events, newEvent]);
            setSelectedDate(null);
            setEventName("");
            setSelectedDate(newEvent.date);
        }
    };

    const Update_Event_Fun = (eventId, newName) => {
        const updated_Events = events.map((event) => {
            if (event.id === eventId) {
                return {
                    ...event,
                    title: newName,
                };
            }
            return event;
        });
        setEvents(updated_Events);
    };

    const Delete_Event_Fun = (eventId) => {
        const updated_Events = events.filter((event) => event.id !== eventId);
        setEvents(updated_Events);
    };

    return (
        <div className={Styles.App}>
            <h1> GeeksforGeeks Calendar Application </h1>
            <div className={Styles.container}>
                <div className={Styles.calendarContainer}>
                    <Calendar
                        value={selectedDate}
                        onClickDay={Date_Click_Fun}
                        tileClassName={({ date }) =>
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString()
                                ? "selected"
                                : events.some(
                                      (event) =>
                                          event.date.toDateString() ===
                                          date.toDateString(),
                                  )
                                ? "event-marked"
                                : ""
                        }
                    />{" "}
                </div>
                <div className={styles.eventContainer}>
                    {" "}
                    {selectedDate && (
                        <div className={styles.eventForm}>
                            <h2> Create Event </h2>{" "}
                            <p>
                                {" "}
                                Selected Date: {selectedDate.toDateString()}{" "}
                            </p>{" "}
                            <input
                                type="text"
                                placeholder="Event Name"
                                value={eventName}
                                onChange={Event_Data_Update}
                            />{" "}
                            <button
                                className={styles.createBtn}
                                onClick={Create_Event_Fun}
                            >
                                Click Here to Add Event{" "}
                            </button>{" "}
                        </div>
                    )}
                    {events.length > 0 && selectedDate && (
                        <div className={styles.eventList}>
                            <h2> My Created Event List </h2>{" "}
                            <div className={styles.eventCards}>
                                {" "}
                                {events.map((event) =>
                                    event.date.toDateString() ===
                                    selectedDate.toDateString() ? (
                                        <div
                                            key={event.id}
                                            className={styles.eventCard}
                                        >
                                            <div className={styles.eventCardHeader}>
                                                <span className={styles.eventDate}>
                                                    {" "}
                                                    {event.date.toDateString()}{" "}
                                                </span>{" "}
                                                <div className={styles.eventActions}>
                                                    <button
                                                        className={updateBtn}
                                                        onClick={() =>
                                                            Update_Event_Fun(
                                                                event.id,
                                                                prompt(
                                                                    "ENTER NEW TITLE",
                                                                ),
                                                            )
                                                        }
                                                    >
                                                        Update Event{" "}
                                                    </button>{" "}
                                                    <button
                                                        className={styles.deleteBtn}
                                                        onClick={() =>
                                                            Delete_Event_Fun(
                                                                event.id,
                                                            )
                                                        }
                                                    >
                                                        Delete Event{" "}
                                                    </button>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                            <div className={styles.eventCardBody}>
                                                <p className={styles.eventTitle}>
                                                    {" "}
                                                    {event.title}{" "}
                                                </p>{" "}
                                            </div>{" "}
                                        </div>
                                    ) : null,
                                )}{" "}
                            </div>{" "}
                        </div>
                    )}{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default App;
