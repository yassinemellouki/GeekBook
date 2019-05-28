import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as bookActions from '../redux/actions/bookActions';
const uuidv4 = require('uuid/v4');

class Footer extends Component {
  state = {
    newBook: [],
  };

  onSubmit = e => {
    e.preventDefault();
		let bookId = this.props.books.books.length + 1;
    const target = e.target;
    let id = bookId.toString();
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let price = document.getElementById('book-price').value,
    newBook = {id, title, author, cover: 'https://placehold.it/500', price};
		this.props.dispatch(bookActions.addBook(newBook));
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-price').value = '';
  };


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
function mapStateToProps(state){
	return {
		books: state.books
	}
}
export default connect(mapStateToProps)(Footer);
