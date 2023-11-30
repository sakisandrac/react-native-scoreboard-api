const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3003;
const app = express();
const environment = process.env.NODE_ENV || 'development';
require('dotenv').config();
app.locals = { title: 'Banana scoreboard API' };
const mongoose = require('mongoose');
const UserModel = require('./models/Users')

mongoose.connect(`mongodb+srv://sakisandrac:${process.env.NODE_DB_PASS}@banana-scoreboard.xewgjnx.mongodb.net/banana-scoreboard?retryWrites=true&w=majority`);

//MIDDLEWARE
app.use(cors());
app.use(express.json());

app.get('/api/v1/user', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/v1/user', async (req, res) => {
    try {
        // Extract user data from the request body
        const { bananas, lastDayPlayed, longestStreak, name, stars, subscribed, uid } = req.body;

        // Create a new user instance using the UserModel schema
        const newUser = new UserModel({
            bananas,
            lastDayPlayed,
            longestStreak,
            name,
            stars,
            subscribed,
            uid
        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json(newUser); // Respond with the newly created user
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`${app.locals.title} is now running on http://localhost:${port} !`)
});