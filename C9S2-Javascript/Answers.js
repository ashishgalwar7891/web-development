let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

//We are interested in retrieving only the name of the students and all the names should be in caps.
let names = studentRecords.map( stu => stu.name.toUpperCase());
console.log(names); 

//we want to get the details of students who scored more than 50 marks.
let names1 = studentRecords.filter(stu => stu.marks > 50);
console.log(names1);

//Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let names2 = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
console.log(names2);

//we would like to know the sum total of the marks of the students.
let totalMarks = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0)
console.log(totalMarks);

//Now combine the power of map(), filter() and reduce() together
//get only the names of the students who scored more than 50 marks
let names3 = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(names3);

// print the sum of marks of the students with id > 120.
let totalMarks1 = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
console.log(totalMarks1);

//print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
let totalMarks3 = studentRecords.map(function(stu){ 
    if(stu.marks < 50){
        stu.marks += 15;}
    return stu;
}).filter(stu => stu.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);
console.log(totalMarks3);


//sort the details of students as per name
          let sortname=studentRecords.sort((a,b)=>{
            if(a.name>b.name)
            return 1;
            if(a.name<b.name)
            return -1;
            else
            return 0;
        })
        console.log(sortname);
//sort the details of student in descending order of marks
        let sortMarks=studentRecords.sort((a,b)=>{
            if(a.marks>b.marks)
            return 1;
            if(a.name<b.name)
            return -1;
            else
            return 0;
        })
        console.log(sortMarks);