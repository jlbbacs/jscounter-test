let counter = 0;





document.getElementById("addBtn").onclick = function(){
    counter = counter + 1
    document.getElementById('label').innerHTML = counter  
    if(counter>0){
        document.body.style.color="green"
   } if(counter<0){
    document.body.style.color="red"
   }
   if(counter==0){
    document.body.style.color="black"
   }
   
   
    
}
document.getElementById("subBtn").onclick = function(){
    counter = counter  - 1
    document.getElementById('label').innerHTML = counter  
    if(counter>0){
        document.body.style.color="green"
   } if(counter<0){
    document.body.style.color="red"
   }
   if(counter==0){
    document.body.style.color="black"
   }
   
   
}
document.getElementById("resetBtn").onclick = function(){
    counter = counter = 0
    document.getElementById('label').innerHTML = counter  
    document.body.style.color="black"
}