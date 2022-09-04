import React from 'react'

function NotesItemButton({ id, onDelete, archiveStatus, onArchive, onActive }) {
  if (archiveStatus === true) {
    return (
      <div className='note-item__action'>
        <button
          className='note-item__delete-button'
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <button
          className='note-item__archive-button'
          onClick={() => onActive(id)}
        >
          Aktfikan
        </button>
      </div>
    )
  } else {
    return (
      <div className='note-item__action'>
        <button
          className='note-item__delete-button'
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <button
          className='note-item__archive-button'
          onClick={() => onArchive(id)}
        >
          Arsipkan
        </button>
      </div>
    )
  }
}

export default NotesItemButton
