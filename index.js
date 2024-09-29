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
/*
app.get("/getDocs/:email", async (req, res) => {
    const { email } = req.params;
    const { keywords } = req.query;

    const keywordArray = keywords.split(',');

});
*/
app.get("/getDocs/:email", (req, res) => {
    const { email } = req.params; // Get the email from route params
    const { keywords } = req.query; // Get the keywords from query params

    if (!email) {
        return res.status(400).send({ msg: "Email is required" });
    }

    if (!keywords) {
        return res.status(400).send({ msg: "Keywords are required" });
    }

    // Split the keywords into an array if they are provided as a comma-separated string
    const keywordArray = keywords.split(',');

    res.send({
        msg: "Data received",
        email: email,
        keywords: keywordArray,
    });
});
app.listen(4000, () => console.log("up 4000"));
