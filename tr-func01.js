// 1. 수를 입력받아 받은수까지 홀수 합 반환

function oddsum(value) {
    let sum = 0;
    for (let i = 1; i <= value; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

// 2. 인자로 N을 전달, N 절대값 반환
function absn (n) {
    return Math.abs(n);
}

// 3. cm를 inch로 변환
function convert (value){
    return value / 2.54
}

// 4. byte를 bit로 반환
function con(value, scale) {
    if (scale === "G") {
        return value * Math.pow(10, 9) * 8;
    } else if (scale === "M") {
        return value * Math.pow(10, 6) * 8;
    } else if (scale === "K") {
        return value * Math.pow(10, 3) * 8;
    }
    return value * 8; // 기본적으로 Byte를 bit로 변환
}

// 5. 비만도 측정
function measure(tall, weight) {
    let stanweight = (tall - 100) * 0.9;
    let fat = (weight / stanweight) * 100;
    let grade = '저체중';

    if (fat >= 200) {
        grade = '위험한 비만';
    } else if (fat >= 150 && fat < 200) {
        grade = '고도비만';
    } else if (fat >= 130 && fat < 150) {
        grade = '중등도비만';
    } else if (fat >= 120 && fat < 130) {
        grade = '경도비만';
    } else if (fat >= 110 && fat < 120) {
        grade = '과체중';
    } else if (fat >= 90 && fat < 110) {
        grade = '정상체중';
    } else if (fat >= 80 && fat < 90) {
        grade = '경한저체중';
    } else if (fat < 80) {
        grade = '저체중';
    }
    return grade;
}

console.log('비만도:', measure(177, 75));