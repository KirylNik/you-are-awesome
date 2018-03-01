
const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (propertyName) => {};
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
const asyncIncrementor = () => {};
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
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

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