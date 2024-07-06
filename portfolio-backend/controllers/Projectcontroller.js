const Project = require('../models/Project');

exports.getAllProjects = (req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.createProject = (req, res) => {
    const newProject = new Project(req.body);
    newProject.save()
        .then(() => res.json('Project added!'))
        .catch(err => res.status(400).json('Error: ' + err));
};
