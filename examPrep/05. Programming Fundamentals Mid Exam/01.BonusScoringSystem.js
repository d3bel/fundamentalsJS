function bonusScoringSystem(array) {
  let totalStudentsEnrolled = Number(array.shift());
  let lecturesTotal = Number(array.shift());
  let additionalBonus = Number(array.shift());
  let maxBonus = 0;
  let studentAttendance = 0;
  for (let currentAttendances of array) {
    currentAttendances = Number(currentAttendances);
    let currnetBonus =
      (currentAttendances / lecturesTotal) * (5 + additionalBonus);
    if (currnetBonus > maxBonus) {
      maxBonus = currnetBonus;
      studentAttendance = currentAttendances;
    }
  } console.log(`Max Bonus: ${Math.ceil(maxBonus)}.\nThe student has attended ${studentAttendance} lectures.`);
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
