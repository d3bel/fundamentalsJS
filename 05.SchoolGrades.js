function schoolGrades(array) {
  let students = new Map();
  array.forEach((eachStudent) => {
    let studentInfo = eachStudent.split(" ");
    let studentName = studentInfo.shift();
    let studenstGrade = studentInfo.map(Number);
    if (!students.has(studentName)) {
      students.set(studentName, []);
    }
    let existingStudent = students.get(studentName);
    for (let grade of studenstGrade) {
      existingStudent.push(grade);
    }
  });
  let sortingStudents = Array.from(students).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return keyA.localeCompare(keyB);
    }
  );
  for (let [name, grade] of sortingStudents) {
    let avgGrade = 0;
    for (let avg of grade) {
      avgGrade += avg;
    }
    grade = avgGrade / grade.length;
    console.log(`${name}: ${grade.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
// schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
