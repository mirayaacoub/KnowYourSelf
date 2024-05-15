// import { useState, MouseEvent } from "react";
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

// import { Calendar, type Event, dateFnsLocalizer } from "react-big-calendar";

// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import getDay from "date-fns/getDay";
// import enUS from "date-fns/locale/en-US";

// import "react-big-calendar/lib/css/react-big-calendar.css";

// import EventInfo from "./EventInfo";
// import AddEventModal from "./AddEventModal";
// import EventInfoModal from "./EventInfoModal";
// import { AddTodoModal } from "./AddTodoModal";
// import AddDatePickerEventModal from "./AddDatePickerEventModal";

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

// export interface ITodo {
//   _id: string;
//   title: string;
//   color?: string;
// }

// export interface IEventInfo extends Event {
//   _id: string;
//   description: string;
//   todoId?: string;
// }

// export interface EventFormData {
//   description: string;
//   todoId?: string;
// }

// export interface DatePickerEventFormData {
//   description: string;
//   todoId?: string;
//   allDay: boolean;
//   start?: Date;
//   end?: Date;
// }

// export const generateId = () =>
//   (Math.floor(Math.random() * 10000) + 1).toString();

// const initialEventFormState: EventFormData = {
//   description: "",
//   todoId: undefined,
// };

// const initialDatePickerEventFormData: DatePickerEventFormData = {
//   description: "",
//   todoId: undefined,
//   allDay: false,
//   start: undefined,
//   end: undefined,
// };

// const EventCalendar = () => {
//   const [openSlot, setOpenSlot] = useState(false);
//   const [openDatepickerModal, setOpenDatepickerModal] = useState(false);
//   const [openTodoModal, setOpenTodoModal] = useState(false);
//   const [currentEvent, setCurrentEvent] = useState<Event | IEventInfo | null>(
//     null,
//   );

//   const [eventInfoModal, setEventInfoModal] = useState(false);

//   const [events, setEvents] = useState<IEventInfo[]>([]);
//   const [todos, setTodos] = useState<ITodo[]>([]);

//   const [eventFormData, setEventFormData] = useState<EventFormData>(
//     initialEventFormState,
//   );

//   const [datePickerEventFormData, setDatePickerEventFormData] =
//     useState<DatePickerEventFormData>(initialDatePickerEventFormData);

//   const handleSelectSlot = (event: Event) => {
//     setOpenSlot(true);
//     setCurrentEvent(event);
//   };

//   const handleSelectEvent = (event: IEventInfo) => {
//     setCurrentEvent(event);
//     setEventInfoModal(true);
//   };

//   const handleClose = () => {
//     setEventFormData(initialEventFormState);
//     setOpenSlot(false);
//   };

//   const handleDatePickerClose = () => {
//     setDatePickerEventFormData(initialDatePickerEventFormData);
//     setOpenDatepickerModal(false);
//   };

//   const onAddEvent = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();

//     const data: IEventInfo = {
//       ...eventFormData,
//       _id: generateId(),
//       start: currentEvent?.start,
//       end: currentEvent?.end,
//     };

//     const newEvents = [...events, data];

//     setEvents(newEvents);
//     handleClose();
//   };

//   const onAddEventFromDatePicker = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();

//     const addHours = (date: Date | undefined, hours: number) => {
//       return date ? date.setHours(date.getHours() + hours) : undefined;
//     };

//     const setMinToZero = (date: any) => {
//       date.setSeconds(0);

//       return date;
//     };

//     const data: IEventInfo = {
//       ...datePickerEventFormData,
//       _id: generateId(),
//       start: setMinToZero(datePickerEventFormData.start),
//       end: datePickerEventFormData.allDay
//         ? addHours(datePickerEventFormData.start, 12)
//         : setMinToZero(datePickerEventFormData.end),
//     };

//     const newEvents = [...events, data];

//     setEvents(newEvents);
//     setDatePickerEventFormData(initialDatePickerEventFormData);
//   };

//   const onDeleteEvent = () => {
//     setEvents(() =>
//       [...events].filter((e) => e._id !== (currentEvent as IEventInfo)._id!),
//     );
//     setEventInfoModal(false);
//   };

//   return (
//     <Box
//       mt={2}
//       mb={2}
//       component="main"
//       sx={{
//         flexGrow: 1,
//         py: 8,
//       }}
//     >
//       <Container maxWidth={false}>
//         <Card>
//           <CardHeader
//             title="Calendar"
//             subheader="Create Events and Todos and manage them easily"
//           />
//           <Divider />
//           <CardContent>
//             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//               <ButtonGroup
//                 size="large"
//                 variant="contained"
//                 aria-label="outlined primary button group"
//               >
//                 <Button
//                   onClick={() => setOpenDatepickerModal(true)}
//                   size="small"
//                   variant="contained"
//                 >
//                   Add event
//                 </Button>
//                 <Button
//                   onClick={() => setOpenTodoModal(true)}
//                   size="small"
//                   variant="contained"
//                 >
//                   Create todo
//                 </Button>
//               </ButtonGroup>
//             </Box>
//             <Divider style={{ margin: 10 }} />
//             <AddEventModal
//               open={openSlot}
//               handleClose={handleClose}
//               eventFormData={eventFormData}
//               setEventFormData={setEventFormData}
//               onAddEvent={onAddEvent}
//               todos={todos}
//             />
//             <AddDatePickerEventModal
//               open={openDatepickerModal}
//               handleClose={handleDatePickerClose}
//               datePickerEventFormData={datePickerEventFormData}
//               setDatePickerEventFormData={setDatePickerEventFormData}
//               onAddEvent={onAddEventFromDatePicker}
//               todos={todos}
//             />
//             <EventInfoModal
//               open={eventInfoModal}
//               handleClose={() => setEventInfoModal(false)}
//               onDeleteEvent={onDeleteEvent}
//               currentEvent={currentEvent as IEventInfo}
//             />
//             <AddTodoModal
//               open={openTodoModal}
//               handleClose={() => setOpenTodoModal(false)}
//               todos={todos}
//               setTodos={setTodos}
//             />
//             <Calendar
//               localizer={localizer}
//               events={events}
//               onSelectEvent={handleSelectEvent}
//               onSelectSlot={handleSelectSlot}
//               selectable
//               startAccessor="start"
//               components={{ event: EventInfo }}
//               endAccessor="end"
//               defaultView="week"
//               eventPropGetter={(event) => {
//                 const hasTodo = todos.find((todo) => todo._id === event.todoId);
//                 return {
//                   style: {
//                     backgroundColor: hasTodo ? hasTodo.color : "#b64fc8",
//                     borderColor: hasTodo ? hasTodo.color : "#b64fc8",
//                   },
//                 };
//               }}
//               style={{
//                 height: 900,
//               }}
//             />
//           </CardContent>
//         </Card>
//       </Container>
//     </Box>
//   );
// };

// export default EventCalendar;

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
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
import addHours from "date-fns/addHours";
import addDays from "date-fns/addDays";
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

const generateId = () => (Math.floor(Math.random() * 10000) + 1).toString();

// Function to generate random names
const generateRandomName = () => {
  const names = ["John", "Jane", "Alice", "Bob", "Eva", "David"];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const getRandomTime = () => {
  const hours = Math.floor(Math.random() * (17 - 9 + 1)) + 9; // Random hour between 9 and 5
  const minutes = Math.floor(Math.random() * 60); // Random minute
  return { hours, minutes };
};

const getRandomDate = () => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 7); // Random number of days (0 to 6)
  return addDays(today, randomDays);
};

const EventCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Dummy data for events
    const dummyEvents = Array.from({ length: 3 }, () => {
      const startTime = getRandomTime();
      const endTime = addHours(new Date(), 2);
      const startDate = getRandomDate();
      return {
        schedule_id: generateId(),
        date_time: new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate(),
          startTime.hours,
          startTime.minutes,
        ),
        end_time: new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate(),
          startTime.hours + 2,
          startTime.minutes,
        ),
      };
    });

    // Map dummy events to events format
    const mappedEvents = dummyEvents.map((event) => ({
      _id: event.schedule_id,
      title: `${generateRandomName()} Appointment`,
      start: event.date_time,
      end: event.end_time,
    }));

    setEvents(mappedEvents);
  }, []);

  return (
    <Box mt={2} mb={2} component="main" sx={{ flexGrow: 1, py: 2 }}>
      <Container maxWidth={false}>
        <Card>
          <CardHeader
            title="Calendar"
            subheader="Create Events and Todos and manage them easily"
          />
          <Divider />
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <ButtonGroup
                size="large"
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button size="small" variant="contained">
                  Add event
                </Button>
                <Button size="small" variant="contained">
                  Create todo
                </Button>
              </ButtonGroup>
            </Box>
            <Divider style={{ margin: 10 }} />
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              defaultView="month"
              style={{ height: 500 }}
            />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default EventCalendar;

//GPT ATTEMPT
// import React, { useState, useEffect, MouseEvent } from "react";
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
// import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import getDay from "date-fns/getDay";
// import addHours from "date-fns/addHours";
// import addDays from "date-fns/addDays";
// import enUS from "date-fns/locale/en-US";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import EventInfo from "./EventInfo";
// import AddEventModal from "./AddEventModal";
// import EventInfoModal from "./EventInfoModal";
// import { AddTodoModal } from "./AddTodoModal";
// import AddDatePickerEventModal from "./AddDatePickerEventModal";

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

// export interface ITodo {
//   _id: string;
//   title: string;
//   color?: string;
// }

// export interface IEventInfo extends Event {
//   _id: string;
//   description: string;
//   todoId?: string;
// }

// export interface EventFormData {
//   description: string;
//   todoId?: string;
// }

// export interface DatePickerEventFormData {
//   description: string;
//   todoId?: string;
//   allDay: boolean;
//   start?: Date;
//   end?: Date;
// }

// export const generateId = () =>
//   (Math.floor(Math.random() * 10000) + 1).toString();

// const initialEventFormState: EventFormData = {
//   description: "",
//   todoId: undefined,
// };

// const initialDatePickerEventFormData: DatePickerEventFormData = {
//   description: "",
//   todoId: undefined,
//   allDay: false,
//   start: undefined,
//   end: undefined,
// };

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

// const EventCalendar = () => {
//   const [openSlot, setOpenSlot] = useState(false);
//   const [openDatepickerModal, setOpenDatepickerModal] = useState(false);
//   const [openTodoModal, setOpenTodoModal] = useState(false);
//   const [currentEvent, setCurrentEvent] = useState<Event | IEventInfo | null>(
//     null,
//   );
//   const [eventInfoModal, setEventInfoModal] = useState(false);

//   const [events, setEvents] = useState<IEventInfo[]>([]);
//   const [todos, setTodos] = useState<ITodo[]>([]);

//   const [eventFormData, setEventFormData] = useState<EventFormData>(
//     initialEventFormState,
//   );
//   const [datePickerEventFormData, setDatePickerEventFormFormData] =
//     useState<DatePickerEventFormData>(initialDatePickerEventFormData);

//   const handleSelectSlot = (event: Event) => {
//     setOpenSlot(true);
//     setCurrentEvent(event);
//   };

//   const handleSelectEvent = (event: IEventInfo) => {
//     setCurrentEvent(event);
//     setEventInfoModal(true);
//   };

//   const handleClose = () => {
//     setEventFormData(initialEventFormState);
//     setOpenSlot(false);
//   };

//   const handleDatePickerClose = () => {
//     setDatePickerEventFormFormData(initialDatePickerEventFormData);
//     setOpenDatepickerModal(false);
//   };

//   const onAddEvent = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     const data: IEventInfo = {
//       ...eventFormData,
//       _id: generateId(),
//       start: currentEvent?.start,
//       end: currentEvent?.end,
//     };
//     const newEvents = [...events, data];
//     setEvents(newEvents);
//     handleClose();
//   };

//   const onAddEventFromDatePicker = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     const addHours = (date: Date | undefined, hours: number) => {
//       return date ? date.setHours(date.getHours() + hours) : undefined;
//     };
//     const setMinToZero = (date: any) => {
//       date.setSeconds(0);
//       return date;
//     };
//     const data: IEventInfo = {
//       ...datePickerEventFormData,
//       _id: generateId(),
//       start: setMinToZero(datePickerEventFormData.start),
//       end: datePickerEventFormData.allDay
//         ? addHours(datePickerEventFormData.start, 12)
//         : setMinToZero(datePickerEventFormData.end),
//     };
//     const newEvents = [...events, data];
//     setEvents(newEvents);
//     setDatePickerEventFormFormData(initialDatePickerEventFormData);
//   };

//   const onDeleteEvent = () => {
//     setEvents(() =>
//       [...events].filter((e) => e._id !== (currentEvent as IEventInfo)._id!),
//     );
//     setEventInfoModal(false);
//   };

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
//       description: `${generateRandomName()} Appointment`,
//     }));

//     setEvents(mappedEvents);
//   }, []);

//   return (
//     <Box mt={2} mb={2} component="main" sx={{ flexGrow: 1, py: 8 }}>
//       <Container maxWidth={false}>
//         <Card>
//           <CardHeader
//             title="Calendar"
//             subheader="Create Events and Todos and manage them easily"
//           />
//           <Divider />
//           <CardContent>
//             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//               <ButtonGroup
//                 size="large"
//                 variant="contained"
//                 aria-label="outlined primary button group"
//               >
//                 <Button
//                   onClick={() => setOpenDatepickerModal(true)}
//                   size="small"
//                   variant="contained"
//                 >
//                   Add event
//                 </Button>
//                 <Button
//                   onClick={() => setOpenTodoModal(true)}
//                   size="small"
//                   variant="contained"
//                 >
//                   Create todo
//                 </Button>
//               </ButtonGroup>
//             </Box>
//             <Divider style={{ margin: 10 }} />
//             <AddEventModal
//               open={openSlot}
//               handleClose={handleClose}
//               eventFormData={eventFormData}
//               setEventFormData={setEventFormData}
//               onAddEvent={onAddEvent}
//               todos={todos}
//             />
//             <AddDatePickerEventModal
//               open={openDatepickerModal}
//               handleClose={handleDatePickerClose}
//               datePickerEventFormData={datePickerEventFormData}
//               setDatePickerEventFormData={setDatePickerEventFormData}
//               onAddEvent={onAddEventFromDatePicker}
//               todos={todos}
//             />
//             <EventInfoModal
//               open={eventInfoModal}
//               handleClose={() => setEventInfoModal(false)}
//               onDeleteEvent={onDeleteEvent}
//               currentEvent={currentEvent as IEventInfo}
//             />
//             <AddTodoModal
//               open={openTodoModal}
//               handleClose={() => setOpenTodoModal(false)}
//               todos={todos}
//               setTodos={setTodos}
//             />
//             <Calendar
//               localizer={localizer}
//               events={events}
//               onSelectEvent={handleSelectEvent}
//               onSelectSlot={handleSelectSlot}
//               selectable
//               startAccessor="start"
//               components={{ event: EventInfo }}
//               endAccessor="end"
//               defaultView="month"
//               eventPropGetter={(event) => {
//                 const hasTodo = todos.find((todo) => todo._id === event.todoId);
//                 return {
//                   style: {
//                     backgroundColor: hasTodo ? hasTodo.color : "#b64fc8",
//                     borderColor: hasTodo ? hasTodo.color : "#b64fc8",
//                   },
//                 };
//               }}
//               style={{ height: 500 }}
//             />
//           </CardContent>
//         </Card>
//       </Container>
//     </Box>
//   );
// };

// export default EventCalendar;
