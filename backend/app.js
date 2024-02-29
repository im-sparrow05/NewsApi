const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/newsRoutes');

const app = express();
const PORT = 4000;




app.use(cors());
app.use(express.json());

// routes mounting
app.use("/api/v1",newsRoutes);

app.get("/",(req,res)=>{
    res.send("This is the Home page");
})

// listening port at 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
