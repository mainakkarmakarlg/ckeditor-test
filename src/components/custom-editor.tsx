// "use client";

// import { useState, useEffect, useRef, useMemo, FormEvent } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import {
//   ClassicEditor,
//   Alignment,
//   Autoformat,
//   AutoImage,
//   Autosave,
//   BalloonToolbar,
//   Base64UploadAdapter,
//   BlockQuote,
//   Bold,
//   Bookmark,
//   Code,
//   CodeBlock,
//   Emoji,
//   Essentials,
//   FindAndReplace,
//   FontBackgroundColor,
//   FontColor,
//   FontFamily,
//   FontSize,
//   Fullscreen,
//   GeneralHtmlSupport,
//   Heading,
//   Highlight,
//   HorizontalLine,
//   HtmlComment,
//   HtmlEmbed,
//   ImageBlock,
//   ImageCaption,
//   ImageInline,
//   ImageInsert,
//   ImageInsertViaUrl,
//   ImageResize,
//   ImageStyle,
//   ImageTextAlternative,
//   ImageToolbar,
//   ImageUpload,
//   Indent,
//   IndentBlock,
//   Italic,
//   Link,
//   LinkImage,
//   List,
//   ListProperties,
//   MediaEmbed,
//   Mention,
//   PageBreak,
//   Paragraph,
//   PasteFromOffice,
//   PlainTableOutput,
//   RemoveFormat,
//   SourceEditing,
//   SpecialCharacters,
//   SpecialCharactersArrows,
//   SpecialCharactersCurrency,
//   SpecialCharactersEssentials,
//   SpecialCharactersLatin,
//   SpecialCharactersMathematical,
//   SpecialCharactersText,
//   Strikethrough,
//   Style,
//   Subscript,
//   Superscript,
//   Table,
//   TableCaption,
//   TableCellProperties,
//   TableColumnResize,
//   TableLayout,
//   TableProperties,
//   TableToolbar,
//   TextTransformation,
//   TodoList,
//   Underline,
//   WordCount,
// } from "ckeditor5";

// import "ckeditor5/ckeditor5.css";
// import "../app/App.css";

// // const LICENSE_KEY = process.env.CKEDITOR_LICENSE_KEY
// export default function ClientSideCustomEditor({
//   onChange,
// }: {
//   onChange?: (html: string) => void;
// }) {
//   const editorContainerRef = useRef(null);
//   const editorRef = useRef(null);
//   const editorWordCountRef = useRef(null);
//   const ckInstanceRef = useRef(null); // 💡 Store the editor instance
//   const [isLayoutReady, setIsLayoutReady] = useState(false);
//   const [htmlOutput, setHtmlOutput] = useState("");

//   useEffect(() => {
//     setIsLayoutReady(true);
//     return () => setIsLayoutReady(false);
//   }, []);

//   const { editorConfig } = useMemo(() => {
//     if (!isLayoutReady) return {};

//     return {
//       editorConfig: {
//         toolbar: {
//           items: [
//             "undo",
//             "redo",
//             "|",
//             "sourceEditing",
//             "findAndReplace",
//             "fullscreen",
//             "|",
//             "heading",
//             "style",
//             "|",
//             "fontSize",
//             "fontFamily",
//             "fontColor",
//             "fontBackgroundColor",
//             "|",
//             "bold",
//             "italic",
//             "underline",
//             "strikethrough",
//             "subscript",
//             "superscript",
//             "code",
//             "removeFormat",
//             "|",
//             "emoji",
//             "specialCharacters",
//             "horizontalLine",
//             "pageBreak",
//             "link",
//             "bookmark",
//             "insertImage",
//             "mediaEmbed",
//             "insertTable",
//             "insertTableLayout",
//             "highlight",
//             "blockQuote",
//             "codeBlock",
//             "htmlEmbed",
//             "|",
//             "alignment",
//             "|",
//             "bulletedList",
//             "numberedList",
//             "todoList",
//             "outdent",
//             "indent",
//           ],
//           shouldNotGroupWhenFull: false,
//         },
//         plugins: [
//           Alignment,
//           Autoformat,
//           AutoImage,
//           Autosave,
//           BalloonToolbar,
//           Base64UploadAdapter,
//           BlockQuote,
//           Bold,
//           Bookmark,
//           Code,
//           CodeBlock,
//           Emoji,
//           Essentials,
//           FindAndReplace,
//           FontBackgroundColor,
//           FontColor,
//           FontFamily,
//           FontSize,
//           Fullscreen,
//           GeneralHtmlSupport,
//           Heading,
//           Highlight,
//           HorizontalLine,
//           HtmlComment,
//           HtmlEmbed,
//           ImageBlock,
//           ImageCaption,
//           ImageInline,
//           ImageInsert,
//           ImageInsertViaUrl,
//           ImageResize,
//           ImageStyle,
//           ImageTextAlternative,
//           ImageToolbar,
//           ImageUpload,
//           Indent,
//           IndentBlock,
//           Italic,
//           Link,
//           LinkImage,
//           List,
//           ListProperties,

//           MediaEmbed,
//           Mention,
//           PageBreak,
//           Paragraph,
//           PasteFromOffice,
//           PlainTableOutput,
//           RemoveFormat,
//           SourceEditing,
//           SpecialCharacters,
//           SpecialCharactersArrows,
//           SpecialCharactersCurrency,
//           SpecialCharactersEssentials,
//           SpecialCharactersLatin,
//           SpecialCharactersMathematical,
//           SpecialCharactersText,
//           Strikethrough,
//           Style,
//           Subscript,
//           Superscript,
//           Table,
//           TableCaption,
//           TableCellProperties,
//           TableColumnResize,
//           TableLayout,
//           TableProperties,
//           TableToolbar,
//           TextTransformation,
//           TodoList,
//           Underline,
//           WordCount,
//         ],
//         balloonToolbar: [
//           "bold",
//           "italic",
//           "|",
//           "link",
//           "insertImage",
//           "|",
//           "bulletedList",
//           "numberedList",
//         ],
//         fontFamily: { supportAllValues: true },
//         fontSize: {
//           options: [10, 12, 14, "default", 18, 20, 22],
//           supportAllValues: true,
//         },
//         fullscreen: {
//           onEnterCallback: (container) =>
//             container.classList.add(
//               "editor-container",
//               "editor-container_classic-editor",
//               "editor-container_include-style",
//               "editor-container_include-word-count",
//               "editor-container_include-fullscreen",
//               "main-container"
//             ),
//         },
//         heading: {
//           options: [
//             {
//               model: "paragraph",
//               title: "Paragraph",
//               class: "ck-heading_paragraph",
//             },
//             {
//               model: "heading1",
//               view: "h1",
//               title: "Heading 1",
//               class: "ck-heading_heading1",
//             },
//             {
//               model: "heading2",
//               view: "h2",
//               title: "Heading 2",
//               class: "ck-heading_heading2",
//             },
//             {
//               model: "heading3",
//               view: "h3",
//               title: "Heading 3",
//               class: "ck-heading_heading3",
//             },
//             {
//               model: "heading4",
//               view: "h4",
//               title: "Heading 4",
//               class: "ck-heading_heading4",
//             },
//             {
//               model: "heading5",
//               view: "h5",
//               title: "Heading 5",
//               class: "ck-heading_heading5",
//             },
//             {
//               model: "heading6",
//               view: "h6",
//               title: "Heading 6",
//               class: "ck-heading_heading6",
//             },
//           ],
//         },
//         htmlSupport: {
//           allow: [
//             { name: /^.*$/, styles: true, attributes: true, classes: true },
//           ],
//         },
//         image: {
//           toolbar: [
//             "toggleImageCaption",
//             "imageTextAlternative",
//             "|",
//             "imageStyle:inline",
//             "imageStyle:wrapText",
//             "imageStyle:breakText",
//             "|",
//             "resizeImage",
//           ],
//         },
//         initialData: "<h2>Try something new here</h2>",
//         licenseKey: "<YOUR_LICENSE_KEY>",
//         link: {
//           addTargetToExternalLinks: true,
//           defaultProtocol: "https://",
//           decorators: {
//             toggleDownloadable: {
//               mode: "manual",
//               label: "Downloadable",
//               attributes: { download: "file" },
//             },
//           },
//         },
//         list: {
//           properties: {
//             styles: true,
//             startIndex: true,
//             reversed: true,
//           },
//         },
//         mention: {
//           feeds: [
//             {
//               marker: "@",
//               feed: [], // optionally fill with suggestions
//             },
//           ],
//         },
//         placeholder: "Type or paste your content here!",
//         style: {
//           definitions: [
//             { name: "Article category", element: "h3", classes: ["category"] },
//             { name: "Title", element: "h2", classes: ["document-title"] },
//             { name: "Subtitle", element: "h3", classes: ["document-subtitle"] },
//             { name: "Info box", element: "p", classes: ["info-box"] },
//             {
//               name: "CTA Link Primary",
//               element: "a",
//               classes: ["button", "button--green"],
//             },
//             {
//               name: "CTA Link Secondary",
//               element: "a",
//               classes: ["button", "button--black"],
//             },
//             { name: "Marker", element: "span", classes: ["marker"] },
//             { name: "Spoiler", element: "span", classes: ["spoiler"] },
//           ],
//         },
//         table: {
//           contentToolbar: [
//             "tableColumn",
//             "tableRow",
//             "mergeTableCells",
//             "tableProperties",
//             "tableCellProperties",
//           ],
//         },
//       },
//     };
//   }, [isLayoutReady]);

//   return (
//     <div>
//       {editorConfig && (
//         <CKEditor
//           editor={ClassicEditor}
//           config={editorConfig}
//           onReady={(editor) => {
//             ckInstanceRef.current = editor;

//             const wordCount = editor.plugins.get("WordCount");
//             editorWordCountRef.current?.appendChild(
//               wordCount.wordCountContainer
//             );
//           }}
//           onChange={(_, editor) => {
//             const data = editor.getData();
//             onChange?.(data);
//           }}
//         />
//       )}
//       <div ref={editorWordCountRef} />
//     </div>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  ClassicEditor,
  Alignment,
  Autoformat,
  AutoImage,
  Autosave,
  BalloonToolbar,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlComment,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  MediaEmbed,
  Mention,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  PlainTableOutput,
  RemoveFormat,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Style,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
  WordCount,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

import "../app/App.css";

export default function CkEditor({ html, setHtml }: any) {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  const onChange = (e: any, editor: any) => {
    setHtml(editor.getData());
  };

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "sourceEditing",
        "findAndReplace",
        "fullscreen",
        "|",
        "heading",
        "style",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "subscript",
        "superscript",
        "code",
        "removeFormat",
        "|",
        "emoji",
        "specialCharacters",
        "horizontalLine",
        "pageBreak",
        "link",
        "bookmark",
        "insertImage",
        "mediaEmbed",
        "insertTable",
        "insertTableLayout",
        "highlight",
        "blockQuote",
        "codeBlock",
        "htmlEmbed",
        "|",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "outdent",
        "indent",
      ],
      shouldNotGroupWhenFull: false,
    },
    plugins: [
      Alignment,
      Autoformat,
      AutoImage,
      Autosave,
      BalloonToolbar,
      Base64UploadAdapter,
      BlockQuote,
      Bold,
      Code,
      CodeBlock,
      Essentials,
      FindAndReplace,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      GeneralHtmlSupport,
      Heading,
      Highlight,
      HorizontalLine,
      HtmlComment,
      HtmlEmbed,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,

      MediaEmbed,
      Mention,
      PageBreak,
      Paragraph,
      PasteFromOffice,
      PlainTableOutput,
      RemoveFormat,
      SourceEditing,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Style,
      Subscript,
      Superscript,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TextTransformation,
      TodoList,
      Underline,
      WordCount,
    ],
    balloonToolbar: [
      "bold",
      "italic",
      "|",
      "link",
      "insertImage",
      "|",
      "bulletedList",
      "numberedList",
    ],
    fontFamily: { supportAllValues: true },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    fullscreen: {
      onEnterCallback: (container) =>
        container.classList.add(
          "editor-container",
          "editor-container_classic-editor",
          "editor-container_include-style",
          "editor-container_include-word-count",
          "editor-container_include-fullscreen",
          "main-container"
        ),
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    htmlSupport: {
      allow: [{ name: /^.*$/, styles: true, attributes: true, classes: true }],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
      ],
    },
    initialData: html,
    licenseKey: "<YOUR_LICENSE_KEY>",
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: { download: "file" },
        },
      },
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    mention: {
      feeds: [
        {
          marker: "@",
          feed: [], // optionally fill with suggestions
        },
      ],
    },
    menuBar: {
      isVisible: true,
    },
    placeholder: "Enter the question",
    style: {
      definitions: [
        { name: "Article category", element: "h3", classes: ["category"] },
        { name: "Title", element: "h2", classes: ["document-title"] },
        { name: "Subtitle", element: "h3", classes: ["document-subtitle"] },
        { name: "Info box", element: "p", classes: ["info-box"] },
        {
          name: "CTA Link Primary",
          element: "a",
          classes: ["button", "button--green"],
        },
        {
          name: "CTA Link Secondary",
          element: "a",
          classes: ["button", "button--black"],
        },
        { name: "Marker", element: "span", classes: ["marker"] },
        { name: "Spoiler", element: "span", classes: ["spoiler"] },
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },
  };

  return (
    <div className="editor w-full overflow-x-hidden">
      <div ref={editorContainerRef}>
        <div ref={editorRef}>
          {isLayoutReady && (
            <CKEditor
              data={html}
              onChange={(e, editor) => onChange(e, editor)}
              editor={ClassicEditor}
              config={editorConfig}
            />
          )}
        </div>
      </div>
    </div>
  );
}
