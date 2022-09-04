import React from 'react'

class NotesInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onTitleChangeEventHandler(event) {
    // if(event.target.value)
    this.setState(() => {
      return {
        title: event.target.value,
      }
    })
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault()
    this.props.addNote(this.state)
  }
  render() {
    return (
      <div className='note-input'>
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className='note-input__title__char-limit'>
            Sisa Karakter {this.state.title.length}/50
          </p>
          <input
            className='note-input__title'
            type='text'
            placeholder='Tulis judul'
            value={this.state.title.substring(0, 49)}
            onChange={this.onTitleChangeEventHandler}
          />
          <input
            className='note-input__body'
            type='textarea'
            placeholder='Tuliskan deskripsi'
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type='submit'>Tambah</button>
        </form>
      </div>
    )
  }
}

export default NotesInput
