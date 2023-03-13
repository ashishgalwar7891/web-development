const names = ['james', 'Alan', 'sophia', 'lawerence', 'andrew',
    'alexander', 'ruby', 'Ariana', 'bruce', 'charlie', 'andrea'];

// How many names are beginning with a? 

const upperCaseNames=names.map(converUpper);

function converUpper(nm)
{
    return nm.toUpperCase();
}

console.log(upperCaseNames);

const beginA=upperCaseNames.filter(checkBeginA);

function checkBeginA(nm)
{
    return nm.startsWith('A');
}

console.log(beginA);

const count=beginA.reduce(countElements,0);

function countElements(Intial,nm)
{
    return ++Intial;
}

console.log(" names are beginning with a : "+count);