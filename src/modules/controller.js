import { Projects } from "../classes/ProjectList.js";
import { UI } from "./ui.js";
import { Todo } from "../classes/todo.js";
import { Project } from "../classes/project";

export const Controller = (() => {
    let selected = Projects.projects[0];
    const init = () => {
        render();
        UI.renderProjectTitle(selected);
        bindEvents();
    };

    const render = () => {
        UI.renderProjects(Projects.projects);
        UI.renderTodos(selected);
    }

    const bindEvents = () => {
        UI.el.addTask().addEventListener('click', () => UI.showElement(UI.el.todoModal()));
        UI.el.closeButtonAdd().addEventListener('click', () => UI.hideElement(UI.el.todoModal()));
        UI.el.closeButtonEdit().addEventListener('click', () => UI.hideElement(UI.el.editTodoModal()));
        UI.el.projectButton().addEventListener('click', () => UI.showElement(UI.el.projectModal()));

        UI.el.todoContainer().addEventListener('click', (e) => {
            const todoItem = e.target.closest(".todo-item");
            if (!todoItem) return;

            const todoId = todoItem.dataset.todoId;

            if (e.target.closest(".edit")) {
                handleEdit(todoId);
            }

            if (e.target.closest(".remove")) {
                handleRemove(todoId);
            }
        });

        UI.el.projectContainer().addEventListener('click', (e) => {
            const button = e.target.closest('button[data-project-id]');
            if (!button) return;

            const projectId = button.dataset.projectId;

            const project = Projects.findProject(projectId);
            selected = project;
            UI.renderProjectTitle(selected);
            render();
        });

        UI.el.projectForm().addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(UI.el.projectForm());

            const title = formData.get('title');
            const project = new Project(title);

            Projects.addProject(project);
            UI.hideElement(UI.el.projectModal());
            render();

            e.target.reset();
        });

        UI.el.todoForm().addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(UI.el.todoForm());

            const title = formData.get("title");
            const description = formData.get("description");
            const dueDate = formData.get("dueDate");
            const priority = formData.get("priority");

            const todo = new Todo(title, description, dueDate, priority, selected);
            selected.addTodo(todo);
            e.target.reset();
            UI.hideElement(UI.el.todoModal());
            render();
        });

        UI.el.editTodoForm().addEventListener('submit', (e) => {
            e.preventDefault();

            const form = e.target;
            const todoId = form.dataset.todoId;

            const todo = selected.findTodo(todoId);

            const formData = new FormData(form);
            todo.title = formData.get("title");
            todo.description = formData.get("description");
            todo.dueDate = formData.get("dueDate");
            todo.priority = formData.get("priority");

            UI.hideElement(UI.el.editTodoModal());
            form.reset();
            render();
        });
    };

    const handleEdit = (id) => {
        const currentTodo = selected.findTodo(id);
        const form = UI.el.editTodoForm();
        UI.showElement(UI.el.editTodoModal());

        form.querySelector('input[name="title"]').value = currentTodo.title;
        form.querySelector('textarea[name="description"]').value = currentTodo.description;
        form.querySelector('input[name="dueDate"]').value = currentTodo.dueDate;
        form.querySelector('select[name="priority"]').value = currentTodo.priority;

        // store ID so submit handler knows which todo to update
        form.dataset.todoId = id;
    };

    const handleRemove = (id) => {
        const currentTodo = selected.findTodo(id);
        selected.removeTodo(currentTodo.id);
        render();
    };

    return { init }
})();
