// 1. 1부터 100까지 합

let num = 0
for(let i = 1; i <= 100; i++ ){
    num += i
  }
console.log(num);

// 2. 1부터 100까지 홀수의 합과 짝수의 합

let even = 0
let odd = 0
for(let i = 1; i <=100; i++){
    if(i % 2 ==0){
        even += i;
    } else{
        odd += i;
}
console.log('짝수의 합 : ${even}`);
console.log('홀수의 합 : ${odd}`);

// 3. 100부터 1까지의 수중 3의배수만 출력
for (let i = 100; i >= 1; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// 4. 1부터 100까지 수 중 3의 배수는 제외, 3의 배수 & 5의 배수는 더해서 출력
let com = 0
for(let i = 1; i <=100; i++){
    if(i % 3 == 0)continue;
    if(i % 15 == 0){
        com += i
    }
}
console.log(com);

// 5. 두 수를 입력받아 두 수 사이의 합을 구하시오.
let n1 = parseInt(prompt("첫 번째 수를 입력하세요:"));
let n2 = parseInt(prompt("두 번째 수를 입력하세요:"));
let add = 0;

for (let i = n1; i <= n2; i++) {
    add += i;
}
console.log(`두 수 사이의 합: ${add}`);

// 6. 사용자로부터 10개의 정수를 입력받아 평균을 구하세요.
let sum = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`정수 ${i}를 입력하세요:`));
    sum += num
}

let avg = sum / 10;
console.log(`10개의 정수의 평균: ${avg}`);