const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello from Backend 🚀" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));