import "./App.css";
import words from "./assets/wordList.json";

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  console.log(wordToGuess);
  return <h1>Hi</h1>;
}
