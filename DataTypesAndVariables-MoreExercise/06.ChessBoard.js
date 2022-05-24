// function chessBoard(arg){

// }
function chessBoard(arg) {
  let size = Number(arg);
  let currentColour = "";
  let previousColour = "";
  console.log('<div class="chessboard">');

  for (let rows = 1; rows <= size; rows++) {
    console.log("  <div>");

    for (let columns = 1; columns <= size; columns++) {
      previousColour = currentColour;
      currentColour = previousColour === "black" ? "white" : "black";
      console.log(`    <span class="${currentColour}"></span>`);
    }

    console.log("  </div>");
    if (size % 2 === 0) {
      previousColour = currentColour;
      currentColour = previousColour === "black" ? "white" : "black";
    }
  }

  console.log("</div>");
}
chessBoard(3);
