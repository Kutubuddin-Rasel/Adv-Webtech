//Asynchronous Fucntion
console.log("Start");
function a() {
    setTimeout(() => {
        console.log("Hello");
    }, 2000);
}
a()
console.log("End");

// Promise
console.log("Start");
const b = new Promise((okay, notOkay) => {
    let success = true;
    if (success) { okay("Done") }
    else { notOkay("Not Done") }
})
b
    .then((msg) => console.log(msg))
    .catch((error) => console.log(error))
console.log("End");

//Await
console.log("Start");
async function c() {
    await new Promise(() => {
        console.log("Hello");
    })
}
c()
console.log("End");
