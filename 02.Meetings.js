function meetings(array) {
  let meetingList = {};
  array.forEach((meeting) => {
    let [day, name] = meeting.split(" ");
    if (meetingList.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetingList[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  });
  for (let eachMeeting in meetingList) {
    console.log(`${eachMeeting} -> ${meetingList[eachMeeting]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
// meetings([
//   "Friday Bob",
//   "Saturday Ted",
//   "Monday Bill",
//   "Monday John",
//   "Wednesday George",
// ]);
