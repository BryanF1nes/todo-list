import { Projects } from "../classes/ProjectList.js";
import { UI } from "./ui.js";
import { Todo } from "../classes/todo.js";
import { Project } from "../classes/project";

export const Controller = (() => {
    const projects = Projects.projects;
    let selected = Projects.projects[0];
    const init = () => {
        render();
        bindEvents();
    };

    const render = () => {
        UI.renderProjects(projects);
        UI.renderTodos(selected);
    }

    const bindEvents = () => {
        UI.el.addTask().addEventListener('click', () => UI.showTodoModal());
        UI.el.closeButton().addEventListener('click', () => UI.hideTodoModal());
        UI.el.projectButton().addEventListener('click', () => UI.showProjectForm());
        UI.el.projectForm().addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(UI.el.projectForm());

            const title = formData.get('title');
            const project = new Project(title);

            Projects.addProject(project);
            UI.hideProjectForm();
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
            UI.hideTodoModal();
            render();
        });
    };

    return { init }
})();
