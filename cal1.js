function dis(val)
         {
             document.getElementById("result").value+=val;
         }
 function clr()
         {
             document.getElementById("result").value='';
         }
function solve()
         {
             let x = document.getElementById("result").value; 
             document.getElementById("result").value = eval(x);
        
         }



