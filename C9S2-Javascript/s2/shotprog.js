const names = ['james', 'Alan', 'sophia', 'lawerence', 'andrew',
    'alexander', 'ruby', 'Ariana', 'bruce', 'charlie', 'andrea'];

// How many names are beginning with a? 

const upperCaseNames=names.map(nm=>nm.toUpperCase());

const beginA=upperCaseNames.filter(nm=> nm.startsWith('A'));

const count=beginA.reduce((Intial,nm)=>++Intial,0);


console.log(" names are beginning with a : "+count);