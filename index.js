const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();

try {
  mongoose.connect('mongodb+srv://Adu_D122:31514@cluster0demo.gz8pv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Demo', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('connected to database');
} catch(err) {
  console.log(err);
}

app.use("/user",userRoutes);

app.listen(3000, () => {
  console.log('server started on http://localhost:3000');
});