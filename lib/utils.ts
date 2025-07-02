import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export const rootDomain =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost:4000';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
