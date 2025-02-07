import React, { useState } from "react";

const CodeEditorWithPreview = () => {
  const [code, setCode] = useState("<h1>Hello, World!</h1>");

  // Generate line numbers dynamically
  const lineNumbers = code.split("\n").map((_, index) => index + 1).join("\n");

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="md:w-[5%]"></div>

      {/* Code Editor Section */}
      <div className="flex w-full md:w-1/2 h-1/2 md:h-full bg-gray-800 border-r border-gray-600">
        {/* Line Numbers */}
        <pre className="w-10 text-right text-gray-400 bg-gray-900 p-4 font-mono text-sm select-none">
          {lineNumbers}
        </pre>

        {/* Code Editor */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
          className="flex-grow h-full bg-gray-800 text-white font-mono text-sm p-4 resize-none outline-none"
        />
      </div>

      {/* Live Output Section */}
      <iframe
        title="output"
        srcDoc={code}
        className="w-full md:w-1/2 h-1/2 md:h-full bg-white border-l border-gray-300"
      />
    </div>
  );
};

export default CodeEditorWithPreview;
