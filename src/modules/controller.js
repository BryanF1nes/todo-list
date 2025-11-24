import { Projects } from "../classes/ProjectList.js";
import { UI } from "./ui.js";
import { Todo } from "../classes/todo.js";
import { Project } from "../classes/project";

export const Controller = (() => {
    const init = () => {
        render();
    };

    const render = () => {
        const projects = Projects.projects;
        UI.renderProjects(projects);

        bindEvents();
    }

    const bindEvents = () => {
        UI.el.projectButton().addEventListener('click', () => UI.showProjectForm())
        UI.el.projectForm().addEventListener('submit', (e) => {
            const form = UI.el.projectForm();
            const formData = new FormData(form);
            e.preventDefault();

            const title = formData.get('title');
            const project = new Project(title);

            Projects.addProject(project);

            e.target.reset();
        });
    };

    return { init }
})();
