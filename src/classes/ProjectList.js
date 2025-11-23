export class ProjectList {
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
};
