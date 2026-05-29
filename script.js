// getname();
// console.log(x);
// var x = 7;

// function getname() {
//   console.log("This is my function");
// }

// console.log(x);
// console.log(getname);
//---------scope and functions----
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
