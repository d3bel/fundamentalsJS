function extractFile(string) {
  let array = string.split("\\");
  let file = array[array.length - 1].split(".");
  let fileExt = file.pop()
  let fileName = file.join(".")
  console.log(`File name: ${fileName}\nFile extension: ${fileExt}`);
}
extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
