function softUniStudents(array) {
  let coursesList = {};
  array.forEach((element) => {
    if (element.includes(": ")) {
      let [course, capacity] = element.split(": ");
      if (coursesList.hasOwnProperty(course)) {
        coursesList[course].capacity += Number(capacity);
      } else {
        coursesList[course] = { capacity: Number(capacity), studentsInfo: [] };
      }
    } else {
      let arrayOfStudentInfo = element.split(" ");
      let userName = arrayOfStudentInfo[0].slice(
        0,
        arrayOfStudentInfo[0].indexOf("[")
      );
      let userCredits = Number(
        arrayOfStudentInfo[0].slice(
          arrayOfStudentInfo[0].indexOf("[") + 1,
          arrayOfStudentInfo[0].indexOf("]")
        )
      );
      let userEmail = arrayOfStudentInfo[3];
      let userCourse = arrayOfStudentInfo[5];
      let studentsInfo = {
        userCredits: userCredits,
        userName: userName,
        userEmail: userEmail,
      };
      if (coursesList.hasOwnProperty(userCourse)) {
        if (coursesList[userCourse].capacity > 0) {
          coursesList[userCourse].studentsInfo.push(studentsInfo);
          coursesList[userCourse].capacity--;
        }
      }
    }
  });
  let sortByStudentsCount = Object.entries(coursesList).sort(
    (a, b) => b[1].studentsInfo.length - a[1].studentsInfo.length
  );
  for (let [course, cap] of sortByStudentsCount) {
    console.log(`${course}: ${cap.capacity} places left`);
    let sortByCredits = cap.studentsInfo.sort(
      (a, b) => b.userCredits - a.userCredits
    );
    sortByCredits.forEach((student) => {
      console.log(
        `--- ${student.userCredits}: ${student.userName}, ${student.userEmail}`
      );
    });
  }
}
softUniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
console.log("-----------------");
softUniStudents([
  "JavaBasics: 15",
  "user1[26] with email user1@user.com joins JavaBasics",
  "user2[36] with email user11@user.com joins JavaBasics",
  "JavaBasics: 5",
  "C#Advanced: 5",
  "user1[26] with email user1@user.com joins C#Advanced",
  "user2[36] with email user11@user.com joins C#Advanced",
  "user3[6] with email user3@user.com joins C#Advanced",
  "C#Advanced: 1",
  "JSCore: 8",
  "user23[62] with email user23@user.com joins JSCore",
]);
