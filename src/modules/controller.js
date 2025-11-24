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
        UI.el.addTask().addEventListener('click', () => UI.showTodoForm());
        UI.el.closeButton().addEventListener('click', () => UI.hideTodoForm());
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
        });
    };

    return { init }
})();
