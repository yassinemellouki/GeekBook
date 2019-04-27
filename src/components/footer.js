import React, {Component} from 'react';
const uuidv4 = require('uuid/v4');

class Footer extends Component {
  state = {
    newBook: [],
  };

  onSubmit = e => {
    e.preventDefault();
    const target = e.target;
    let id = uuidv4();
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let price = document.getElementById('book-price').value;
    this.setState({
      newBook: {id, title, author, cover: 'https://placehold.it/500', price},
    });
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-price').value = '';
  };

  componentDidUpdate() {
		window.localStorage.setItem("new_book", JSON.stringify(this.state.newBook))
    console.log(this.state.newBook);
		location.reload()
  }
  render() {
    return (
      <footer>
        <div className="container">
          <div className="add-form">
            <h1>Add a New Book:</h1>
            <form onSubmit={this.onSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="book-title">Title:</label>
                <input
                  type="text"
                  placeholder="Turbo Pascal 7: The Complete Reference"
                  required
                  name="book-title"
                  id="book-title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="book-author">Writen by:</label>
                <input
                  type="text"
                  placeholder="Stephen K. O'Brien"
                  required
                  name="book-author"
                  id="book-author"
                />
              </div>
              <div className="form-group">
                <label htmlFor="book-price">Price:</label>
                <input
                  type="text"
                  placeholder="6,5"
                  pattern="^\d+(,\d{1,2})?$"
                  required
                  name="book-price"
                  id="book-price"
                />
              </div>
              <div className="form-group btn-form">
                <input
                  type="submit"
                  value="Add To The Store"
                  name="submit"
                  id="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
