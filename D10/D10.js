// Activity 1: Basic Event Handling
// Task 1
document.getElementById('task1-btn').addEventListener('click', function() {
    document.getElementById('task1-para').textContent = 'Text has been changed!';
});

// Task 2
document.getElementById('task2-img').addEventListener('dblclick', function() {
    this.classList.toggle('hidden');
});

// Activity 2: Mouse Events
// Task 3
document.getElementById('task3-div').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

// Task 4
document.getElementById('task4-div').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'red';
});

// Activity 3: Keyboard Events
// Task 5
document.getElementById('task5-input').addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Task 6
document.getElementById('task6-input').addEventListener('keyup', function() {
    document.getElementById('task6-para').textContent = this.value;
});

// Activity 4: Form Events
// Task 7
document.getElementById('task7-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formProps = Object.fromEntries(formData);
    console.log('Form submitted with data:', formProps);
});

// Task 8
document.getElementById('task8-select').addEventListener('change', function() {
    document.getElementById('task8-para').textContent = this.value;
});

// Activity 5: Event Delegation
// Task 9
document.getElementById('task9-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

// Task 10
document.getElementById('task10-parent').addEventListener('click', function(event) {
    if (event.target.classList.contains('task10-child')) {
        console.log(`Clicked child element: ${event.target.textContent}`);
    }
});