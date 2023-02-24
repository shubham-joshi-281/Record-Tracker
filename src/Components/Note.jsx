import { useState } from "react";
function Note() {
  const initial= localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')):[]
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  // const [data, setData] = useState([]);
  const [data, setData] = useState(initial);
function submit(e){
  e.preventDefault()
}
  function set() {
    setData([...data, { title, notes }]);
    setTitle("");
    setNotes("");
    localStorage.setItem('data',JSON.stringify(data))
  }
  function remove(index) {
    const arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }
  return (
    <>
      <div className="notes-container">
        <form className="notes" onSubmit={submit}>
          <input
            className="in"
            type="text"
            placeholder="Add Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <textarea
            className="txt"
            placeholder="Add Notes..."
            onChange={(e) => {
              setNotes(e.target.value);
            }}
            value={notes}
          ></textarea>
          <button className="btn fa-solid fa-plus" onClick={set}></button>
        </form>
        <div className="show">
          {data.map((element, index) => {
            return (  
              <div className="show-list" key={index}>
                <li>{element.title}</li>
                <li>{element.notes}</li>
                <button
                  className="fa-solid fa-xmark show-btn"
                  onClick={() => {
                    remove(index);
                  }}
                ></button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Note;
