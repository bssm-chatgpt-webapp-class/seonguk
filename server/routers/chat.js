const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");

router.post("/", async (req, res) => {
  const question = req.body.question;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  try {
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });
    return res.json(response.data.choices[0].message);
  } catch (error) {
    console.error(error);
    return res.status(500).json("error");
  }
});

module.exports = router;
