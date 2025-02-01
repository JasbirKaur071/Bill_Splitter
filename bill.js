function calcsplit(){
    let totalmnt=parseFloat(document.getElementById("first").value);
    let n= parseInt(document.getElementById("second").value);
    let r= document.getElementById("h");

    //validating
    if(isNaN(totalmnt)|| isNaN(n)|| n<=0){
        r.style.color="red";
        r.innerText="Please enter valid details";
        return;

    }

    //spliting
    let p=totalmnt/n;
    r.style.color="green";
    r.innerText=`${p.toFixed(2)}`;
}