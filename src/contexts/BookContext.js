import React, {
  createContext,
  /*useState,*/ useReducer,
  useEffect
} from "react";
import { bookReducer } from "../Reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // const [books, setBooks] = useState([
  //   { title: "name of the wind", author: "patrick rothfuss", id: 1 },
  //   { title: "the final empire", author: "brandon sanderson", id: 2 }
  // ]);
  // const addBook = book => {
  //   book.id = uuid();
  //   setBooks([...books, book]);
  // };
  // const removeBook = id => {
  //   setBooks(books.filter(book => book.id !== id));
  // };

  return (
    <BookContext.Provider value={{ books, dispatch /*addBook, removeBook*/ }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
