// CKEditorWithImageUpload.jsx
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// Custom Upload Adapter for Base64
function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new Base64UploadAdapter(loader);
  };
}

// Base64 Upload Adapter
class Base64UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  async upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () =>
            resolve({ default: reader.result }); // CKEditor expects `{ default: 'url' }`
          reader.onerror = (error) => reject(error);
        })
    );
  }

  abort() {
    // Handle abort if needed
  }
}

const CKEditorWithImageUpload = () => {
  const [data, setData] = useState("<p>Start writing here...</p>");

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h2>CKEditor 5 with Image Upload (Base64)</h2>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        config={{
          extraPlugins: [MyCustomUploadAdapterPlugin],
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "insertTable",
            "imageUpload",
            "undo",
            "redo",
          ],
          image: {
            toolbar: [
              "imageTextAlternative",
              "imageStyle:full",
              "imageStyle:side",
            ],
          },
        }}
        onChange={(event, editor) => {
          const editorData = editor.getData();
          setData(editorData);
        }}
      />
{console.log(data)}
      <h4>Editor Output:</h4>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
          backgroundColor: "#f8f8f8",
        }}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </div>
  );
};

export default CKEditorWithImageUpload;
