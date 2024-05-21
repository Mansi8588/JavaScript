//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    // var c=400  
    
}

// when we check scop in browser it is different from that we check here

// console.log(a);
// console.log(b);
// console.log(c);  // give 400 as c is var



// nested scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // the scope o website is in function two only

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // error
}

// console.log(username);  // error




// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // no error

function addone(num){
    return num + 1
}



addTwo(5)  // error as return is host
const addTwo = function(num){    // as a expression
    return num + 2
}