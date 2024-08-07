let first_name=document.getElementById('user_interface_firstOne');
    
let last_name=document.getElementById('user_interface_firstTwo');

let university=document.getElementById("user_interface_secondOne");
    
let highSchool=document.getElementById("user_interface_secondTwo");
    
let address=document.getElementById("user_interface_thirdOne");
    
let addressTwo=document.getElementById("user_interface_thirdTwo");
    
let amount=document.getElementById("user_interface_fourOne");
    
let item=document.getElementById("user_interface_fourTwo");
    
let display_result = document.getElementById('display_result');


const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click',printEverything);

function printEverything(){
        const total_value= first_name.value +' ' + last_name.value + ' ' + university.value +' ' + highSchool.value + ' '  + address.value + ' '  +addressTwo.value + ' ' + amount.value + ' ' + item.value  +"";
        let sub_box = total_value;
        display_result.innerText = sub_box; //left side e 
        return sub_box; 
    }