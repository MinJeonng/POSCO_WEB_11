const colors = ["red", "orange", "yellow","green","blue","indigo","purple"];

console.log(colors[2]);
colors.push("pink");
console.log(colors);
console.log(colors.indexOf("black"));
console.log(colors.reverse());

// const 사용시, 아예 새로운 배열을 넣는건 불가능, 그저 넣고 뺴고는 가능함. 즉, 밑에꺼는 const에선 불가능하다.
const color = ["red", "yellow"];
color = ["java",'html'];
console.log(color);

