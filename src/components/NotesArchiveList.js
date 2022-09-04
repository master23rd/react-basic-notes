import React from 'react'
import NotesItem from './Notesitem'

function NotesArchiveList({ notes, onDelete, onActive, onArchive }) {
  const printNotes = notes.filter((note) => note.archived === true)

  return printNotes.length !== 0 ? (
    <div className='notes-list'>
      {printNotes.map((note) => (
        <NotesItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          onActive={onActive}
          {...note}
        />
      ))}
    </div>
  ) : (
    <div className='notes-list__empty-message'>
      <p>Tidak ada Catatan</p>
    </div>
  )
}

export default NotesArchiveList
