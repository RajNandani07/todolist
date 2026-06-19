# To-Do List

A simple and interactive to-do list web application built with HTML, CSS, and vanilla JavaScript.

## Features

✅ **Add Tasks** - Enter tasks in the input field and click "Add Task" to create them  
✏️ **Edit Tasks** - Click the Edit button to modify existing tasks  
🗑️ **Delete Tasks** - Remove tasks with the Delete button  
📱 **Responsive Design** - Clean, modern UI with flexbox layout  
⚡ **Real-time Updates** - Instant task management without page refresh  

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Flexbox layout and styling
- **JavaScript (Vanilla)** - Event handling and DOM manipulation

## Project Structure

```
to-dolist/
├── index.html      # Main HTML file
├── style.css       # Styling and layout
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## How to Use

1. **Open the application**
   - Open `index.html` in your web browser

2. **Add a task**
   - Type your task in the input field
   - Click "Add Task" button
   - The task will appear below

3. **Edit a task**
   - Click the "Edit" button on any task
   - Enter the new task text in the prompt
   - The task will be updated

4. **Delete a task**
   - Click the "Delete" button on any task
   - The task will be removed

## Code Overview

### HTML Structure
- Main container with input field and "Add Task" button
- To-do list container that dynamically stores tasks
- Each task has Edit and Delete buttons

### CSS Features
- Flexbox layout for alignment
- 30px gap between input section and task list
- 20px gap between individual tasks
- Color-coded buttons (green for Add, purple for Edit, red for Delete)

### JavaScript Functionality
- Event listeners on the Add button to create tasks
- Event delegation for Edit and Delete actions
- Input validation to prevent empty tasks
- Dynamic HTML generation for new tasks

## Future Improvements

- Local storage to persist tasks on page refresh
- Task completion toggle (checkbox)
- Due date functionality
- Priority levels
- Task categories/tags
- Dark mode toggle

## License

Open source - Feel free to use and modify

---

**Created:** 2026  
**Version:** 1.0
