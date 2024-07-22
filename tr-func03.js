
// 2. 중복처리 문제

// 45개의 숫자 리스트 생성
let numbers = [];
for (let i = 1; i <= 45; i++) {
    numbers.push(i);
}

// 랜덤값 생성 함수
function myrand(range) {
    return Math.floor(Math.random() * range);
}

// swap 작업을 100번 반복
for (let i = 0; i < 100; i++) {
    let idx1 = myrand(45);
    let idx2 = myrand(45);    
    // 중복방지
    if (idx2 == idx1) {
        continue;
    } else if (idx2 != idx1){
        // 두 인덱스의 값 교환
        [numbers[idx1], numbers[idx2]] = [numbers[idx2], numbers[idx1]];
    }
}

// 리스트에서 6개의 값 선택
let choice = numbers.slice(0, 6);

// 결과 출력
console.log(choice);