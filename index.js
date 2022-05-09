const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const characters = [
  {
    id: 1,
    name: "Batman",
    alias: "Bruce Wayne",
    powers:
      "Exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skill, advanced technology.",
    description:
      "In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.",
    image:
      "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE",
  },
  {
    id: 2,
    name: "Superman",
    alias: "Clark Kent, Kal-El",
    powers:
      "Super strength, flight, invulnerability, super speed, heat vision, freeze breath, x-ray vision, superhuman hearing, healing factor.",
    description:
      "Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way.",
    image:
      "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Superman_20190116_5c3fc2758f6a12.25513240.jpg?itok=IqnLIx3M",
  },
  {
    id: 3,
    name: "Flash",
    alias: "Barry Allen",
    powers:
      "Super speed, intangibility, superhuman agility, time travel, creates and controls lightning, multiversal knowledge.",
    description:
      "Three men have held the title of The Fastest Man Alive — Jay Garrick, Barry Allen and Wally West. Each of them redefined the word hero.",
    image:
      "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Flash_20190116_5c3fcaaa18f0e8.03668117.jpg?itok=wQUgUOI1",
  },
];

app.get("/", (req, res) => {
  res.render("index", { characters });
});

app.post("/add", (req, res) => {
  const character = req.body;

  characters.push(character);

  res.redirect("/");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);