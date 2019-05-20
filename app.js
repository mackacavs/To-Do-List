const cachedDOM = {
    deleteBtn: document.querySelector(".fa-times"),
    submitBtn: document.getElementById("button"),
    taskInput: document.getElementById("task")
}

const init = () => {
    cachedDOM.submitBtn.addEventListener("click", addTask);
}

const addTask = (e) => {

    let enteredValue = cachedDOM.taskInput.value
    if (!enteredValue) {

        var newEl = document.createElement('p');
        newEl.classList.add("warning");
        newEl.textContent = 'Please enter a task!';
        var ref = document.querySelector('.mb-3');

        ref.parentNode.insertBefore(newEl, ref.nextSibling);

        setTimeout(removeWarning, 700);

    } else {
        const UITask = `<div class="d-flex offset-md-4 mb-1">
            <div class="bg-light col-md-5 text-left">${enteredValue}</div>
            <div class="bg-light col-md-1 text-right"><i class="fas fa-times"></i></div>
            </div>`;
        const containerDiv = document.querySelector(".container");
        containerDiv.insertAdjacentHTML("beforeend", UITask);
    }

    clearFields();
    e.preventDefault();
}

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-times")) {
        e.target.parentElement.parentElement.remove();
    }
});

const clearFields = () => {
    cachedDOM.taskInput.value = "";
};

const removeWarning = () => {
    const removeEl = document.querySelector(".warning");
    removeEl.remove();
};

init();

