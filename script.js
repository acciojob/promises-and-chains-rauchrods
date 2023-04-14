//your JS code here. If required.
let btnobj = document.querySelector("#btn");
let ageobj = document.querySelector("#age");
let nameobj = document.querySelector("#name");
btnobj.addEventListener("click", (e)=>{
    
    e.preventDefault()

    let promisevar = new Promise((resolve, reject) => {

        setTimeout(() => {
            if (ageobj.value < 18) {
                reject(`Oh sorry ${nameobj.value}. You aren't old enough.`);
            }
            else if (ageobj.value>=18){
                resolve(`Welcome, ${nameobj.value}. You can vote.`);
            }
        }, 4000);
    
    });



    promisevar.then((result) => {
        console.log(promisevar);
        alert(result);
    }).catch((err) => {
        console.log(promisevar);
        alert(err);
    });
    
    console.log(promisevar);
});

