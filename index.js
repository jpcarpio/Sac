const express = require ('express');
const mongoose = require ('mongoose');
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

const app= express();
const PORT = process.env.PORT || 3000;

// middle ware

app.use(express.json()); 



// db connection 
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

//   routes 

app.use('/sac-form', userRoutes);

// server 

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
});



