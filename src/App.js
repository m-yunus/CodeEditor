import React, { useState } from "react";
import axios from "axios";

const CodeEditorWithPreview = () => {
  const [code, setCode] = useState("console.log('Hello, World!');");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to Execute Code
  const runCode = async () => {
    setLoading(true);
    setOutput(""); // Clear previous output

    try {
      const response = await axios.post(
        "https://codeeditorbackend-sjo6.onrender.com/execute",
        { language, code }
      );

      setOutput(response.data.output || "No output received.");
    } catch (error) {
      setOutput("Error executing code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Code Editor Section */}
      <div className="flex flex-col w-full md:w-1/2 h-full bg-gray-800 border-r border-gray-600">
        
        {/* Language Selection & Run Button */}
        <div className="p-2 bg-gray-900 text-white flex justify-between items-center">
          <div>
            <label className="text-sm">Select Language:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-700 text-white p-1 rounded ml-2"
            >
    
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
          </div>

          <button
            onClick={runCode}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
            disabled={loading}
          >
            {loading ? "Running..." : "Run"}
          </button>
        </div>

        {/* Code Editor with Line Numbers */}
        <div className="flex flex-grow overflow-hidden">
          {/* Line Numbers Section */}
          <div className="w-12 bg-gray-900 text-gray-400 p-4 font-mono text-sm text-right select-none overflow-hidden">
            {code.split("\n").map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>

          {/* Textarea for Code Input */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            className="flex-grow h-full bg-gray-800 text-white font-mono text-sm p-4 resize-none outline-none overflow-y-auto"
            placeholder={`Write your ${language} code here...`}
          />
        </div>
      </div>

      {/* Output Section */}
      <div className="w-full md:w-1/2 h-full border-l border-gray-300 p-4 bg-gray-100">
        <h3 className="font-semibold text-gray-700">Output:</h3>

        {loading ? (
          <div className="text-gray-500">Executing...</div>
        ) : language === "JavaScript" ? (
          <iframe title="output" srcDoc={output} className="w-full h-full border" />
        ) : (
          <pre className="bg-white p-2 rounded shadow-md text-gray-800">
            {output}
          </pre>
        )}
      </div>
    </div>
  );
};

export default CodeEditorWithPreview;
