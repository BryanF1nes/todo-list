import { Project } from "./project";
import { Todo } from "./todo";

class ProjectList {
    constructor() {
        this.projects = [];
    }

    findProject = (id) => {
        const project = this.projects.find((project) => project.id === id);
        if (!project) {
            throw new Error('Project not found.');
        }
        return project;
    }

    addProject = (project) => {
        this.projects.push(project);
    };

    removeProject = (id) => {
        const index = this.projects.findIndex((project) => project.id === id);
        this.projects.splice(index, 1);
    };

    editProject = (id, title) => {
        const project = this.findProject(id);
        project.title = title;
        return project;
    };

    save = () => {
        localStorage.setItem("projects", JSON.stringify(this.projects));
    };

    load = () => {
        const data = localStorage.getItem("projects");
        if (!data) return;

        const parsed = JSON.parse(data);

        this.projects = parsed.map((p) => {
            const project = new Project(p.title);
            project.id = p.id;

            project.todos = p.todos.map(t => {
                const todo = new Todo(t.title, t.description, t.dueDate, t.priority, t.project);
                todo.id = t.id;
                return todo;
            });
            return project;
        })
    };
};

export const Projects = new ProjectList();
Projects.load();

if (Projects.projects.length === 0) {
    Projects.addProject(new Project("Default"));
    Projects.save();
};
