import React, { useState} from 'react';

const CreateArea: React.FC = () => {
    
    const [note, setNote] = useState({
        title: "",
        content: ""
    })




  return (
    <div id='containerForm-Note'>
    <form action="">
        <input type="text" name='title' id='title' placeholder='Título' />
        <textarea name='content' placeholder='Criar sua nota...'/>
        <button>Add</button>
    </form>
    </div>
  )
}

export default CreateArea;
