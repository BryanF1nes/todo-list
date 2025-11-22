export class Project {
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.todos = [];
    }

    findTodo = (id) => {
        const todo = this.todos.find((todo) => todo.id === id);
        return todo;
    };

    addTodo = (todo) => {
        this.todos.push(todo);
        return this.todos.length;
    };

    removeTodo = (id) => {
        const todo = this.findTodo(id);
        this.todos.splice(todo, 1);
        return this.todos.length;
    };

    editTodo = (id, values) => {
        const todo = this.findTodo(id);
        for (let [key, value] of Object.entries(values)) {
            todo[key] = value;
        };
        return todo;
    };
}
