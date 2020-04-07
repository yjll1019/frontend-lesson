// 빈 배열 생성
let arr = [];

// 1부터 100까지의 난수 생성 후 배열 채우기
for (let i = 0; i < 100; ++i) {
    arr[i] = Math.floor(Math.random() * 100 + 1);
}

// 배열 오름차순 정렬
arr.sort(function(a, b) { // 오름차순
    return a - b;
});

// 배열 출력
console.log('[ ' + arr.join(', ') + ' ]'); 
