var listContainer = document.getElementById('listContainer');

function putTask() {
    var inputElement = document.getElementById('input-box');
    var inputValue = inputElement.value;
    
    // Check if the input is not empty
    if (inputValue.trim() !== '') {
        // Create a new list item
        var listItem = document.createElement('li');
        listItem.textContent = inputValue;
        
        // Append the new item to the list
        
        listContainer.appendChild(listItem);
        let span = document.createElement("span");
        span.className = "del"
        span.innerHTML = "\u00d7"; 
        listItem.appendChild(span);       
        // Clear the input field
        inputElement.value = '';
    } else {
        alert('Please enter some text.');
    }
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("ticked");
    } else if (e.target.className === "del"){
        e.target.parentElement.remove();
    }
}, false);






