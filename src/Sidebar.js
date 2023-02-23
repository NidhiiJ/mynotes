import React from "react";

export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a,b)=> b.lastModified - a.lastModified)


  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => {
          return (
            <div
              className={`app-sidebar-note ${
                note.id === activeNote && "active"
              }`}
              onClick={() => {
                setActiveNote(note.id)
                // console.log(activeNote)
              }}
            >
              <div className="sidebar-note-title">
                <strong>{note.title}</strong>

                <button onClick={() => onDeleteNote(note.id)}>Delete</button>
              </div>

              <p>{note.body.length>50 ? note.body.substr(0, 100) + "...": note.body}</p>
              <small>
                Last Modified{" "}
                {new Date(note.lastModified).toLocaleDateString("hi-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hc: "h24",
                })}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
