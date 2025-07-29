import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false,
    height: 400,
    width: '100%',
    uploader: {
      insertImageAsBase64URI: true,
    },
    image: {
      resize: {
        enabled: true,
        min_width: 100,
        min_height: 100,
        
      },
    },
    allowResizeX: true,
    allowResizeY: true,
    toolbarSticky: false,
    buttons: [
      'source', '|',
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'superscript', 'subscript', '|',
      'ul', 'ol', '|',
      'outdent', 'indent', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'image', 'video', 'table', 'link', '|',
      'align', 'undo', 'redo', '|',
      'cut', 'copy', 'paste', '|',
      'hr', 'eraser', 'fullsize', 'print'
    ],
  };

  const handleGetContent = () => {
    alert(content);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
      <h2>Rich Text Editor</h2>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
        // onChange={(newContent) => setContent(newContent)}
      />

      <button onClick={handleGetContent} style={{ marginTop: '15px', padding: '8px 16px' }}>
        Show Editor Content
      </button>

      <div style={{ marginTop: '30px' }}>
        <h3>Live Preview:</h3>
        <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default RichTextEditor;
