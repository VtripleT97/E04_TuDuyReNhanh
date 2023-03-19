import { question } from "readline-sync";

let a: number = Number(question("Nhap A: "));
let b: number = Number(question("Nhap B: "));
if (a > b) {
    console.log("Lon");
}
else if (a < b) {
    console.log("Nho");
}
else {
    console.log("Bang");
}
