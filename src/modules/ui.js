export const UI = (() => {
    const el = {
        projectButton: () => document.getElementById('project-button'),
        projectModal: () => document.querySelector('.project-modal'),
        projectForm: () => document.getElementById('project-form'),
        projectContainer: () => document.querySelector('.project-container'),
        todoContainer: () => document.querySelector('.todos'),
        todoForm: () => document.querySelector('.todo-modal'),
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

    const showTodoForm = () => {
        el.todoForm().classList.remove('hidden');
    };

    const hideTodoForm = () => {
        el.todoForm().classList.add('hidden');
    };

    const showProjectForm = () => {
        console.log('hello');
        el.projectModal().classList.remove('hidden');
    };

    const hideProjectForm = () => {
        el.projectModal().classList.add('hidden');
    };



    return { el, renderProjects, renderTodos, showTodoForm, hideTodoForm, showProjectForm, hideProjectForm }
})();
