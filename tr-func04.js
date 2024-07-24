arr = [4, 8, 2, 7, 6];

//arr.sort();
for(let i = 0; i < arr.length -1; i++){
  for(let j = 0; j < i; j++){
    if(arr[i] < arr[j]){
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp
    }
  }
}


console.log(arr);


// 입력받은 주민등록번호를 문자열로 처리
let num = prompt('주민등록 번호를 입력하세요:');

// 문자열을 배열로 쪼개기
let numArray = num.split('');

let total = []
for(i = 0; i < 13; i++){
    if (i < 8){
        let sum += numArray[i]*(i+2)
    } else if (i>=8){
        let sum += numArray[i]*(i-6)
    } else if (i == 12){
        let check = 11 - (sum % 11)
        if check.length = 2{
            checknum = check.split('');
            console.log(checknum[1])
        } else if check.length = 1{
            console.log(check)
        }
    }
}


// 실습 알고리즘

// 주민번호 입력
let num = prompt('주민등록 번호를 입력하세요:');

// 문자열 쪼개기
let numArray = num.split('');

let sum = 0;
for (let i = 0; i < 12; i++){
    if (i < 8) {
        sum += parseInt(numArray[i]) * (i + 2);
    } else {
        sum += parseInt(numArray[i]) * (i - 6);
    }
}

// 검증 계산
let check = 11 - (sum % 11);
if (check >= 10) {
    check = check % 10;
}

// 검증
if (check === parseInt(numArray[12])) {
    console.log('유효');
} else {
    console.log('유효하지 않음');
}
