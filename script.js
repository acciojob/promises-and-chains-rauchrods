//your JS code here. If required.
let btnobj = document.querySelector("#btn");

btnobj.addEventListener("click", execute);

function execute(e) {
 
    promisevar.then((result) => {
        alert(result);
    }).catch((err) => {
        alert(err);
    });
  
}


let promisevar = new Promise((resolve, reject) => {

    setTimeout(() => {
        let ageval = document.querySelector("#age").value;
        let name = document.querySelector("#name").value;
        if (ageval < 18) {
            reject(`Oh sorry ${name}. You aren't old enough.`);
        }
        else if (ageval>=18){
            resolve(`Welcome, ${name}. You can vote.`);
        }
    }, 4000);
});
