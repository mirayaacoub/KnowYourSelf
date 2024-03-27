import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Ensures the order of definition of tailwind classes and makes passing in
 * other classes easier.
 * @param inputs
 */
const cm = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default cm;
