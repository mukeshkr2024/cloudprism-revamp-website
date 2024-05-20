import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { compareDesc, parseISO, format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortBlogs = (blogs: any) => {
  return blogs
    .slice()
    .sort((a: any, b: any) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const formatPostDate = (date: Date): string => {
  return format(parseISO(date.toISOString()), "MMMM dd, yyyy");
};
