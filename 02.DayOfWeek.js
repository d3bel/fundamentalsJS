function dayOfWeek(day) {
    let wholeWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        if(day >= 1 && day <= 7){
            console.log(wholeWeek[day - 1]);
        } else {
            console.log("Invalid day!")
        }
}
dayOfWeek(3)
dayOfWeek(6)
dayOfWeek(11)