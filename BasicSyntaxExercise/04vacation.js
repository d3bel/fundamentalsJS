function vacation(groupPpl, typeGroup, dayOfWeek) {
  groupPpl = Number(groupPpl);
  let totalPrice = 0;
  switch (typeGroup) {
    case "Students":
      if (dayOfWeek === "Friday") {
        totalPrice = groupPpl * 8.45;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = groupPpl * 9.8;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = groupPpl * 10.46;
      }
      if (groupPpl >= 30) {
        totalPrice *= 0.85;
      }
      break;
    case "Business":
      if (groupPpl >= 100) {
        groupPpl -= 10;
      }
      if (dayOfWeek === "Friday") {
        totalPrice = groupPpl * 10.9;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = groupPpl * 15.6;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = groupPpl * 16;
      }
      break;
    case "Regular":
      if (dayOfWeek === "Friday") {
        totalPrice = groupPpl * 15;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = groupPpl * 20;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = groupPpl * 22.5;
      }
      if (groupPpl >= 10 && groupPpl <= 20) {
        totalPrice *= 0.95;
      }
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");
