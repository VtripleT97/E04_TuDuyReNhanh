import { question } from "readline-sync";

let a: number = Number(question("Nhap A: "));
let b: number = Number(question("Nhap B: "));
let c: number = Number(question("Nhap C: "));

if (a % 2 == 0) {
    console.log("So chan la: " + a);
}
if (b % 2 == 0) {
    console.log("So chan la: " + b);
}
if (c % 2 == 0) {
    console.log("So chan la: " + c);
}
if (a % 2 != 0 && b % 2 != 0 && c % 2 != 0) {
    console.log("Khong co so chan");
}