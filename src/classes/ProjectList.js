export class ProjectList {
  constructor() {
    this.projects = [];
  }

  addProject = (project) => {
    this.projects.push(project);
    return this.projects.length;
  };

  removeProject = (id) => {
    const project = this.projects.findIndex((project) => project.id === id);
    this.projects.splice(project, 1);
    return this.projects.length;
  };
}
