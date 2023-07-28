const donate=document.querySelector("button")
const donatectn=document.querySelector("form ")
const donatebtn=document.querySelector("form button")
const donateinput=document.querySelector("form input")
donate.addEventListener('click',()=>{
    if( donate.classList.contains('hide')!==true){
        donate.innerText="cancel";
        
        donate.style="background-Color: #000;border-color: #000;";
        donate.classList.add('hide');
        donatectn.style="display:block";
        
        donatebtn.addEventListener('click',()=>{
            
            alert(`Thank you for donating ₹ ${donateinput.value} ` );
            
        })
        
       
        
    }
    else{
        
        donate.innerText="support";
        donate.style="background-Color:#22538c;border-color: #22538c;";
        donatectn.style="display:hidden";
        donate.classList.remove('hide');
        // donatectn.addEventListener('click');
       
    }
    
})