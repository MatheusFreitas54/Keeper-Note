import React from 'react';
import styled from 'styled-components';

type NoteProps = {
  title: string;
  content: string;
  onDelete: () => void;
};

const TagNote = styled.div`
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 240px;
    margin: 16px;
    float: left;

    h1 {
      color: #000;
      font-size: 1.1em;
      margin-bottom: 6px;
    }

    p {
      color: #000;
      font-size: 1em;
      font-weight: 200;
      margin-bottom: 10px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    button {
      background-color: #ffffff00;
      color: #0046BB;
      font-weight: 600 ;
      border: none;
      float: right;
    }

    button:hover {
      color: #669cf8;
    }
`;


const Note:React.FC<NoteProps> = (props) => {

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    props.onDelete();
  }
  
    return (
    <TagNote>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>DELETE</button>
    </TagNote>
  )
}

export default Note;
