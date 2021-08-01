
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
};

const employee= {
    name:'Sam',
    streetAddress:'11 Broadway'
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key]=value;
    return obj;
};

const destroytestThree=destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Jon');

function deleteFromEmployeeByKey(obj,key,value) {
    return Object.assign({}, obj, {[key]: value});
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};
