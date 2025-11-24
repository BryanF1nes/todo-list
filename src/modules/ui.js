export const UI = (() => {
    const el = {
        projectButton: () => document.getElementById('project-button'),
        projectModal: () => document.querySelector('.project-modal'),
        projectForm: () => document.getElementById('project-form'),
        projectContainer: () => document.querySelector('.project-container'),
        projectTitle: () => document.querySelector('.project-title'),
        todoContainer: () => document.querySelector('.todos'),
        todoModal: () => document.querySelector('.todo-modal'),
        todoForm: () => document.querySelector('.todo-form'),
        addTask: () => document.querySelector('.add-task'),
        closeButton: () => document.querySelector('.close'),
    };

    const clear = (node) => { node.innerHTML = ``; };

    const renderProjects = (projects) => {
        const parent = el.projectContainer();
        clear(parent);
        projects.forEach((project) => {
            const button = document.createElement('button');
            const hashtag = document.createElement('i');
            const span = document.createElement('span');
            button.className = "button";
            button.dataset.projectId = project.id;
            hashtag.className = "fa-solid fa-hashtag";
            span.textContent = project.title;

            button.append(hashtag, span);
            parent.appendChild(button);
        })
    };

    const todoItem = (todo) => {
        const todoItem = document.createElement('div');
        const todoInfo = document.createElement('div');
        const todoTitle = document.createElement('h1');
        const todoPriority = document.createElement('div');
        const calender = document.createElement('i');
        const todoDate = document.createElement('span');

        todoItem.className = "todo-item";
        todoItem.dataset.todoId = todo.id;

        todoInfo.className = "todo-info";
        todoTitle.textContent = todo.title;

        todoPriority.className = `${todo.priority}`;
        calender.className = "fa-solid fa-calender-days";
        todoDate.textContent = todo.dueDate;

        todoPriority.append(calender, todoDate);
        todoInfo.append(todoTitle, todoPriority);

        const todoActions = document.createElement('div');
        const edit = document.createElement('div');
        const editIcon = document.createElement('i');
        const editSpan = document.createElement('span');
        todoActions.className = "todo-actions";

        edit.className = "edit";
        editIcon.className = "fa-solid fa-pen-to-square";
        editSpan.textContent = "Edit";

        edit.append(editIcon, editSpan);

        const remove = document.createElement('div');
        const removeIcon = document.createElement('i');
        const removeSpan = document.createElement('span');

        remove.className = "remove";
        removeIcon.className = "fa-regular fa-trash-can";
        removeSpan.textContent = "Remove";

        remove.append(removeIcon, removeSpan);

        todoActions.append(edit, remove);
        todoItem.append(todoInfo, todoActions);
        return todoItem;
    };

    const renderTodos = (projects) => {
        const projectTitle = el.projectTitle();
        const title = document.createElement('h1');
        const button = document.createElement('button');
        const plus = document.createElement('i');
        const span = document.createElement('span');
        const parent = el.todoContainer();

        projectTitle.id = projects.id;
        title.textContent = projects.title;
        button.className = "add-task";
        plus.className = "fa-solid fa-circle-plus";
        span.textContent = "Add Task";

        button.append(plus, span);
        projectTitle.append(title, button);

        clear(parent);
        projects.todos.forEach((todo) => {
            parent.appendChild(todoItem(todo));
        });
    };

    const showTodoModal = () => {
        el.todoModal().classList.remove('hidden');
    };

    const hideTodoModal = () => {
        el.todoModal().classList.add('hidden');
    };

    const showProjectForm = () => {
        el.projectModal().classList.remove('hidden');
    };

    const hideProjectForm = () => {
        el.projectModal().classList.add('hidden');
    };

    return { el, renderProjects, renderTodos, showTodoModal, hideTodoModal, showProjectForm, hideProjectForm }
})();
