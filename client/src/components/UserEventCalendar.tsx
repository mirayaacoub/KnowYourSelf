// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Card,
//   CardContent,
//   CardHeader,
//   Container,
//   Divider,
// } from "@mui/material";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import getDay from "date-fns/getDay";
// import addHours from "date-fns/addHours";
// import addDays from "date-fns/addDays";
// import enUS from "date-fns/locale/en-US";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const locales = {
//   "en-US": enUS,
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const generateId = () => (Math.floor(Math.random() * 10000) + 1).toString();

// // Function to generate random names
// const generateRandomName = () => {
//   const names = ["John", "Jane", "Alice", "Bob", "Eva", "David"];
//   const randomIndex = Math.floor(Math.random() * names.length);
//   return names[randomIndex];
// };

// const getRandomTime = () => {
//   const hours = Math.floor(Math.random() * (17 - 9 + 1)) + 9; // Random hour between 9 and 5
//   const minutes = Math.floor(Math.random() * 60); // Random minute
//   return { hours, minutes };
// };

// const getRandomDate = () => {
//   const today = new Date();
//   const randomDays = Math.floor(Math.random() * 7); // Random number of days (0 to 6)
//   return addDays(today, randomDays);
// };

// const UserEventCalendar = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Dummy data for events
//     const dummyEvents = Array.from({ length: 3 }, () => {
//       const startTime = getRandomTime();
//       const endTime = addHours(new Date(), 2);
//       const startDate = getRandomDate();
//       return {
//         schedule_id: generateId(),
//         date_time: new Date(
//           startDate.getFullYear(),
//           startDate.getMonth(),
//           startDate.getDate(),
//           startTime.hours,
//           startTime.minutes,
//         ),
//         end_time: new Date(
//           startDate.getFullYear(),
//           startDate.getMonth(),
//           startDate.getDate(),
//           startTime.hours + 2,
//           startTime.minutes,
//         ),
//       };
//     });

//     // Map dummy events to events format
//     const mappedEvents = dummyEvents.map((event) => ({
//       _id: event.schedule_id,
//       title: `${generateRandomName()} Appointment`,
//       start: event.date_time,
//       end: event.end_time,
//     }));

//     setEvents(mappedEvents);
//   }, []);

//   return (
//     <Box mt={2} mb={2} component="main" sx={{ flexGrow: 1, py: 2 }}>
//       <Container maxWidth={false}>
//         <Card>
//           <CardHeader
//             title="Calendar"
//             // subheader="Create Events and Todos and manage them easily"
//           />
//           <Divider />
//           <CardContent>
//             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//               {/* <ButtonGroup
//                 size="large"
//                 variant="contained"
//                 aria-label="outlined primary button group"
//               >
//                 <Button size="small" variant="contained">
//                   Add event
//                 </Button>
//                 <Button size="small" variant="contained">
//                   Create todo
//                 </Button>
//               </ButtonGroup> */}
//             </Box>
//             <Divider style={{ margin: 10 }} />
//             <Calendar
//               localizer={localizer}
//               events={events}
//               startAccessor="start"
//               endAccessor="end"
//               defaultView="month"
//               style={{ height: 500 }}
//             />
//           </CardContent>
//         </Card>
//       </Container>
//     </Box>
//   );
// };

// export default UserEventCalendar;

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
} from "@mui/material";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const UserEventCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Appointment with Mira Yaacoub",
      start: new Date(2024, 4, 20, 10, 0),
      end: new Date(2024, 4, 20, 11, 0),
      therapist: {
        name: "Mira Yaacoub",
        email: "mirayaacoub963@gmail.com",
      },
    },
    {
      id: 2,
      title: "Appointment with Sandra Williams",
      start: new Date(2024, 4, 21, 13, 0),
      end: new Date(2024, 4, 21, 14, 0),
      therapist: {
        name: "Sandra Williams",
        email: "sandra.williams@email.com",
      },
    },
    {
      id: 3,
      title: "Appointment with Sandra Williams",
      start: new Date(2024, 4, 23, 15, 0),
      end: new Date(2024, 4, 23, 16, 0),
      therapist: {
        name: "Sandra Williams",
        email: "sandra.williams@email.com",
      },
    },
    {
      id: 4,
      title: "Appointment with Mira Yaacoub",
      start: new Date(2024, 5, 13, 13, 0),
      end: new Date(2024, 5, 13, 15, 0),
      therapist: {
        name: "Mira Yaacoub",
        email: "mirayaacoub963@gmail.com",
      },
    },
  ]);

  return (
    <Box mt={2} mb={2} component="main" sx={{ flexGrow: 1, py: 2 }}>
      <Container maxWidth={false}>
        <Card>
          <CardHeader title="Calendar" />
          <Divider />
          <CardContent>
            {/* <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              defaultView="month"
              style={{ height: 500 }}
            /> */}
             <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              defaultView="month"
              style={{ height: 500 }}
              components={{
                event: ({ event }) => (
                  <div>
                    <strong>{event.title}</strong>
                    <p>Therapist: {event.therapist.name}</p>
                    <p>Email: {event.therapist.email}</p>
                  </div>
                ),
              }}
            />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default UserEventCalendar;
