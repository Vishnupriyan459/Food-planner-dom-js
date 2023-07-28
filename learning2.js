
const formEL=document.forms.feedbacks;

const evln=(event)=>{

    event.preventDefault();
    const formdata=new FormData(formEL);
    alert("Thank you for your feedback!")    
    
}

formEL.addEventListener('submit',evln)
