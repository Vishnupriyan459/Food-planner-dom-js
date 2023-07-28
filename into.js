let foodinput=document.getElementById("food-input");
let inputbtn= document.getElementById("input-btn"); 
var foodcontainer= document.getElementById("food-container");
var nolist=document.getElementById("nolist")
var labellist=document.getElementById("labellist");
const localStoragekey="foodItems";
document.addEventListener("DOMContentLoaded",()=>{
  //localStorage fetch,draw ui
  const fetchfoodItems=[...JSON.parse(localStorage.getItem(localStoragekey))];
  fetchfoodItems.forEach(item =>{
    
    //create
  let newFoodItemEl = document.createElement("li");
  let div = document.createElement("div"); 
  let divBtn = document.createElement("div");

    
  //assign
  div.textContent = item.foodItem;
  newFoodItemEl.className = "food-item";
  newFoodItemEl.append(div, divBtn); 
  divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");
  divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;

//   console.log(newFoodItemEl);

  //append
  
  foodcontainer.append(newFoodItemEl);
  
  refreshui()
  })
  
})
const handler=()=>{
  //create
  let newFoodItemEl = document.createElement("li");
  let div = document.createElement("div"); 
  let divBtn = document.createElement("div");

    
  //assign
  div.textContent = foodinput.value;
  newFoodItemEl.className = "food-item";
  newFoodItemEl.append(div, divBtn); 
  divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");
  divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;

//   console.log(newFoodItemEl);

  //append
  
  foodcontainer.append(newFoodItemEl);
  //local storage
  localStorage.setItem(localStoragekey,JSON.stringify([...JSON.parse(localStorage.getItem(localStoragekey)|| "[]"),
  {foodItem: foodinput.value},]));
  // resetting the inputFood value
  foodinput.value = "";
  refreshui();
  
}
inputbtn.addEventListener('click',handler)



//inputbtn.addEventListener('click',handleinputfood);
foodinput.addEventListener('keyup',(event)=>{
    if(event.key === 'Enter'){
        handler();
    }
    else if(event.key==='KeyZ' && (event.ctrlKey||event.metaKey)) {
        foodinput.value="";
    }
});
//remove btn
function removeFoodItem(event){
    let removelist= event.target.parentNode.parentNode
    removelist.remove();
    refreshui();
    fetchfoodItems=[...JSON.parse(localStorage.getItem(localStoragekey))];
    fetchfoodItems.forEach((item)=>{
      if(item.foodItem===removelist.innerText){
        fetchfoodItems.splice(fetchfoodItems.indexOf(item),1)
      }
    })
    localStorage.setItem(localStoragekey,JSON.stringify(fetchfoodItems))
}
//refreshui
function refreshui(){
 
  foodcontainer.childElementCount>0?((nolist.hidden=true),
  (labellist.innerText=`you have ${foodcontainer.childElementCount} food items`)):((nolist.hidden=false),
  (labellist.innerText=""));

}
