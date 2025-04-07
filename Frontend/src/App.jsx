import { useState } from 'react';
import './App.css';
import Editor from 'react-simple-code-editor';
import Markdown from 'react-markdown';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import axios from 'axios';
/*import 'prismjs/components/prism-javascript'; // Make sure JS is loaded*/

function App() {
  const [code, setCode] = useState("Write your code here!");
  const[review,setReview]=useState("");

  const reviewCode = async (code) => {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", { code });
      setReview(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
    }
  };

  return (
    <main>
      
        <h1 className='heading'>Wanna Review Your Code?🧑‍💻</h1>
      <div className="content">
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={(newCode) => setCode(newCode)}
            highlight={(code) => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 18,
              backgroundColor: "#2d2d2d",
              color: "#fff",
              height: "100%",
              width: "100%",
              borderRadius: "0.7rem"
            }}
          />
        </div>
        <div onClick={() => reviewCode(code)} className="review">Review</div>
      </div>

      <div className="right">
        <Markdown>
        {review}
        </Markdown>
      </div>
      </div>
      
    </main>
  );
}

export default App;
