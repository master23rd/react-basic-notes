import React from 'react'
import NotesItemBody from './NotesItemBody'
import NotesItemButton from './NotesItemButton'

function NotesItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  onActive,
  archived,
}) {
  return (
    <div className='note-item'>
      <NotesItemBody title={title} createdAt={createdAt} body={body} />
      <NotesItemButton
        id={id}
        onDelete={onDelete}
        archiveStatus={archived}
        onArchive={onArchive}
        onActive={onActive}
      />
    </div>
  )
}

export default NotesItem
