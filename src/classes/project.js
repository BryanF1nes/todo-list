export class Project {
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.todos = [];
    }

    findTodo = (id) => {
        const todo = this.todos.find((todo) => todo.id === id);
        if (!todo) {
            throw new Error('Todo not found.');
        }
        return todo;
    };

    addTodo = (todo) => {
        this.todos.push(todo);
    };

    removeTodo = (id) => {
        const todo = this.findTodo(id);
        this.todos.splice(todo, 1);
    };

    editTodo = (id, values) => {
        const todo = this.findTodo(id);
        for (let [key, value] of Object.entries(values)) {
            todo[key] = value;
        }
        return todo;
    };
}
