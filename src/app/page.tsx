// "use client";

// import { useState } from "react";
// import CkEditor from "@/components/custom-editor";

// export default function Home() {
//   const [content, setContent] = useState<string>("");
//   const [text, setText] = useState("");
//   const [options, setOptions] = useState([]);

//   const handleTextChange = (html: string) => {
//     setText(html);
//     console.log("Live editor HTML:", html);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setContent(text);
//     console.log("Final submitted content:", text);
//   };

//   return (
//     <div className="p-6 space-y-10">
//       <form className="w-full space-y-4" onSubmit={handleSubmit}>
//         <CkEditor html={text} setHtml={handleTextChange} />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>

//       {content && (
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-2">Preview</h2>

//           {/* Raw HTML output preview */}
//           <h3 className="font-medium mb-1">Raw HTML Output:</h3>
//           <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto max-w-full">
//             {content}
//           </pre>

//           {/* Rendered HTML Output */}
//           <h3 className="font-medium mt-4 mb-1">Rendered Output:</h3>
//           <div
//             className="border border-gray-300 p-6 rounded bg-white shadow max-w-full overflow-x-auto"
//             dangerouslySetInnerHTML={{ __html: content }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import CkEditor from "@/components/custom-editor";

export default function Home() {
  const [text, setText] = useState("");
  const [content, setContent] = useState("");

  const handleTextChange = (html: string) => {
    setText(html);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContent(text);
    console.log("Submitted content:", text);
  };

  return (
    <div className="p-6 space-y-10">
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <CkEditor html={text} setHtml={handleTextChange} />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {text && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Live Preview</h2>

          <h3 className="text-sm font-medium mb-1">Raw HTML Output:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto max-w-full whitespace-pre-wrap">
            {text}
          </pre>

          <h3 className="text-sm font-medium mt-4 mb-1">Rendered Output:</h3>
          <div
            className="border border-gray-300 p-6 rounded bg-white shadow max-w-full overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      )}
    </div>
  );
}
