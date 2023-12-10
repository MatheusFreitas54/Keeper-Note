import React, {useState} from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Note from './components/Note.tsx';
// import notes from './components/notes.ts';
import CreateArea from './components/CreateArea.tsx';

type NoteItemProps = {
  // key: number;
  title: string;
  content: string;
  onDelete: () => void;
}

type Note = {
  // key: number;
  title: string;
  content: string;
}

function App() {

  const createNotes:React.FC<NoteItemProps> = (noteItem: Note, index: number) => {
    return <Note
      // key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={() => deleteNote(index)}
    />
  }

  const [notes, setNotes] = useState<Note[]>([]);


  const addNote = (newNote: Note) => { 
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    
    // console.log(note);
  }

  const deleteNote = (id: number) => {
    setNotes(prevNotes => {
      return prevNotes.filter((_, index) => index !== id)
    })
  }
  

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map(createNotes)}
      <Footer />
    </>
  )
}

export default App
