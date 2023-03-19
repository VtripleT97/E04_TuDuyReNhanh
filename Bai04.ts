import { question } from "readline-sync";

let a: number = Number(question("Nhap A: "));
let b: number = Number(question("Nhap B: "));
let c: number = Number(question("Nhap C: "));

if (a == b && b == c && a == c) {
    console.log("Yes");
}
else {
    console.log("No");
}