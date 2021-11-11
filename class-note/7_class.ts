class Person {
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}
