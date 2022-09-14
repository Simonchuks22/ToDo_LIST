window.addEventListener('load', () => {
    const addform = document.forms['form-task-1'];
    const addinput = document.querySelector('#first-task-1');
    const listed_el = document.querySelector('#tasks')

    addform.addEventListener('submit', (s) => {
        s.preventDefault();
        
        const tasked = addinput.value;
        if(!tasked) {
            alert('oboy! fiil that task ASAP');
            return;
        } 

        const tasked_el = document.createElement("div");
        tasked_el.classList.add("tasked");

        const tasked_content_el = document.createElement("div");
        tasked_content_el.classList.add("content");
        // tasked_content_el.innerText = tasked;

        tasked_el.appendChild(tasked_content_el);


         const tasked_addinput_el = document.createElement("input");
         tasked_addinput_el.classList.add("text");
         tasked_addinput_el.type = "text";
         tasked_addinput_el.value = tasked;
         tasked_addinput_el.setAttribute("readonly", "readonly");

         tasked_content_el.appendChild(tasked_addinput_el);

         const tasked_btnactions_el = document.createElement("div");
         tasked_btnactions_el.classList.add("btn-actions");


         const tasked_delete_el = document.createElement("button");
         tasked_delete_el.classList.add("delete");
         tasked_delete_el.innerHTML = "Delete";

         const tasked_edit_el = document.createElement("button");
         tasked_edit_el.classList.add("edit");
         tasked_edit_el.innerHTML = "Edit";

         tasked_btnactions_el.appendChild(tasked_edit_el);
         tasked_btnactions_el.appendChild(tasked_delete_el);

         tasked_el.appendChild(tasked_btnactions_el);

         listed_el.appendChild(tasked_el);


        listed_el.appendChild(tasked_el);

        addinput.value = "";

        tasked_edit_el.addEventListener('click', () => {
            if (tasked_edit_el.innerText.toLowerCase() == "edit") {
                tasked_addinput_el.removeAttribute("readonly");
                tasked_addinput_el.focus();
                tasked_edit_el.innerText = "save";
            } else {
            tasked_addinput_el.setAttribute("readonly", "readonly");
            tasked_edit_el.innerHTML = "Edit";

            }

        })

    tasked_delete_el.addEventListener('click',() => {
        listed_el.removeChild(tasked_el);
    });

    })
    

})