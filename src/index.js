
const createEnumerableProperty = () => {};
const createNotEnumerableProperty = function createEnumerableProperty(propertyName) {
    let sym = Symbol(propertyName);

    return sym
};
const createProtoMagicObject = () => {};
const incrementor = function incrementor() {
    incrementor.toString =  function() { return incrementor.temp };
    if (incrementor.temp) {
        incrementor.temp++
    } else {
        incrementor.temp = 0;
        incrementor.temp++;
    }
    return (incrementor)
}
const asyncIncrementor = () => {
    incrementor.toString =  function() { return incrementor.temp };
    if (incrementor.temp) {
        incrementor.temp++
    } else {
        incrementor.temp = 0;
        incrementor.temp++;
    }
    return (incrementor)

};
const createIncrementer = function* createIncrementer() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    yield 8;
    yield 9;
    yield 10;
    return 11;
}

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = (obj) => {
    if (JSON.stringify(obj).length < 3000) {return 400} else if (JSON.stringify(obj).length > 5000) {return 700}
};
const createSerializedObject = function createSerializedObject() {
    return null;
}
const toBuffer = () => {};
const sortByProto = (arr) => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;