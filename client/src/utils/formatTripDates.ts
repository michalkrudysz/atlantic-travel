export function formatTripDates(
  startDate: string | null,
  endDate: string | null
): string | null {
  if (!startDate || !endDate) {
    return null;
  }

  const format = (dateStr: string): string => {
    const [year, month, day] = dateStr.split("-");
    return `${day}.${month}.${year}`;
  };

  try {
    const formattedStartDate = format(startDate).slice(0, 6);
    const formattedEndDate = format(endDate);

    return `${formattedStartDate} – ${formattedEndDate}`;
  } catch (error) {
    console.error("Error formatting dates:", error);
    return null;
  }
}
