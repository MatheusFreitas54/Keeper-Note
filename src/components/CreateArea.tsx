import React, {useState} from 'react';
import styled from 'styled-components';

const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 5px #ccc;
      padding: 10px;
      width: 360px;
      margin: 16px;
    }

    input, textarea {
      background-color: #fff;
      border: none;
      color: #000;
      font-size: 1.1em;
      padding-bottom: 4px;
    }
  
    input:focus, textarea:focus {
      outline: none;
    }

    input::placeholder {
      color: #000;
      font-weight: 600;
      letter-spacing: 1px;
    }

    textarea::placeholder {
      color: #2b2b2b;
      letter-spacing: 1px;
      font-weight: 200;
      font-size: 0.9em;
    }

    button {
      width: 40px;
      height: 40px;
      background-color: #0046BB;
      border: 1px solid #ccc;
      position: relative;
      left: 305px;
      border-radius: 100px;
    }

    button:hover {
      background-color: #669cf8;
    }

    hr {
      background-color: #ccc;
      width: 100%;
      margin: 0px 0px 1px 0px;
    }

    @media screen and (max-width: 700px) {
      button {
        left: 255px;
      }
    }
`;

type Note = {
  // key: number;
  title: string;
  content: string;
}

type CreateAreaPromps = {
  onAdd: (content: Note) => void;
}

const CreateArea: React.FC<CreateAreaPromps> = (props) => {
    
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
        const { name, value } = event.target;

        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });

    }

    const handleSubmitNote: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      props.onAdd(note);
      event.preventDefault();
    }



  return (
    <ContainerForm>
    <form action="">
        <input 
        type='text'
        name='title'
        onChange={handleChange} 
        value={note.title} 
        id='title' 
        placeholder='Título' />
        <hr />
        <textarea 
          name='content' onChange={handleChange}
          value={note.content} 
          placeholder='Criar sua nota...'
        />
        <button onClick={handleSubmitNote}>ADD</button>
    </form>
    </ContainerForm>
  )
}

export default CreateArea;
