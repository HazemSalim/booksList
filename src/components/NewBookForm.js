import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { /*addBook*/ dispatch } = useContext(BookContext);
  const [book, setBook] = useState({ title: "", author: "" });

  const handleSubmit = e => {
    e.preventDefault();

    //addBook(book);
    dispatch({ type: "ADD_BOOK", book });
    setBook({ title: "", author: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={book.title}
        required
        onChange={e => setBook({ ...book, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="author name"
        value={book.author}
        required
        onChange={e => setBook({ ...book, author: e.target.value })}
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
