import editImg from '../assets/images/edit.svg';
import delImg from '../assets/images/del.svg';

function Note({note}) {
  return (
    <div className="notes__item">
        <div className="notes__item-top">
            <h3 className="notes__item-title">{note.title}</h3>
            <p className="notes__item-date">{note.date}</p>
        </div>
        <p className="notes__item-text">{note.text}</p>
        <div className="notes__buttons">
            <button className="notes__item-btn edit">
                <img src={editImg} alt="Edit" />
                <span>РЕДАКТИРОВАТЬ</span>
            </button>
            <button className="notes__item-btn del">
                <img src={delImg} alt="Edit" />
                <span>УДАЛИТЬ</span>
            </button>
        </div>
    </div>
  )
}

export default Note