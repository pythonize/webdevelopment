
// 5000개의 숫자 리스트 생성
let numbers = [];
for (let i = 1; i <= 5000; i++) {
    numbers.push(i);

let numsum = 0
let generator = 0
for (let i = 0; i < 5000; i++) {
    let numsplit = parseInt(numbers[i].split(''));
    for (let j = 0; j <= numsplit.length ; j++);{
        numsum += numsplit[j]
        if numsum <= 5000 && numsum == numbers[i]{
            generator += numsum
        } else if numsum <= 5000 && numsum != numbers[i]{
            continue
        } else if numsum > 5000{
            break
        }
    }
console.log(generator)
