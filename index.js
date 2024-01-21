      function getRandomInt(start, end) {
            let x = Math.floor(Math.random() * end) + start;
            return x;

        }
        document.write(Date());
   
        let rows = [];
        for (let j = 0; j < 5; j++) {
            let numbers = [];
            while (true) {
                let x = getRandomInt(1, 49);
                // !=>not,includes(是否包含)
                if (!numbers.includes(x)) {
                    // 排序
                    numbers.push(x);
                    if (numbers.length == 6) {
                        break;
                    }
                }
            }
            // 排序

            numbers.sort(compare);
            rows.push(numbers);
        }
        // 排序的方法
        function compare(a, b) {
            return a - b;
        }
        // 輸出樂透號碼到document
        console.log(rows);
        const lottoryE1 = document.querySelector("#lottory");
        for (let i = 0; i < rows.length; i++) {
            result = rows[i].join(",");
            
            lottoryE1.innerHTML+=`<h3>第${i + 1}組號碼:${result}</h3><hr>`
            // document.write(`<h3>第${i + 1}組號碼:${result}</h3><hr>`)
        }

    // object=json
    let user={
        name:"peiyi",
        height:164,
        weight:54
    }
console.log(user,typeof(user));
console.log(user.name,user["name"]);

// 計算BMI函式

    function getBmi(height,weight){
        let bmi=weight/(height/100)**2;
        if(isNaN(bmi)){
            return "數值錯誤!";

        }
        return bmi.toFixed(2);
    }
    const h1=document.querySelector("h1");
    
    console.log(h1,lottoryE1);
    // innerText或innerHTML
    h1.innerHTML="<u>大樂透</u>"
    h1.style.color='red';









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




  