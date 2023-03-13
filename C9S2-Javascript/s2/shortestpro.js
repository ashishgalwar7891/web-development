const names = ['james', 'Alan', 'sophia', 'lawerence', 'andrew',
    'alexander', 'ruby', 'Ariana', 'bruce', 'charlie', 'andrea'];

// How many names are beginning with a? 

const count=names.map(nm=>nm.toUpperCase()).filter(nm=> nm.startsWith('A')).reduce((Intial,nm)=>++Intial,0);

// Function chaining

console.log(" names are beginning with a : "+count);