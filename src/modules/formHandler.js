import { Project } from '../classes/project.js';
import { ProjectList } from '../classes/ProjectList.js';

export const UI = (() => {
    const el = {
        projectButton: () => document.getElementById('project-button'),
        projectModal: () => document.querySelector('.project-modal'),
        projectForm: () => document.getElementById('project-form'),
        projectContainer: () => document.querySelector('.project-container'),
    };

    return { el }
})();
