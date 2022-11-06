"use strict";
function addId(obj) {
    const randomId = Math.random().toString();
    return Object.assign({ randomId }, obj);
}
const student = {
    firstName: "Wasim",
    lastName: "Fatair",
};
console.log(addId(student));
