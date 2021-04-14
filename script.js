/**we need to grap the guess button */
let guess= document.querySelector(".guess-btn");
let random= Math.floor(Math.random()*10+1);


let values=[];
/**ADD EVENT LISTENER */
guess.addEventListener('click',(e)=>{

    let value= parseInt(document.getElementById("rand").value);
    let result= document.getElementById("result");
  

    if(value>1 && value<10){
    if(value==random){
        result.innerText="Great job you guessed it right! \n New Number generated Try TO GUESS IT ";
        random= Math.floor(Math.random()*10+1);
        values=[];
    
    }
    else{
    
        
         
        values.push(value);
        result.innerText=`Try again  \n  Values you tried : ${values}` ;
        
       
        
    }
}
   
    else {
        if(value>=10){
            if(value==10){
            result.innerText=`${value}=10 invalid input`;}
            else if(value>10)
            result.innerText=`${value}>10 invalid input`;
        }
        if(value<=1){
            if(value==1){
                result.innerText=`${value}=1 invalid input`;}
                else if(value<1)
                result.innerText=`${value}<1 invalid input`;
        }
        
    }
      /*  if(e.target.value>=1 && e.target.value<=100 ){
            if(x==e.target.value){
            result.innerText="Great Job you guessed it right";
              
         
           }
           else{
           
            result.innerText="Try again";
        
           }}
           else if (e.target.value==""){
            result.innerText= "Enter a number Greater than 1 and less than 100"
          
           }
           else{
            result.innerText="Number is less than 1 or greater than 10";
        
           }
           let var1 = random1();
           console.log(var1);
*/


})
