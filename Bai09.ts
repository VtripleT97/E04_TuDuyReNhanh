import { question } from "readline-sync";

let a: number = Number(question("Nhap A: "));
let b: number = Number(question("Nhap B: "));
let c: number = Number(question("Nhap C: "));

if (a < 0) {
    console.log("So am la: " + a);
}
if (b < 0) {
    console.log("So am la: " + b);
}
if (c < 0) {
    console.log("So am la: " + c);
}
if (a >= 0 && b >= 0 && c >= 0) {
    console.log("Khong co so am");
}