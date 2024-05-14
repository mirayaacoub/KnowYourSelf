import { format, parseISO } from 'date-fns';

// Function to format the date to 'yy-mm-dd'
export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString); // Converts the ISO string to a Date object
  return format(date, 'MMMM d, yyyy'); 
};


export const formatSchedule = (scheduleData: Schedule[]): { day: string, time: string }[] => {
  return scheduleData.map((schedule) => {
    const dateTime = new Date(schedule.date_time);
    const day = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
    const time = dateTime.toLocaleTimeString('en-US', { timeStyle: 'short' });
    
    return {
      day,
      time
    };
  });
};