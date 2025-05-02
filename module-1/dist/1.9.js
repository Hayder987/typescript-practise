"use strict";
{
    const user1 = {
        name: "hayder",
        age: 30
    };
    const user2 = {
        cgpa: 3.64,
        age: 33,
        isMarried: false,
    };
    const user = Object.assign(Object.assign({}, user1), user2);
    console.log(user);
}
