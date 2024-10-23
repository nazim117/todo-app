# TODO List App

A simple and responsive TODO list application built with **React** and **Material-UI**, utilizing **Context** and **Hooks** for global state management. This app allows users to add, edit, complete, and delete tasks, with all items stored in a global state without persistence after a refresh.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Features

- **Add Tasks**: Users can add new tasks to their TODO list.
- **Edit Tasks**: Existing tasks can be edited inline.
- **Complete Tasks**: Mark tasks as complete; completed tasks are displayed with a strikethrough.
- **Delete Tasks**: Remove tasks from the list.
- **Global State Management**: Uses React Context and Hooks to manage state globally.
- **No Persistence**: Tasks do not persist after a page refresh.
- **ES6 Methods**: Utilizes modern JavaScript methods like `Array.filter` and `Array.map` for data manipulation.
- **Multiple Pages**: Includes multiple pages with placeholder content.
- **Responsive Design**: Mobile-friendly interface with a collapsible menu.
- **Material-UI Components**: Implements Material-UI components for a sleek and modern UI.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/todo-list-app.git
```
Navigate to the project directory:
```bash
cd todo-list-app
```
Install the dependencies:

```bash
npm install
```
Running the App
Start the development server:

```bash
npm start
```
The app will automatically open in your default browser at http://localhost:3000. If it doesn't, you can manually navigate to that URL.

### Usage
Adding a Task:

Enter the task description in the "New Todo" input field.
Click the Add button to add the task to the list.
Editing a Task:

Click the Edit icon (✏️) next to the task.
Modify the task description in the input that appears.
Click the Save icon (💾) to save changes.
Completing a Task:

Click the Checkbox next to the task to mark it as complete.
The task text will appear with a strikethrough.
Deleting a Task:

Click the Delete icon (🗑️) to remove the task from the list.
Navigating Between Pages:

Use the sidebar menu on the left to navigate between the TODO list and other pages.
On mobile devices, click the Menu icon (☰) to open the navigation drawer.
Code Structure
src/
App.js: Main application component that includes routing and layout.
GlobalState.js: Manages global state using Context and Hooks.
TodoComponent.js: Contains the TODO list functionality.
components/
PageOne.js: Placeholder page with lorem ipsum content.
PageTwo.js: Another placeholder page.
App.css: Custom styles for the application.
Technologies Used
React: JavaScript library for building user interfaces.
Material-UI: React components for faster and easier web development.
React Router: Declarative routing for React applications.
ES6 JavaScript: Modern JavaScript features for cleaner code.
UUID: For generating unique IDs for tasks.
Responsive Design
Mobile-Friendly: The app is responsive and adjusts to different screen sizes.
Temporary Drawer on Mobile: On screens smaller than 600px, the sidebar becomes a temporary drawer.
Menu Icon: A menu icon appears on mobile devices to toggle the navigation drawer.
Contributing
Contributions are welcome! Here's how you can help:

Fork the repository.

Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/YourFeatureName
```
Commit your changes:

```bash
git commit -m 'Add some feature'
```
Push to the branch:
```bash
git push origin feature/YourFeatureName
```
Enjoy using the TODO List App! If you have any questions or feedback, feel free to reach out.