function requiredReading(totalPages, pagesPerHour, daysAlowed) {
  let totalTimeNeeded = totalPages / pagesPerHour;
  let readingTimePerDay = totalTimeNeeded / daysAlowed;
  console.log(readingTimePerDay);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
