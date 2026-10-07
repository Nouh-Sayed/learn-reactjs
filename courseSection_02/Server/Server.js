import express from "express";
import cors from "cors";
import "dotenv/config";
import { getRecipeFromHuggingFace } from "./ai.js";









const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.post("/api/recipe", async (req, res) => {
  try {
    console.log("Recipe request received!");
    console.log("Ingredients:", req.body.ingredients);

    const { ingredients } = req.body;

    if (!ingredients || !Array.isArray(ingredients)) {
      return res.status(400).json({
        error: "Ingredients must be an array",
      });
    }

    const recipe = await getRecipeFromHuggingFace(ingredients);

    console.log("Generated recipe:");
    console.log(recipe);

    res.json({
      recipe,
    });
  } catch (error) {
    console.error(
      "Hugging Face Error:",
      JSON.stringify(error.httpResponse?.body, null, 2)
    );

    console.error("Full error:", error.message);

    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});