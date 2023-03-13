 class student{
    id:number;
    name:string;
   marks:number;

constructor(id:number, name:string,marks:number) {
    this.id=id;
    this.name=name;
    this.marks=marks;
}

getmarks()
{
    return this.marks;
}

setmarks(abc:number)
{
    this.marks=abc;
}

}

const s1=new student(11,"amit",99);
let s2=new student(12,"gaurav",94);
var s3=new student(13,"jai",98);


// console.log(`student id:${s1.id},student name:${s1.name},Marks:${s1.marks}`)
// console.log(`student id:${s2.id},student name:${s2.name},Marks:${s2.marks}`)
// console.log(`student id:${s3.id},student name:${s3.name},Marks:${s3.marks}`)



s1.name="amit Kumar";
s2.setmarks(99);
s3.id=45;

console.log(`student id:${s1.id},student name:${s1.name},Marks:${s1.getmarks()}`)
console.log(`student id:${s2.id},student name:${s2.name},Marks:${s2.getmarks()}`)
console.log(`student id:${s3.id},student name:${s3.name},Marks:${s3.getmarks()}`)




