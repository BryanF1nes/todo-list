# Todo App

A CRUD style Todo application built using HTML, CSS, and JavaScript, with a strong emphasis on clean architecture and modern programming patterns. This project incorporates the Module Pattern, Classes, and Factory Functions to create a clear, maintainable structure for managing application state and user interactions.

Bundling and tooling were handled using Webpack, with ESLint, Prettier, and other development dependencies ensuring code consistency and reliability throughout the project.

## Process

The Todo App by nature is a staple project for many developers. However, my primary goal for this implementation was to deepen familiarity with architectural patterns—most notably the module pattern and class-based structures.

The core components such as the Todo, Project, and ProjectLsit objects where structured using classes. This ended up allowing me to incorporate LocalStorage painlessly by implementing a `load()` and `save()` method inside the ProjectList class which would maintain the state of the project.

## Hosting

The application is hosted using GitHub Pages.

Icons are provided via [Font Awesome](https://fontawesome.com/).

Design inspiration was taken from [Todoist](https://www.todoist.com/), with a minimal and approachable user interface.

## Live Demo:
[Todo App](https://bryanf1nes.github.io/todo-list/)
