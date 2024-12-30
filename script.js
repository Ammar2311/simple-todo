

const add=document.querySelector("#btn");

add.addEventListener("click",function(){  // in clicking on button

let input=document.querySelector("#txtfield");
let task_value=input.value;     //copy the value from input field
 input.value="";   

//create element and assign value and classname  
   let content=document.createElement('span');      
       content.setAttribute("class","task");                            
       content.textContent=task_value;            
            
       let btn=document.createElement('button');
       btn.innerHTML="&#10540;";


       let task=document.createElement('div');

       let cont =document.querySelector(".container");  //targting parent element

        cont.appendChild(task);
   task.appendChild(content);    //append the created element in Dom

   task.appendChild(btn);
//----------------------------------------------
    btn.addEventListener("click",function(){ 
   //when you click delete button you will remove list ele
                         
      cont.removeChild(task);

     });



});











// // Add a red when clicking on a task item
// let tasks=document.querySelectorAll(".task");
// console.log(tasks);
// var task_arr = Array.from(tasks);
// console.log(task_arr);


//   for (let i = 0 ; i < task_arr.length; i++) {
//     task_arr.addEventListener("click",function(){

//         task_arr[i].style.backgroundColor="red";
//   });

//  }


 //bug i have to long time with them

 //'addeventlistener not defined function'
 //cause i have array of element from getelementsbytagname
 //so to fix task[0]
 //or for loop











 //---------------------------------------------------
//  function createParagraph() {
//   const para = document.createElement("p");
//   para.textContent = "You clicked the button!";
//   document.body.appendChild(para);
// }

// const buttons = document.querySelectorAll("button");

// for (const button of buttons) {
//   button.addEventListener("click", createParagraph);
// }
