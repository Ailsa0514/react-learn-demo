class Person {
    constructor (name,age){
        this.name = name ;
        this.age  = age ;
    }
    say(){
        console.log("niha43234o ")
    }
}

//class 中的关键字 extends 实现子类继承父类
class America extends Person{
   
}

var A1 = new America("Jack",20)

console.log(A1);
A1.say();
class Chinese extends Person{

}

var c1 = new Chinese("李四",24);

console.log(c1);