// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean;

// 유니온(Union Type) 타입 - 하나 이상의 특정 타입을 쓸 수 있게 해주는것.
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 타입 가드(특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정) 이용
function askSomeone(someone: Developer | Person) {
    someone.name;
    if ('skill' in someone) {
        someone.skill
    }
    if ('age' in someone) {
        someone.age
    }
}

askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 100});

// function askSomeone(someone: Developer & Person) {
//     someone.name;
//     someone.age;
//     someone.skill
// }
// askSomeone({name: '디벨로퍼', skill: '웹 개발', age: 33});
// askSomeone({name: '캡틴', age: 100});

// var capt: string & number & boolean;
