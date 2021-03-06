export function addBook(book) {
  return {type: 'ADD_BOOK', book};
}
export function removeBook(bookId) {
  return {type: 'REMOVE_BOOK', bookId};
}
export function removeFavBook(bookId) {
  return {type: 'REMOVE_FAV_BOOK', bookId};
}
export function addToFavorite(bookId) {
  return {type: 'ADD_TO_FAVORITE', bookId};
}
export function addToBag(bookId) {
  return {type: 'ADD_TO_BAG', bookId};
}
export function addToFavBag(bookId) {
  return {type: 'ADD_TO_FAV_BAG', bookId};
}
export function removeFromFavBag(bookId) {
  return {type: 'REMOVE_FROM_FAV_BAG', bookId};
}
