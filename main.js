window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    const task_el = document.createElement("div");
    task_el.classList.add("task"); //taskdiv

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content"); //content(child)div

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el); //child of content

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions"); //actiondiv(have the css style of actions)

    const task_edit_el = document.createElement("button"); // edit button
    task_edit_el.classList.add("edit"); //css of edit
    task_edit_el.innerText = "Edit"; //inner text of the button

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete"; //delete button

    task_actions_el.appendChild(task_edit_el); //editing task btn
    task_actions_el.appendChild(task_delete_el); //deleting task btn

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", (e) => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save"; //changes to save
        task_input_el.removeAttribute("readonly"); //can edit the text
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly"); //back to readonly ehrn saved
      }
    });

    task_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(task_el); //when click it removes the task(task_el)
    });
  });
});
