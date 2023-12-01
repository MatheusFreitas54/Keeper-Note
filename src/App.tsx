import './App.css'
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Note from './components/Note.tsx';
import notes from './components/notes.ts';
import CreateArea from './components/CreateArea.tsx';

type NoteItemProps = {
  key: number;
  title: string;
  content: string;
}

const createNotes:React.FC<NoteItemProps> = (noteItem) => {
  return <Note
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content}
  />
}

function App() {

  return (
    <>
      <Header />
      <CreateArea />
      {notes.map(createNotes)}
      <Footer />
    </>
  )
}

export default App
