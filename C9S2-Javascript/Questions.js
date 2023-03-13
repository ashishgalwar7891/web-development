let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

//We are interested in retrieving only the name of the students and all the names should be in caps.
let names = studentRecords.map( stu => stu.name.toUpperCase());
console.log(names); 

//we want to get the details of students who scored more than 50 marks.
let marks = studentRecords.filter(nm=>nm.marks>50);
console.log(marks)

//Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let scored = studentRecords.filter(nm=>nm.marks>50 && nm.id>120);
console.log(scored)

//we would like to know the sum total of the marks of the students.
let totalmarks = studentRecords.reduce((a,b)=>a+b.marks,0)
console.log(totalmarks)

//Now combine the power of map(), filter() and reduce() together
//get only the names of the students who scored more than 50 marks
let name = studentRecords.filter(m=>m.marks>50).map(nm=>nm.name);
console.log(name);

// print the sum of marks of the students with id > 120.
let ids = studentRecords.filter(m=>m.id>120).reduce((a,b)=>a+b.marks,0);
console.log(ids);

//print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
    let totmarks = studentRecords.filter(checkmarks).reduce((a,b)=>a+b.marks,0);

    function checkmarks(m){
        if(m.marks<50){
            return m.marks+15;
        }else{
            return m.marks;
        }
    }
    console.log(totmarks)


    // let totmarks = studentRecords.filter(m=>{
    //     if(m.marks>50){
    //         return true;
    //     }else{
    //         return m.marks+15;
    //     }
    // }).reduce((a,b)=>a+b.marks,0);


    // console.log(totmarks)


    // sort the details of students as per name

    // let sortbyname =studentRecords.sort(so);
    // function so(a,b){
    //     if(a.name>b.name){
    //         return 1;
    //     }else if(a.name<b.name){
    //         return -1;
    //     }else{
    //         return 0;
    //     }
    // }
    // console.log(sortbyname)

    // function so(a,b){
    //     return a.name-b.name;
    // }

    // console.log(sortbyname)

    // sort the details of student in descending order of marks

    let sortbymark =studentRecords.sort(so);
    // function so(a,b){
    //     if(a.marks>b.marks){
    //         return -1;
    //     }else if(a.marks<b.marks){
    //         return 1;
    //     }else{
    //         return 0;
    //     }
    // }
    // console.log(sortbymark)

    function so(a,b){
        return b.marks-a.marks;
    }

    console.log(sortbymark)