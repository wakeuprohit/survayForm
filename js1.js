window.onload
const button=document.getElementById('gello');
     button.addEventListener("click" ,addData)
   //   button.addEventListener("click" ,addData.reset());
      //   get value from input
       function addData(){
    const name=document.getElementById('name').value;
    const number=document.getElementById('number').value;
    const color=document.getElementById('color').value;
    const feedback=document.getElementsByClassName('hello').value;
         var table=document.getElementById('responsTable');
         var NewRow=table.insertRow(-1);
         NewRow.insertCell(0).innerText=name;
         NewRow.insertCell(1).innerText=number;
         NewRow.insertCell(2).innerText=color;
        //  NewRow.insertCell(3).innerText=feedback;
        NewRow.insertCell(3).innerText=feedback;
       }

       