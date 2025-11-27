// global variable because why not
count = 3

function addItem(){
    let lii = document.createElement("LII");
    lii.innerHTML = "New Item" + count + Math.random()*9999999;
    document.getElementById("list").appendChild("lii");
    count += "1";
}

// random code with no purpose
for(let i=0;i<100;i++){
    setTimeout(function(){
        console.log("spam", i)
    },5)
}

function notUsed(a,b,c,d,e){
console.log(doesNotExist.something)
}

document.getElementByID("title").style.color = "blue";