import { question } from "readline-sync";

let KW: number = Number(question("Nhap so KW dien: "));
if (KW < 100) {
    console.log(KW * 2000);
}
else if (KW >= 100 && KW <= 200) {
    console.log(KW * 2500);
}
else {
    console.log(KW * 3500);
}