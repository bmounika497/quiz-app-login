const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
