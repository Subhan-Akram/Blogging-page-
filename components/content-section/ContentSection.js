import React from 'react'

function ContentSection() {
  return (
   <div className='content_section_container mt-3 mb-3 bd_green'>
     <div className='content_section '>
      <h1 className='content_title'>What WE ARE DOING ?</h1>
      
    </div>
    <div className='content_section1  mt_negative'>

      <h1 className='mt-3'>Application is About Information</h1>
      <p className='text_sm mt_2 content_text'>It sounds like you are trying to use a file with a .css extension in a NextJS project, and you are encountering an error because the system is unable to process the file. This error message usually indicates that the file is not being recognized as a valid CSS file, which can be caused by a variety of issues. Here are a few things you can try to troubleshoot the problem:
<br /><br />
Make sure that the file is a valid CSS file and that it has not been corrupted. You can check the file's contents to ensure that it is well-formed and does not contain any syntax errors.

Check the context in which you are trying to use the file. Make sure that you are using the correct file type for the task at hand. For example, if you are trying to style an HTML page, make sure that you are linking to a CSS file and not an HTML file.</p>
    </div>
    </div>
  )
}

export default ContentSection