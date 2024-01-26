import listImg from '../assets/images/list.svg';
import gridImg from '../assets/images/grid.svg';
import { useContext, useState } from 'react';
import { Context } from '../context/Context';
import Note from './Note';

function Notes() {
  const [grid, setGrid] = useState(false);
  const {lang, notes} = useContext(Context);

  return (
    <div className={`notes container ${grid ? 'active' : ''}`}>
      <div className="notes__top">
        <h2 className="notes__title">{lang.infobar}</h2>
        <button className="notes__btn" onClick={() => setGrid(!grid)}>
          <img src={grid ? gridImg : listImg} alt="icon" />
          <span>{grid ? lang.grid : lang.list}</span>
        </button>
      </div>

      <div className="notes__list">
        {
          notes.map(note => (
            <Note note={note} key={note.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Notes