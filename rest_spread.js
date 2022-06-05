const filterOdds = (...args) => args.filter(v => v%2 === 0)

const findMin = (...args) => args.reduce((accum, curr) => curr < accum ? curr : accum)
const findMin1 = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleReturn = (array, ...args) => [...array, ...args.map(v => v * 2)]

const removeRandom = (array) => {
    let index = Math.floor(Math.random() * array.length);
    return [...array.slice(0,index), ...array.slice(index+1)]
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = value;
    return newObj;
}

const removeKey = (obj, key) => {
    newObj = {...obj}
    delete newObj[key]
    return newObj
}

const combine = (obj1, obj2) {
    newObj1 = {...obj1}
    newObj2 = {...obj2}

    return (newObj1, newObj2);
}

const update = (obj, key, val) => {
    newObj = {...obj}
    newObj[key] = val
    return newObj;
}