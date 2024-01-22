       /**
         * 1.
        let ch = 60;
        let eng = 0;
        let math = 60;

        if ((ch >= 60 || eng >= 60) && math >= 60) {
            console.log("pass!");
        } else {
            console.log("fail~");
        }
        */

        /**
        let z = null;
        console.log(z + 10);
        console.log(Math.PI);
        // 1~10之間的亂數 randint(0,10)
        for (let i = 0; i < 10; i++) {
            let r = Math.floor(Math.random() * 10);
            console.log(r);
        }
        */
        // 取1~49
        /**
        for (let j = 0; j < 10; j++) {
            let r = Math.floor(Math.random() * 49);
            console.log(r);
        }
        */
 /**
         * 2.
        // 型態轉換
        console.log(10 === "10");
        console.log(String(10) === "10");
        console.log(10 === Number("10"));
        */


        /**
         * 3.
        height = prompt("請輸入身高(cm)");
        weight = prompt("請輸入體重(kg)");
        bmi = weight / (height / 100) ** 2;

        let result = "<ul>";
        result += "<li>身高:" + height + "</li>";
        result += "<li>體重:" + weight + "</li>";
        result += "<li>BMI:" + bmi.toFixed(2) + "</li>";
        console.log("BMI為" + bmi.toFixed(2));
        document.write(result);
        alert("BMI為" + bmi.toFixed(2));
        result += "</ul>";
        */

        /**
         * 4.
        let x = 10;
        // 常數的宣告會是大寫的
        const PI = 3.1415926;
        // 計算圓面積，用提示輸入的方式
        let radius = prompt("請輸入半徑:");
        let area = radius * radius * PI;
        // 字串+數字會自動以字串串接為主
        let result = "面積為:" + area;
        // 輸出到log
        console.log(radius, area, result, typeof (result));
        // 輸出到網頁
        document.write("<h2>" + result + "</h2>")
        // 輸出警告提示
        alert(result);
        */

       /**
        let email = "mary@gmail.com";
        console.log(email);
        console.log(email.length);
        console.log(email[email.length - 1]);
        for (let i = 0; i < email.length; i++) {
            console.log(i, email[i]);
        }
        */