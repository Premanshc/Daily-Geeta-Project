import express from "express";
import axios from "axios";

const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {
  let chapter = Math.floor(Math.random() * 18 + 1);
  var verseNum;
  switch (chapter) {
    case 1:
      verseNum = Math.floor(Math.random() * 47 + 1);
      break;
    case 2:
      verseNum = Math.floor(Math.random() * 72 + 1);
      break;
    case 3:
      verseNum = Math.floor(Math.random() * 43 + 1);
      break;
    case 4:
      verseNum = Math.floor(Math.random() * 42 + 1);
      break;
    case 5:
      verseNum = Math.floor(Math.random() * 29 + 1);
      break;
    case 6:
      verseNum = Math.floor(Math.random() * 47 + 1);
      break;
    case 7:
      verseNum = Math.floor(Math.random() * 30 + 1);
      break;
    case 8:
      verseNum = Math.floor(Math.random() * 28 + 1);
      break;
    case 9:
      verseNum = Math.floor(Math.random() * 34 + 1);
      break;
    case 10:
      verseNum = Math.floor(Math.random() * 42 + 1);
      break;
    case 11:
      verseNum = Math.floor(Math.random() * 55 + 1);
      break;
    case 12:
      verseNum = Math.floor(Math.random() * 20 + 1);
      break;
    case 13:
      verseNum = Math.floor(Math.random() * 35 + 1);
      break;
    case 14:
      verseNum = Math.floor(Math.random() * 27 + 1);
      break;
    case 15:
      verseNum = Math.floor(Math.random() * 20 + 1);
      break;
    case 16:
      verseNum = Math.floor(Math.random() * 24 + 1);
      break;
    case 17:
      verseNum = Math.floor(Math.random() * 28 + 1);
      break;
    case 18:
      verseNum = Math.floor(Math.random() * 78 + 1);
      break;
    default:
      console.log("unknow color");
  }
  const options = {
    method: "GET",
    url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${verseNum}/`,
    headers: {
      "X-RapidAPI-Key": "320187a9f1msh53b319a5fcdef1dp1e15eajsn68b514506a5e",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const result = await axios.request(options);
  res.render("index.ejs", {
    verse: result.data.text,
    verse_number: result.data.verse_number,
    chapter_number: result.data.chapter_number,
    description : result.data.translations[0].description,
    descriptionHindi :  result.data.translations[6].description
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is active on port: 3000`);
});
