    var inputkey=document.getElementById("input")
    var ul=document.getElementById("list-container")
    function add()
    {
      var list=document.createElement("li")
      list.style.display="inline-block";
      list.style.backgroundColor="cadetblue";
      list.style.paddingLeft="10px";
      list.style.borderRadius="10px";
      list.style.margin="10px";
      list.innerHTML=inputkey.value+"<button onclick='cancel(event)'>DELETE</button>";
      ul.append(list)
      inputkey.value='';
    }
    
    function cancel(event)
    {
      event.target.parentElement.remove()
    }
    
