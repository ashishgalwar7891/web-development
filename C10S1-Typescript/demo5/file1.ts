type schoolstudent={
id:number|string,
fname:string,
lname?:string,
course,
fees:number,
bus:boolean
};
let busstudent : schoolstudent={
    id:123,
    fname:"Ashish",
    lname:"gupta",
    course:"java",
    fees:2000,
    bus:false
}

function display(student:schoolstudent):schoolstudent
{
    let a:schoolstudent;
    if(student.bus!=false)
    {
     a={
        id:student.id,
        fname:student.fname,
        lname:student.lname,
        course:student.course,
        fees:student.fees*5,
        bus:true
    }
}
else
{
 a={
    id:student.id,
    fname:student.fname,
    lname:student.lname,
    course:student.course,
    fees:student.fees*150,
    bus:true
}
}
//     if(student.lname)
//     {
//         console.log(student.id+student.fname+student.lname+student.course+student.fees+student.bus);

//     }
// else
// {
//     console.log(student.id+student.fname+student.course+student.fees+student.bus);
// }


return a;
}

let busstudent2:schoolstudent={
    id:"1234",
    fname:"niit1",
    lname:"ltd1",
    course:"java1",
    fees:200000,
    bus:false
};
let b:schoolstudent;
b=display(busstudent);


console.log(b);
