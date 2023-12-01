import React /*{ useState}*/ from 'react';
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

    input::placeholder {
      color: #000;
      font-weight: 600;
      letter-spacing: 1px;
    }

    textarea::placeholder {
      color: #000;
      letter-spacing: 1px;
      border-top: 1px solid #ccc;
      font-weight: 200;
      font-size: 0.9em;
      padding-top: 6px;
    }

    button {
      width: 40px;
      height: 40px;
      background-color: #0046BB;
      border: 1px solid #ccc;
      position: relative;
      left: 310px;
      border-radius: 100px;
    }
`;

const CreateArea: React.FC = () => {
    
    //const [note, setNote] = useState({
    //    title: "",
    //    content: ""
    //})

  return (
    <ContainerForm>
    <form action="">
        <input type="text" name='title' id='title' placeholder='Título' />
        <textarea name='content' placeholder='Criar sua nota...'/>
        <button>Add</button>
    </form>
    </ContainerForm>
  )
}

export default CreateArea;
