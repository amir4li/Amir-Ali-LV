const funcs = require("./func");


// Promise
test("User fetched name should be Leanne Graham", ()=> {
    expect.assertions(1);
    return funcs.fetchUserPromise()
    .then(data => {
        expect(data.name).toEqual("Leanne Graham");
    })
})


// Async Await
test("User fetched name should be Leanne Graham", async ()=> {
    expect.assertions(1);
    const data = await funcs.fetchUserAsyncAwait();
    expect(data.name).toEqual("Leanne Graham");
});


