    var inputkey=document.getElementById("input")
    var ul=document.getElementById("list-container")
    function add()
    {
      var list=document.createElement("li")
      list.innerHTML=inputkey.value+"<button onclick='cancel(event)'>DELETE</button>";
      ul.append(list)
    }
    
    function cancel(event)
    {
      event.target.parentElement.remove()
    }
    
