function comments(array) {
  let userList = new Set();
  let articleList = new Set();
  let storedComment = {};

  array.forEach((command) => {
    if (command.includes("user")) {
      let userName = command.split("user ").pop();
      userList.add(userName);
    } else if (command.includes("article")) {
      let articleName = command.split("article ").pop();
      articleList.add(articleName);
    } else if (command.includes("posts on")) {
      let [userAndArticle, titleAndComment] = command.split(": ");
      let userName = userAndArticle.substr(0, userAndArticle.indexOf(" posts"));
      let articleName = userAndArticle.substr(
        userAndArticle.indexOf("posts on ") + 9,
        userAndArticle.length
      );
      if (userList.has(userName) && articleList.has(articleName)) {
        let commentTitle = titleAndComment.substr(
          0,
          titleAndComment.indexOf(",")
        );
        let commentContent = titleAndComment.substr(
          titleAndComment.indexOf(",") + 2,
          titleAndComment.length
        );
        let wholeComment = {
          commentTitle: commentTitle,
          commentContent: commentContent,
        };
        if (!storedComment.hasOwnProperty(articleName)) {
          storedComment[articleName] = { commentCount: 0 };
        }
        if (!storedComment[articleName].hasOwnProperty(userName)) {
          storedComment[articleName][userName] = [wholeComment];
          storedComment[articleName].commentCount++;
        } else {
          storedComment[articleName][userName].push(wholeComment);
          storedComment[articleName].commentCount++;
        }
      }
    }
  });
  Object.entries(storedComment)
    .sort((a, b) => b[1].commentCount - a[1].commentCount)
    .forEach(([article, object]) => {
      console.log(`Comments on ${article}`);
      delete object.commentCount;
      Object.entries(object)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([user, comment]) => {
          for (let everyComment in comment) {
            console.log(
              `--- From user ${user}: ${comment[everyComment].commentTitle} - ${comment[everyComment].commentContent}`
            );
          }
        });
    });
}
comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Books: I like books, I do really like them123",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
console.log("--------------------------------");
comments([
  "user Mark",
  "Mark posts on someArticle: NoTitle, stupidComment",
  "article Bobby",
  "article Steven",
  "user Liam",
  "user Henry",
  "Mark posts on Bobby: Is, I do really like them",
  "Mark posts on Steven: title, Run",
  "someUser posts on Movies: Like",
]);
