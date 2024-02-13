// function lottroyNumber() {
//     //輸出六個號碼到網頁上
//     for (let i = 0; i < 6; i++) {
//         let x = getRandomInt(1, 49);
//         //document.write("<h3>第" + (i + 1) + "個號碼:" + x + "</h3>");
//         //使用反引號+${}
//         document.write(`<h3>第 ${i + 1} 個號碼: ${x} </h3>`);
//     }
// }

// // 使用let優於var
// let ch = 60;
// let eng = 0;
// let math = 60;
// // || ->or && ->and
// if ((ch >= 60 || eng >= 60) && math >= 60) {
//     console.log("pass!");
// } else {
//     console.log("fail~");
// }


// let x = 10;
// console.log(x++);
// // 常數宣告
// const PI = 3.1415926;
// // 型態轉換  Number,String,Boolean
// console.log(10 == Number("10"));

// let email = "mary@gmail.com";
// console.log(email);
// console.log(email.length);
// console.log(email[email.length - 1]);

// for (let i = 0; i < email.length; i++) {
//     console.log(i, email[i]);
// }

// let z = null;
// console.log(z + 10);
// console.log(Math.PI);

// //函示宣告
// function getRandomInt(start, end) {
//     let x = Math.floor(Math.random() * end) + start;
//     return x
// }

// function getNumbers(num, length) {
//     let rows = [];
//     for (let i = 0; i < num; i++) {
//         let numbers = [];
//         // 內迴圈產生每組的六個號碼(不重複)
//         while (true) {
//             let x = getRandomInt(1, 49);
//             // !=>not，includes(是否包含)
//             if (!numbers.includes(x)) {
//                 numbers.push(x);
//             }

//             if (numbers.length == length) {
//                 break;
//             }
//         }
//         numbers.sort(compare);
//         // 排序
//         rows.push(numbers);
//     }
//     return rows;
// }
// function getLottroy() {
//     const lottroyEl = document.querySelector("#lottroy");
//     let num = prompt("請輸入組數")
//     rows = getNumbers(num, 10);

//     //輸出樂透號碼到document
//     // total=0
//     lottroyEl.innerHTML = "";
//     for (let i = 0; i < rows.length; i++) {
//         result = rows[i].join(" , ");
//         lottroyEl.innerHTML += `<h3>第${i + 1}組號碼: ${result}</h3><hr>`;
//         // alert("click!");
//     }
// }
// const dateEl = document.querySelector(".date");
// dateEl.innerText = Date()


// // document.write(Date() + "<hr>");

// //使用陣列(串列)
// // 外迴圈(控制組數)  =>產生五組號碼


// //排序的方法
// function compare(a, b) {
//     return a - b;
// }

// // console.log(rows);
// // const lottroyEl = document.querySelector("#lottroy");
// // //輸出樂透號碼到document
// // for (let i = 0; i < rows.length; i++) {
// //     result = rows[i].join(" , ");
// //     lottroyEl.innerHTML += `<h3>第${i + 1}組號碼: ${result}</h3><hr>`;
// // }


// // object =>json
// let user = {
//     name: "Jerry",
//     height: 178.6,
//     weight: 77.8
// }

// console.log(user, typeof (user));
// console.log(user.name, user["name"]);

// console.log(getBmi("180", "78"));

// //計算bmi函式
// function getBmi(height, weight) {
//     let bmi = weight / (height / 100) ** 2;
//     if (isNaN(bmi)) {
//         return "數值錯誤!";
//     }

//     return bmi.toFixed(2);
// }

// const h1 = document.querySelector("h1");

// // console.log(lottroyEl);
// // innerText
// h1.innerHTML = "<u>大樂透</u>";
// h1.style.color = "red";




for (i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * 49) + 1;
    console.log(r);
}
while (true) {
    let r = getRandomInt(1, 49);
    console.log(r);
    if (r == 49) {
        break;
    }
}
function getRandomInt(start, end) {
    let r = Math.floor(Math.random() * end) + start;
    return r

}

function getLottery() {

    const lotteryEl = document.querySelector("#lottery");
    let datas = [];
    for (let j = 0; j < 5; j++) {
        let numbers = [];
        while (true) {
            let x = getRandomInt(1, 49);
            // 用!和includes取不重覆的號碼
            if (!numbers.includes(x)) {
                // document.write(`<h3>第${i + 1}個號碼:${x}</h3>`)
                numbers.push(x);
            }
            if (numbers.length == 6) {
                break;
            }
        }
        // 排序
        numbers.sort(compare);
        datas.push(numbers);
        // 以橫版顯示輸出到document
        lotteryEl.innerHTML = "";
        for (let i = 0; i < datas.length; i++) {
            result = datas[i].join(",");
            console.log(result);
            lotteryEl.innerHTML += `<h3>第${i + 1}組號碼:${result}</h3><hr>`
        }

    }
}

const dateEl = document.querySelector(".date");
dateEl.innerText = Date()
console.log(dateEl);
// 輸出5組六個號碼
// document.write(Date() + "<hr>");


function compare(a, b) {
    return a - b;
}


// document.write(`<h3>第${i + 1}組號碼:${result}</h3><hr>`)

// 更精準的轉型
x = "3.5";
// document.write(Number(x));
// document.write(parseInt(x));
// object=>json
let user = {
    name: "Peggy",
    height: 164,
    weight: 54
}
console.log(user, typeof (user));
console.log(user.name, user["name"]);

// 計算bmi函式
function getBmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤!"
    }
    return bmi.toFixed(2);
}
console.log(getBmi("abc", "250"));

const h1 = document.querySelector("h1");

// console.log(lotteryEl);

h1.innerHTML = "<u>大樂透</u>";
h1.style.color = "red";
