import { question } from "readline-sync";

let a: number = Number(question("Nhap A: "));
let b: number = Number(question("Nhap B: "));
let c: number = Number(question("Nhap C: "));
if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b) {
    console.log("Yes");
}
else {
    console.log("No");
}