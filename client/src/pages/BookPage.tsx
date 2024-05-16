import EventCalendar from "../components/EventCalendar";
import DateTimePicker from "react-datetime-picker";
import "react-clock/dist/Clock.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// services
import { getTherapist, getTherapistById } from "../services/therapist";
import { bookSchedule, getScheduleByTherapist } from "../services/schedule";
import FooterComponent from "../components/Footer";

// styles
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "../styles/datetime-picker.css";
import { select } from "@material-tailwind/react";

// components
import Navbar from "../components/NavBar";

import { getPatient } from "../services/patient";
import { DialogBox } from "../components/dialogbox";
export function BookPage() {
  const [value, onChange] = useState<Date | null>(new Date());
  const navigate = useNavigate();
  const [dialogMessage, setDialogMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const { therapistId } = useParams<{ therapistId: string }>(); // Get therapistId from URL params
  const [scheduleData, setScheduleData] = useState<Schedule[]>([]);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const isLoggedIn = sessionStorage.getItem("token") !== null;
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  /**
   * If user is logged, fetch the schedules of selected therapist and put them in list variable availableSchedule
   */
  if (isLoggedIn) {
    useEffect(() => {
      let isMounted = true; // Flag to track if the component is mounted
      // Fetch therapist details
      getTherapistById(Number(therapistId))
        .then((therapist) => {
          // Fetch therapist schedule
          console.log(therapist.therapist_id);
          return getScheduleByTherapist(therapist.therapist_id);
        })
        .then((response) => {
          if (isMounted && Array.isArray(response.schedule)) {
            // Check if schedule is an array
            console.log(response.schedule);
            setScheduleData(response.schedule); // set schedule data with array of schedules
            const availableSchedules = response.schedule.filter(
              (s: Schedule) => s.isBooked === 0,
            );
            const availableTimesMap = new Map<number, string>();
            availableSchedules.forEach((s) => {
              const time = formatTime(s.date_time);
              availableTimesMap.set(s.schedule_id, time);
            });
            const availableTimesList = Array.from(availableTimesMap.values());
            setAvailableTimes(availableTimesList);
          } else {
            console.error("Schedule is not an array:", response.schedule);
          }
        })
        .catch((error) =>
          console.error("Error fetching therapist details:", error),
        );

      return () => {
        isMounted = false; // Set isMounted to false
        setAvailableTimes([]); // Empty the array of available times when component is unmounted
      };
    }, [isLoggedIn, therapistId]); // Run this effect when userId changes
  }

  /**
   * Function to format date_time string from ISO String to HH:mm A/PM in relation to local date time
   * @param dateString
   * @returns
   */

  function formatTime(dateString: string): string {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // Calculate hours in 12-hour format
    const formattedHours = hours % 12 || 12;
    // Add leading zero to minutes if needed
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    // Determine if it's AM or PM
    const period = hours < 12 ? "AM" : "PM";
    // Construct formatted time string
    return `${formattedHours}:${formattedMinutes} ${period}`;
  }

  /**
   * Function to convert time to military format.
   */
  function convertToMilitaryTime(selectedTime: string): string {
    const [time, period] = selectedTime.split(" ");
    const [hours, minutes] = time.split(":").map(Number);

    if (period === "AM" && hours === 12) {
      // Midnight (12:00 AM) in military time is 00:00:00
      return `00:${minutes}`;
    } else if (period === "PM" && hours < 12) {
      // Afternoon hours (1:00 PM to 11:59 PM) in military time
      return `${hours + 12}:${minutes}`;
    } else {
      // Morning hours (1:00 AM to 11:59 AM) in military time
      return `${hours.toString().padStart(2, "0")}:${minutes}`;
    }
  }

  /**
   * function to get the available date_time from schedules of therapist, aka non booked
   * @param scheduleData
   * @returns
   */
  function extractAvailableDates(scheduleData: Schedule[]): Date[] {
    // Extract and filter available dates
    const availableDates = scheduleData
      .filter((schedule) => schedule.isBooked === 0) // Filter out non-available slots
      .map((schedule) => new Date(schedule.date_time)); // Convert date strings to Date objects
    // Sort dates from oldest to newest
    // availableDates.sort((a, b) => a.getTime() - b.getTime());
    return availableDates;
  }

  /**
   * Function to change the selected date time variable
   * @param newValue
   */
  const handleChange = (newValue: Date | null) => {
    onChange(newValue); // Update the value state variable
    setSelectedDateTime(newValue); // Set the selected date and time
  };

  /**
   * Function to book selected appointment. Makes api call to book service.
   */
  function bookAppointment() {
    // check if the date and time selected
    if (selectedDateTime && selectedTime) {
      const selectedDate = new Date(selectedDateTime);
      console.log(selectedDate, selectedTime);
      // const [hours, minutes] = selectedTime.split(':');
      // selectedDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);
      const militaryTime = convertToMilitaryTime(selectedTime);
      const [hours, minutes] = militaryTime.split(":");
      selectedDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);

      // Find the schedule_id of the matching date_time
      const matchingSchedule = scheduleData.find((schedule) => {
        const scheduleDate = new Date(schedule.date_time);
        console.log(scheduleDate, selectedDate);
        // const adjustedScheduleDate = new Date(scheduleDate.getTime() + timezoneOffsetMilliseconds);
        // console.log(scheduleDate, adjustedScheduleDate)
        console.log(scheduleDate.toUTCString() === selectedDate.toUTCString());
        console.log(scheduleDate.toUTCString(), selectedDate.toUTCString());
        return scheduleDate.toUTCString() === selectedDate.toUTCString();
      });

      if (matchingSchedule) {
        const scheduleId = matchingSchedule.schedule_id;
        console.log("Schedule ID:", scheduleId);
        const user = sessionStorage.getItem("user");
        if (user) {
          const userObj = JSON.parse(user);
          getPatient(userObj.user_id)
            .then((patient) => {
              // make corresponding api call
              console.log("scheduleid", scheduleId);
              console.log("patient", patient.patient_id);
              bookSchedule(scheduleId, patient.patient_id)
                .then((response) => {
                  // Handle success response
                  // alert('Booking successful')
                  setDialogMessage("Booking successful!");
                  setShowDialog(true);
                  setIsBooked(true);
                  // Wait for the dialog box to close before navigating
                  // setTimeout(() => {
                  //   // setShowDialog(false)
                  //   navigate('/profile-page');
                  // }, 7000);

                  // navigate('/profile-page');
                  console.log("Booking successful:", response);
                  // Perform any additional actions if needed
                })
                .catch((error) => {
                  // Handle error
                  setDialogMessage(
                    "There was an error while booking.\nPlease try again",
                  );
                  setShowDialog(true);
                  // alert('Booking error')
                  console.error("Error booking schedule:", error);
                  // Perform any error handling or display error message to user
                });
            })
            .catch((error) => {
              // Handle error
              console.error("Error fetching patient details:", error);
              // Perform any error handling or display error message to user
            });
        } else {
          // Handle case where user is not found in session storage
          setDialogMessage('Error handling booking. Please try again.');
          setShowDialog(true);
          console.error("User not found in session storage");
          // Perform any error handling or display error message to user
        }
      } else {
        setDialogMessage('Booking unavailable. Please Choose another date.');
        setShowDialog(true);
        console.log("No matching schedule found");
        // Handle the case where no matching schedule is found
      }
    } else {
      console.log("Please select both date and time");
      // Handle the case where either date or time is not selected
      setDialogMessage("Please select both date and time");
      setShowDialog(true);
      // alert("Please select both date and time")
      // shpw appropriate message
    }
  }

  // Assuming `scheduleData` contains the array of schedule objects
  const availableDates = extractAvailableDates(scheduleData);

  // Set minimum and maximum selectable dates
  const minDate = availableDates.length > 0 ? availableDates[0] : new Date(); // Set minimum date to the oldest available date, or today if there are no available dates
  const maxDate =
    availableDates.length > 0
      ? availableDates[availableDates.length - 1]
      : new Date(new Date().getFullYear() + 1, 11, 31); // Set maximum date to the newest available date, or one year from now if there are no available dates

  return (
    <>
      <Navbar></Navbar>
      <div className="flex h-screen">
        <div className="w-1/2 h-1/2 flex items-center justify-center">
          <div className="p-8">
            <DateTimePicker
              onChange={handleChange}
              value={value}
              disableClock={true}
              isCalendarOpen={true}
              required
              clearIcon="Reset"
              closeWidgets={false}
              style={{ width: "100%" }}
              format="dd-MM-yy"
              minDate={minDate}
              maxDate={maxDate}
              calendarAriaLabel="Toggle calendar"
              dayAriaLabel="Day"
              monthAriaLabel="Month"
              yearAriaLabel="Year"
              className="form-control"
              disabledDates={availableDates
                .filter(
                  (date) =>
                    date.getTime() !== minDate.getTime() &&
                    date.getTime() !== maxDate.getTime(),
                )
                .map((date) => date.toISOString().split("T")[0])} // Pass array of disabled dates (dates other than minDate and maxDate)
            />
            {/* Dropdown list for available times */}
            {availableTimes.length > 0 ? (
              <select onChange={(e) => setSelectedTime(e.target.value)}>
                <option value="">Select Time</option>
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            ) : (
              <select>
                <option value="">Select Time</option>
                <option>No available times</option>
              </select>
              // <p>No available times</p>
            )}
            {/* <DatePicker onChange={onChange} value={value} style={{ width: '100%' }}/> */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={bookAppointment}
            >
              Book
            </button>
          </div>
        </div>
        <div
          className="w-1/2 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("/booking-image2.jpg")` }}
        ></div>
      </div>
      {showDialog && (
        <DialogBox
          message={dialogMessage}
          onClose={() => {
            setShowDialog(false);
            if (isBooked) navigate("/profile-page");
          }}
        />
      )}
      <FooterComponent />
    </>
  );
}
