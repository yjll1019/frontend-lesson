let persons = [{ name: "홍길동", age: 16 }, { name: "임꺽정", age: 18 }, { name: "전우치", age: 19 }];

persons.sort(function(a, b){
    return b.age - a.age
});

console.log(persons)