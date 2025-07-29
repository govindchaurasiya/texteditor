import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CKEditorWithImageUpload from './CKEditorWithImageUpload'

import CategoryForm from './RichTextEditor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <CKEditorWithImageUpload /> */}
   <CategoryForm/>
    </>
  )
}

export default App
