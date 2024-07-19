export function generateTimestamp() {
  const now = new Date();
  return now.toISOString();
}

export function areDatesDifferent(timestamp1, timestamp2) {
  const date1 = new Date(timestamp1);
  const date2 = new Date(timestamp2);

  return (
    date1.getFullYear() !== date2.getFullYear() ||
    date1.getMonth() !== date2.getMonth() ||
    date1.getDate() !== date2.getDate()
  );
}

export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const options = { month: "short", day: "numeric", weekday: "long" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  //   const [weekday, month, day] = formattedDate.split(" ");
  //   return `${month} ${day} • ${weekday}`;
  return formattedDate;
}
