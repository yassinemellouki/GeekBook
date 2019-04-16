import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="add-form">
            <h1>Add a New Book:</h1>
            <form autoComplete="off">
              <div className="form-group">
                <label htmlFor="book-title">Title:</label>
                <input type="text" placeholder="Turbo Pascal 7: The Complete Reference" required name="book-title" id="book-title" />
              </div>
              <div className="form-group">
                <label htmlFor="book-author">Writen by:</label>
                <input type="text" placeholder="Stephen K. O'Brien" required name="book-author" id="book-author" />
              </div>
              <div className="form-group">
                <label htmlFor="book-price">Price:</label>
                <input type="text" placeholder="6,5" pattern="^\d+(,\d{1,2})?$" required name="book-price" id="book-price" />
              </div>
              <div className="form-group btn-form">
                <input type="submit" value="Add To The Store" name="submit" id="submit" />
              </div>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
