
var today = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("task-label").innerHTML +=
`
${weekday[today.getDay()] + "," + today.getMonth() + " "+ month[today.getDate()]}
`;

var btn = document.getElementById("btn");
btn.onclick = function () {

    if(document.getElementById("task").value != ""){
    document.getElementById("taskList").innerHTML +=
        `<div class="row task-div">
            
               <li class= "col s8">
                  ${document.getElementById("task").value}
               </li>
            
           
                <button class="delete">
                    DELETE
                </button>

        </div>`;
        document.getElementById("task").value = "";
    const btn = document.querySelectorAll(".delete");
    for (i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            this.parentNode.remove();
        };
    }
  }
  else{
      alert("Please Enter A Task TODO !");
  }
};



