
    function addMoreOption(optionList){
        var p = document.getElementById(optionList);
        var newdiv = document.createElement("div");
        newdiv.innerHTML = "<input type='text' name='options' class='form-control' placeholder='Add Your Option!' required>";
        p.appendChild(newdiv);
    };
    
    
