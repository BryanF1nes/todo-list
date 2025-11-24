export const UI = (() => {
    const el = {
        mainContainer: () => document.querySelector('.main-content'),
        projectButton: () => document.getElementById('project-button'),
        projectModal: () => document.querySelector('.project-modal'),
        projectForm: () => document.getElementById('project-form'),
        projectContainer: () => document.querySelector('.project-container'),
        projectTitle: () => document.querySelector('.project-title'),
        todoContainer: () => document.querySelector('.todos'),
        todoModal: () => document.querySelector('.todo-modal'),
        todoForm: () => document.querySelector('.todo-form'),
        editTodoModal: () => document.querySelector('.edit-todo-modal'),
        editTodoForm: () => document.querySelector('.edit-todo-form'),
        addTask: () => document.querySelector('.add-task'),
        closeButtonAdd: () => document.querySelector('.todo-modal .close'),
        closeButtonEdit: () => document.querySelector('.edit-todo-modal .close'),
        dashboardButton: () => document.querySelector('.button'),
        removeProjectButton: () => document.querySelector('.remove-project'),
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
        calender.className = "fa-solid fa-calendar-days";
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
        const parent = el.todoContainer();
        clear(parent);

        projects.todos.forEach((todo) => {
            parent.appendChild(todoItem(todo));
        });
    };

    const renderProjectTitle = (projects) => {
        const projectTitle = el.projectTitle();
        const firstChild = projectTitle.firstChild;
        const title = document.querySelector('.title');

        projectTitle.id = projects.id;
        title.textContent = projects.title;

        projectTitle.insertBefore(title, firstChild);
    }

    const showElement = (el) => {
        el.classList.remove('hidden');
    };

    const hideElement = (el) => {
        el.classList.add('hidden');
    };

    return { el, renderProjects, renderTodos, showElement, hideElement, renderProjectTitle }
})();
