//your JS code here. If required.
let btnobj = document.querySelector("#btn");
let ageobj = document.querySelector("#age");
let nameobj = document.querySelector("#name");
btnobj.addEventListener("click", execute);

function execute() {
 
    promisevar.then((result) => {
        alert(result);
    }).catch((err) => {
        alert(err);
    });
  
}


let promisevar = new Promise((resolve, reject) => {

    setTimeout(() => {
        let ageval = ageobj.value;
        let name = nameobj.value;
        if (ageval < 18) {
            reject(`Oh sorry ${name}. You aren't old enough.`);
        }
        else if (ageval>=18){
            resolve(`Welcome, ${name}. You can vote.`);
        }
    }, 4000);
});

