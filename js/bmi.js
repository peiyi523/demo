/**
 * 1.取得元素物件
 * 2.宣告bmi函式
 * 3.身高，體重進行傳遞測試
 * 
 */


const usernameEl = document.querySelector("#username");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
// 取得id=bmi的區塊
const bmiEl = document.querySelector("#bmi");
// 取得bmi值的評語
const commentEl = document.querySelector("#comment")
// console端輸出檢查有無異常
console.log(usernameEl, heightEl, weightEl, bmiEl, commentEl);
function clearForm() {
    usernameEl.value = "";
    heightEl.value = "";
    weightEl.value = "";
    commentEl.value = "";
}

function calcBmi() {
    let height = heightEl.value;
    let weight = weightEl.value;

    if (height == '' || weight == '') {
        alert("輸入不能為空");
        return;
    }

    let bmi = getBmi(height, weight);
    let comment;
    if (bmi < 18.5) {
        comment = "體重過輕";
    } else if (bmi < 24) {
        comment = "正常範圍";
    } else if (bmi < 27) {
        comment = "過重";
    } else if (bmi < 24) {
        comment = "輕度肥胖";
    } else if (bmi < 30) {
        comment = "中度肥胖";
    } else if (bmi < 35) {
        comment = "重度肥胖";

    }
    // 賦值
    bmiEl.innerText = "BMI:" + bmi;
    commentEl.innerText = comment;
    console.log(bmi, comment);


}

function getBmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤!";
    }
    return bmi.toFixed(2);
}