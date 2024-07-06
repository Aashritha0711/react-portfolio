const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Logging to ensure paths are correct
console.log('Projectroutes path:', path.join(__dirname, 'routes', 'Projectroutes.js'));
console.log('Blogroutes path:', path.join(__dirname, 'routes', 'Blogroutes.js'));

// Routes
const projectRoutes = require('./routes/Projectroutes');
const blogRoutes = require('./routes/Blogroutes');

app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
