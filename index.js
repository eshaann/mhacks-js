const express = require("express");
const cors = require("cors");
const { User, File } = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/createUser/:email/:firstName/:lastName", async (req, res) => {
    const { email, firstName, lastName } = req.params;
    const data = {
        email: email,
        firstName: firstName,
        lastName: lastName,
    };
    await User.add(data);
    res.send({ msg: "User added" });
});

app.post("/uploadDoc/:fileName/:email", async (req, res) => {
    const { fileName, email } = req.params;


    const fileData = {
        name: fileName, // Store the name of the file
        em: email, // Store the user ID
        uploadedAt: new Date(), // Optionally store upload timestamp
    };
    await File.add(fileData);
    res.send({ msg: "doc name uploaded" });
});



app.listen(4000, () => console.log("up 4000"));
