import { question } from "readline-sync";

let a: number = Number(question("Nhap A: "));
let b: number = Number(question("Nhap B: "));
let c: number = Number(question("Nhap C: "));

let temp1: number;
temp1 = a;
let temp2: number;
temp2 = b;
let temp3: number;
temp3 = c;

if (a < 0) {
    a = temp1;
}
else{
    temp1 = 0;
}

if (b < 0) {
    b = temp2;
}
else{
    temp2 = 0;
}
if (c < 0) {
    c = temp3;
}
else{
    temp3 = 0;
}
let tong = temp1 + temp2 + temp3;
console.log(tong);
if (a >= 0 && b >= 0 && c >= 0) {
    console.log("Khong co so am");
}