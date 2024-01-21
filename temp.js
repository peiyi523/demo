<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>JavaScript</h1>
    <h2>本期預測號碼==></h2>





    <script>
        // 使用let優於var
        // let x = 10;
        // 常數宣告：帶const的約定之後，不管後面如何變動都無效，都要以const為主
        // const PI = 3.1415926;

        let email = "mary@gmail.com";
        console.log(email);
        console.log(email.length);
        console.log(email.length - 1);
        console.log(email[email.length - 1]);

        for (let i = 0; i < email.length; i++) {
            console.log(i, email[i]);
        }
        let z = null;
        console.log(z);

        // 三個等表示值跟型態都要完全相等才會是true
        console.log(10 === "10");
        // 型態轉換 Number,String,Boolean
        console.log(10 === Number("10"));
        console.log(String(10) === "10");

        let ch = 60;
        let eng = 0;
        let math = 60;
        // ||->or &&->and
        if ((ch >= 60 || eng >= 60) && math >= 60) {
            console.log("pass!");
        } else {
            console.log('fail~');
        }
        console.log(Math.PI);
        // 1~10之間亂數
        // 0~1間的浮點數
        // 用floor取小於等於最接近的整數(0,10)
        for (let i = 0; i < 10; i++) {
            let r = Math.floor(Math.random() * 49) + 1;
            console.log(r);
        }
        while (true) {
            // 不可以寫50會離不開
            let r = getRandomInt(1, 49);
            console.log(r);
            if (r == 49) {
                break;
            }
        }
        // 函式宣告
        function getRandomInt(start, end) {
            let x = Math.floor(Math.random() * end) + start;
            return x

        }

        // let numbers = [];
        // 外迴圈(控制組數) =>產生五組號碼

        // let rows = [];
        // for (let j = 0; j < 5; j++) {
        //     let numbers = [];
        //     // 內迴圈產生每組六個號碼
        //     for (let i = 0; i < 6; i++) {
        //         let x = getRandomInt(1, 49);
        //         numbers.push(x);
        //     }
        //     rows.push(numbers);
        // }
        // console.log(rows);

        let rows = [];
        for (let j = 0; j < 5; j++) {
            let numbers = [];
            let x = getRandomInt(1, 49);
            if (!numbers.includes(x)) {
                numbers.push(x);
                if (numbers.length == 6) {
                    break;
                }
            }
            rows.push(numbers);
        }








        // 輸出六個號碼到網頁上
        // for (let i = 0; i < 6; i++) {
        //     let x = getRandomInt(1, 49);
        //     // document.write("<h3>第" +（i + 1) + "個號碼：" + x + "</h3>"
        //     // 使用反引號+${}
        //     document.write(`<h3>第 ${i + 1}  個號碼： ${x} </h3>`);
        //     number.push(x);
        // }

        // console.log(numbers);






        // for i in range(len(email)):
        //      print(i,email[i])

        // 計算BMI,prompt是提示輸入
        // let height = prompt("請輸入身高(cm):");
        // let weight = prompt("請輸入體重(kg)");
        // let bmi = weight / (height / 100) ** 2;
        // let result = "<ul>";
        // result += "<li>身高:" + height + "<li>";
        // result += "<li>體重:" + weight + "<li>";
        // result += "<li>BMI:" + bmi.toFixed(2) + "<li>";
        // console.log("BMI:" + bmi);
        // result += "</ul>";
        // document.write(result)
        // 在JS中可以字串+數字（字串串接）
        // let result = "面積為" + area;

        // print在JS中用console.log可以在console中顯示
        // console.log(typeof (radius), area, typeof (result));
        // 輸出到網頁
        // document.write("<h2>BMI:" + bmi + "</h2 >");
        // alert：編頁會跳出一個小頁籤提示
        // alert(result);
        /**我
         是
         長
         註
         解*/




    </script>
</body>

</html>