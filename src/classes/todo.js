export class Todo {
    constructor(title, description, dueDate, priority, project = 'Default') {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    };
}
