// 인포 버튼 눌렀을 때 디스플레이 조정으로 화면 나오기
const daychart = document.querySelector('.daychart');
const minchart = document.querySelector('.minchart');
const news = document.querySelector('.news');

function day_button() {
    minchart.style.display = "none";
    news.style.display = "none";
    daychart.style.display = "block";
}

function min_button() {
    daychart.style.display = "none";
    news.style.display = "none";
    minchart.style.display = "block";
    }

function news_button() {
    daychart.style.display = "none";
    news.style.display = "block";
    minchart.style.display = "none";
}

// 버튼 정의
let holdButton = document.querySelector("#ab_hold")
let sellButton = document.querySelector("#ab_sell")
let result = document.querySelector(".finish")
let home = document.querySelector(".ab_homeA")
let next = document.querySelector(".next_caseA")

// 홀딩 버튼 분차트 변경
let i;
i = 1;

function min_change() {
    min_button();

    if (i == 20) {
        return;    
    }
    else if (i == 19) {
        holdButton.style.display = "none";
    }
    i++
    let img_src = document.getElementById("img_cg");
    img_src.src = "../images/afterbet/case1/min" + i + ".jpg";
    return i;
}

// 타이머 개체 지정
let timerDiv = document.querySelector("#timer");

//case 수익률 배열
let case1 = ['2.78','4.17','4.44','3.89','4.17','3.61','1.67','2.50','4.17','3.61','5.56','6.11','5.83','6.11','6.39','5.00','3.89','3.33','3.33','5.83']

// 결과창 수익률 쓰는 코드
function resultYou(v) {
    result.innerHTML = "<p>당신의 수익률은!!!</p><p>" + v + "%입니다."
}

// 이미지 파일명 추출
let img_id = document.getElementById("img_cg");
let img_src = img_id.src;
let imgNameAll = img_src.replace(/^.*\//, '');
let imgNameSplit = imgNameAll.split('.');
let imgName = imgNameSplit[0];

// 매도 버튼 게임 종료 및 타이머 숨기기
function end_game(caseNum) {
    min_button();

    timerDiv.style.display = "none";
    result.style.display = "block";
    sellButton.style.display = "none";
    holdButton.style.display = "none";
    home.style.display = "inline-block";
    next.style.display = "inline-block";

    resultYou(caseNum);

    img_id.src = "../images/afterbet/case1/min" + 20 + ".jpg";
}

