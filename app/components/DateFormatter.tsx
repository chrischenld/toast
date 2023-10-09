import { parseISO, format } from "date-fns";

interface Props {
  dateString: string;
}

export function DateFormatter({ dateString }: Props) {
  try {
    const date = parseISO(dateString);

    // Check if date is valid before formatting
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    return (
      //  Needs 'suppressHydrationWarning' because of time diff between server and client
      <time dateTime={dateString} className="text-fg-muted text-sm" suppressHydrationWarning>
        {format(date, "LLLL dd, yyyy")}
      </time>
    );
  } catch (error) {
    // Handle the error gracefully, for example, by displaying an error message
    return <span className="text-fg-muted">invalid date</span>;
  }
}