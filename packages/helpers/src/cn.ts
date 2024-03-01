import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Constructs class names conditionally with tailwind-merge
 *
 * A wrapper function for clsx(), which passes the resulting class names
 * through twMerge() to remove conflicting tailwind classes
 *
 * @param {...ClassValue[]} inputs any number of arguments, each of which can be an Object, Array, Boolean, or String.
 * @returns {string} a string of class names
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
