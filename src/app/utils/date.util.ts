const formatDate = (date: string) => {
  const newDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    newDate
  );
  const clientFormattedDate = formattedDate.replace(/\u202F/g, " ");
  return clientFormattedDate;
};

export default formatDate;
