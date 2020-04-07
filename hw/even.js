//빈 배열을 만든다.
let arr = [];

// Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
for (let i = 0; i < 100; ++i) {
    arr[i] = Math.floor(Math.random() * 100 + 1);
}

// 배열에 원소들 중에서 짝수(2의 배수)를 찾아서 모두 제거한다.
for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 === 0) {
        arr.splice(i, 1);
        --i;
    }
}

// 배열을 출력한다.
console.log('[ ' + arr.join(', ') + ' ]'); 
