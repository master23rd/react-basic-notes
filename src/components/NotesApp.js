import React from 'react'
import NotesActiveList from './NotesActiveList'
import NotesInput from './NotesInput'
import NotesArchiveList from './NotesArchiveList'
import { getInitialData } from '../utils/index'
// import notes input

class NotesApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData(),
      notesFilterData: [],
    }
    // this.node = React.createRef()

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
    this.onActiveHandler = this.onActiveHandler.bind(this)
    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this)
    // this.onSearchClickEventHandler = this.onSearchClickEventHandler.bind(this)
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id)
    this.setState({ notes })
  }

  onArchiveHandler(id) {
    const newNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = true
      }
      return note
    })

    // const note = this.state.notes
    //   .filter((note) => note.id === id)
    //   .map((noteFilter) => {
    //     noteFilter.archived = true
    //     return noteFilter
    //   })
    // //console.log(note)
    // this.setState((prevState) => {
    //   return {
    //     notes: [...prevState.notes, note],
    //   }
    // })
    this.setState(() => {
      return {
        notes: newNotes,
      }
    })
  }

  onActiveHandler(id) {
    const newNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = false
      }
      return note
    })
    this.setState(() => {
      return {
        notes: newNotes,
      }
    })
  }

  onSearchChangeEventHandler(event) {
    // console.log(event.target.value.length)
    //this.setState(() => this.state.notesFilterData = [])
    console.log(this.state.notes)
    let filterNotes = []
    if (event.target.value.length > 0) {
      let searchTitle = event.target.value.toLowerCase()
      filterNotes = this.state.notes.filter((e) => {
        let title = e.title.toLowerCase()
        return title.indexOf(searchTitle) !== -1
      })
    }
    this.setState(() => {
      return {
        notesFilterData: filterNotes,
      }
    })
  }

  // onSearchClickEventHandler = (e) => {
  //   if (this.node.current.contains(e.target)) {
  //     return
  //   }
  //   // this.setState({
  //   //   notes: [],
  //   // })
  // }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(), //this.state.notes.length + 1,
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      }
    })
  }

  render() {
    return (
      <div className='note-app'>
        <div className='note-app__header'>
          <h1>Notes</h1>
          <div className='note-search'>
            <input
              type='text'
              placeholder='Name'
              value={this.state.title}
              onChange={this.onSearchChangeEventHandler}
              // onClick={this.onSearchClickEventHandler}
              // ref={this.node}
            />
          </div>
        </div>
        <div className='note-app__body'>
          <NotesInput addNote={this.onAddNoteHandler} />
          <h2>Notes Aktif</h2>
          <NotesActiveList
            notes={
              this.state.notesFilterData.length !== 0
                ? this.state.notesFilterData
                : this.state.notes
            }
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            onActive={this.onActiveHandler}
          />
          <h2>Notes Arsip</h2>
          <NotesArchiveList
            notes={
              this.state.notesFilterData.length !== 0
                ? this.state.notesFilterData
                : this.state.notes
            }
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            onActive={this.onActiveHandler}
          />
        </div>
      </div>
    )
  }
}

export default NotesApp
