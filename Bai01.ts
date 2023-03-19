import { question } from "readline-sync";

let x: number = Number(question("Nhap X: "));
if (x % 2 == 0) {
    console.log("Chan");
}
else {
    console.log("Le")
}