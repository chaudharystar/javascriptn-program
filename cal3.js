
let array=[];
let symbol=document.querySelectorAll('.numbers');
for(const item of symbol)
{
    item.addEventListener('click',function(){
    document.getElementById('result').value+=item.innerHTML;
        if(array.length==0)
            array[0]=item.innerHTML;
        else if(item.innerHTML==='+'||item.innerHTML==='-'||item.innerHTML==='*'||item.innerHTML==='/'||item.innerHTML==='%')
            array.push(item.innerHTML);
        else {
            if(array[array.length-1]=='+'||array[array.length-1]=='-'||array[array.length-1]=='*'||array[array.length-1]=='/'||array[array.length-1]=='%')
                  array.push(item.innerHTML);     

            else
                array[array.length-1]+=item.innerHTML;
        }
    
    
    console.log(array);

    })
}
// let digits=document.querySelectorAll('.numbers');
// for(const digit of digits)
// {
//     digit.addEventListener('click',function(){
//     document.getElementById('result').value+=digit.innerHTML;
//     display+=digit.innerHTML;
//     console.log(display);


//     })
// }

function calculator() {
    
   
    for(let i=0;i<array.length;i++){
        // console.log(array[i]);

        if(array[i]=="+"){
            let a=array[i-1];
            let b=array[i+1];
            let res=add(a,b);
            document.getElementById('result').value=res;
            
            array[i+1]=res.toString();
            
            console.log(array);
        }
        else if(array[i]=="-"){
            let a=array[i-1];
            let b=array[i+1];
            let res=sub(a,b);
            document.getElementById('result').value=res;
            array[i+1]=res.toString();
            console.log(array);
        }
        else if(array[i]=="*"){
            let a=array[i-1];
            let b=array[i+1];
            let res=mul(a,b);
            document.getElementById('result').value=res;
            array[i+1]=res.toString();
            console.log(array);
        }
        else if(array[i]=="/"){
            let a=array[i-1];
            let b=array[i+1];
            let res=div(a,b);
            document.getElementById('result').value=res;
            array[i+1]=res.toString();
            console.log(array);
        }
        else if(array[i]=="%"){
            let a=array[i-1];
            let b=array[i+1];
            let res=mod(a,b);
            document.getElementById('result').value=res;
            array[i+1]=res.toString();
            console.log(array);
        }

    }
}
function clearAll() {
    array=[];

    document.getElementById('result').value='';
}

// function remove() {
//     // console.log(display.length);
//     // console.log(display);
//     display=display.substring(0,display.length-1);
//     // console.log(display.length);
//     // console.log(display);
//     document.getElementById('result').value=display;
    

// }

function add(a,b) {
    return Number(a)+Number(b);
}
function sub(a,b) {
    return Number(a)-Number(b);
}
function mul(a,b) {
    return Number(a)*Number(b);
}
function div(a,b) {
    return Number(a)/Number(b);
}
function mod(a,b) {
    return Number(a)%Number(b);
}






