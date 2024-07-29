export function formatTripDates(startDate: string, endDate: string): string {
  const format = (dateStr: string): string => {
    const [year, month, day] = dateStr.split("-");
    return `${day}.${month}.${year}`;
  };

  const formattedStartDate = format(startDate).slice(0, 6);
  const formattedEndDate = format(endDate);

  return `${formattedStartDate} – ${formattedEndDate}`;
}
