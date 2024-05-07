import { format, parseISO } from 'date-fns';

// Function to format the date to 'yy-mm-dd'
export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString); // Converts the ISO string to a Date object
  return format(date, 'MMMM d, yyyy'); 
};

