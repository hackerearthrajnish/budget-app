var salary=0;
var expenses=0;
function showtotal()
{
    let a=document.getElementById('budget').value;
    if(a=="")
    {
        document.getElementById('hide').style.display="block";
    }
    else{
        document.getElementById('hide').style.display="none";
        salary=parseInt(a);
        document.getElementById('total').innerHTML=salary;
        document.getElementById('budget').value='';
        
        document.getElementById('sav').innerHTML=(salary-expenses);
    }

}

function showTotalExpenses()
{
    
    expenses+=parseInt( document.getElementById('expenses').value);
    document.getElementById('Expense').innerHTML=expenses;
    
    document.getElementById('sav').innerHTML=(salary-expenses);

}
function modifyElement(element, edit=false){
    let parent=element.parentElement;
    
    let amount=parent.querySelector(".amount").innerText;
  
    if(edit)
    {

        document.getElementById('expenses_type').value=parent.querySelector(".product").innerText;
        document.getElementById('expenses').value=amount;
    }
    amount=parseInt(amount);
    let a=parseInt(document.getElementById('Expense').innerText);
    console.log(a);
    expenses=(a-amount);
    document.getElementById('Expense').innerHTML=(a-amount);
    let b=parseInt(document.getElementById('sav').innerText);
    document.getElementById('sav').innerHTML=(b+amount);

    parent.remove();

}
function showAll()
{
    
    let a=document.getElementById('expenses').value;
    let b=document.getElementById('expenses_type').value;
    if(a=="" || b=="")
    {
        document.getElementById('hide-ex').style.display="block";
    }
    else{

        let sublistcontent=document.createElement("div");
        sublistcontent.classList.add("ex");
        document.getElementById('items').appendChild(sublistcontent);
        sublistcontent.innerHTML=`<p class="product">${document.getElementById('expenses_type').value}</p><p class="amount">${document.getElementById('expenses').value} </p>`
        document.getElementById('hide-ex').style.display="none";
        //string+=`<div class="ex">  <span>${num}. ${document.getElementById('expenses_type').value}</span><span id="del_expense">${document.getElementById('expenses').value} Rs. </span><i class="bi bi-trash me-3" id="del" onclick="delet(this.id)"></i>  </div>`;
        //h+=40;
        let editbutton=document.createElement("button");
        editbutton.classList.add('edit_btn','edit');
        editbutton.style.fontSize="1em";
        editbutton.addEventListener("click", () => {
            modifyElement(editbutton, true);
          });
          
        sublistcontent.appendChild(editbutton);
        let deletebutton=document.createElement("button");
        deletebutton.classList.add('delete_btn','edit');
        //deletebutton.innerHTML="delete";
        deletebutton.style.fontSize="1em";
        deletebutton.addEventListener("click", () => {
            modifyElement(deletebutton);
          });
        
        
        sublistcontent.appendChild(deletebutton);
        document.getElementById('items').appendChild(sublistcontent);
        document.getElementById('expenses').value='';
        document.getElementById('expenses_type').value='';
        
        
    }
}
function delet()
{
    
    var a=document.getElementById('del').previousSibling.innerHTML;
    console.log(a);
    const arr=a.split(" ");
    let b=parseInt(arr[0]);
   expenses-=b;
   
   document.getElementById('Expense').innerHTML=expenses;
    
}