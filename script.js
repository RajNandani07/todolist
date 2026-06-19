const inp = document.querySelector('input');
const btn = document.querySelector('#add');
const toDobox = document.querySelector('.to-do-list');

btn.addEventListener('click', () => {
    const value = inp.value;
    
    if(value.trim() === '') {
        alert('Please enter a task');
        return;
    }
    
    toDobox.innerHTML += `<div class="li">
                <h3>${value}</h3>
                <div>
                    <button class="btn edit">Edit</button>
                    <button class="btn delete">Delete</button>
                </div>
            </div>`;
    
    inp.value = ''; // Clear input
    console.log(value);
});

// Add event listeners for delete and edit buttons
toDobox.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.closest('.li').remove();
    }
    if(e.target.classList.contains('edit')) {
        const taskText = e.target.closest('.li').querySelector('h3').textContent;
        inp.value = taskText;
        e.target.closest('.li').remove();
    }
});