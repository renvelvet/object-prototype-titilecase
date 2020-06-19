let str = prompt("Coba tulis sebuah kalimat!");

String.prototype.titleCase = function () {
  let words = this.split(" ");
  console.log(words);

  let finalWords = words.map((element) => {
    let initChar = element.charAt(0);
    let upperChar = initChar.toUpperCase();
    element = upperChar + element.slice(1);
    return element;
  });
  return finalWords.join(" ");
};

alert(str.titleCase());
