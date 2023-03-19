import { question } from "readline-sync";

let DTB: number = Number(question("Nhap DTB: "));
if (DTB >= 5) {
    console.log("Dau");
}
else {
    console.log("Rot");
}
