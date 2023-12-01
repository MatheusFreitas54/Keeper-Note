import React from 'react';

type NoteProps = {
  title: string;
  content: string;
};


const Note:React.FC<NoteProps> = (props) => {
  
    return (
    <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      
    </div>
  )
}

export default Note;
