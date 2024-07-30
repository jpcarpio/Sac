
const express = require ('express');
const Router = express.Router();
const User = require('../models/User');

// create 

Router.post('/', async (req, res) => {
    const { pangalan, tirahan, kasarian, idType, idNumber, trabaho, sahod, workPlace, sektor, kalusugan, cellPhoneNumber, category, familyMembers, birthday} = req.body;

    try {
        const user = new User({
            pangalan,
            tirahan,
            kasarian,
            idType,
            idNumber,
            trabaho,
            sahod,
            workPlace,
            sektor,
            kalusugan,
            cellPhoneNumber,
            category,
            familyMembers,
            birthday
            
        });

        await user.save();
        res.status(201).json({message: 'User succeslfully created', user});
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user' + err.message });
    }
});

// Get all users 

Router.get('/getAllUsers', async ( req, res) => {
    try {
        const users = await User.find();
        res.json ({ message: 'Users retrieved Succesfully', users})
    }catch (err){
        res.status(500).json({error:'Failed to retrieved users' + err.message})
    }
});

module.exports = Router;