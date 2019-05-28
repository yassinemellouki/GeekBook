 let initialState = {
	 books: [
      {
        id: '1',
        title: 'HTTP: The Definitive Guide',
        author: 'David Gourley',
        cover: 'http',
        price: '46,61',
      },
      {
        id: '2',
        title: 'HTTP: The Definitive Guide',
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        cover: 'js',
        price: '35,52',
      },
      {
        id: '3',
        title: 'HTTP: The Definitive Guide',
        title:
          'The TCP/IP Guide: A Comprehensive, Illustrated Internet Protocols Reference',
        author: 'Charles M.Kozierok',
        cover: 'tcp_ip',
        price: '54,50',
      },
      {
        id: '4',
        title: 'HTTP: The Definitive Guide',
        title:
          'Node.js 8 the Right Way: Practical, Server-Side JavaSCript The Scales',
        author: 'Jim Wilson',
        cover: 'nodejs',
        price: '28,21',
      },
	 ],
    favorite: [],
		favBooksList: [],
    bag: [],
  };
export default function bookReducer(state = initialState, action){
	switch(action.type){
		case "ADD_BOOK":
			return Object.assign({}, state, {books: [...state.books, action.book]})
		case "REMOVE_BOOK":
			let newBooksList = state.books.filter(book=> book.id != action.bookId);
			let newFavoritesList = state.favorite.filter(fav=> fav != action.bookId);
			let newFavBookList = state.favBooksList.filter(fav=> fav.id != action.bookId);
			let newBagsList = state.bag.filter(bag=> bag.bagId != action.bookId);
			console.log(newFavBookList)
			return Object.assign({}, state, {bag: newBagsList, favorite: newFavoritesList, books: [...newBooksList], favBooksList: newFavBookList})
		case "REMOVE_FAV_BOOK":
			let newFavBooksList = state.favBooksList.filter(fav=> fav.id != action.bookId);
			let newFavoritesListTwo = state.favorite.filter(fav=> fav != action.bookId);
			return Object.assign({}, state, {favorite: newFavoritesListTwo, favBooksList: newFavBooksList} )
		case "ADD_TO_FAVORITE":
				let newFavList = state.favorite.filter(fav => fav != action.bookId);
			if(state.favorite.includes(action.bookId)){
				let newFavState = [...state.favorite, action.bookId],
						newFavsArray = newFavState.map((fv) => Number(fv)),
						books = state.books,
						favBooksList = state.favBooksList,
						newFavBooksList;
				state.books.forEach(function(book){
					if(newFavsArray.includes(Number(book.id))){
						newFavsArray.forEach(function(nfa){
						newFavBooksList = favBooksList.filter(nfv => nfv.id != nfa )
						})
					}
				})

				return Object.assign({}, state, {favorite: newFavList, favBooksList: newFavBooksList})
			}else{
				let newFavState = [...state.favorite, action.bookId],
						newFavsArray = newFavState.map((fv) => Number(fv)),
						books = state.books,
						favBooksList = state.favBooksList,
						newFavBooksList;

				for(let i=0; i < books.length; i++){
							if(newFavsArray.includes(action.bookId) == false){
								console.log("hello")
								let bookToAdd = books.filter(book => book.id == action.bookId )
								newFavBooksList = [...favBooksList, ...bookToAdd]
								console.log(bookToAdd)
								console.log(newFavBooksList)
								console.log(books)
								break;
							}
				}

				return Object.assign({}, state, {favorite: newFavState, favBooksList: newFavBooksList})
			}
		case "ADD_TO_BAG":
				let bagBookIndex = state.bag.findIndex( bg => bg.bagId === action.bookId )
			if(bagBookIndex === -1){
				return Object.assign({}, state, {bag: [...state.bag, {'bagId': action.bookId, 'count': 1}]})
			}else{
				let prevCount = state.bag[bagBookIndex].count;
				let newbags = state.bag.filter(bg => bg.bagId != action.bookId)
				return Object.assign({}, state, {bag: [...newbags, {'bagId': action.bookId, 'count': prevCount + 1}]})
			}
		default:
			return state;
	}
}
