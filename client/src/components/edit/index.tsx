import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useBookState } from "../../context/book";
import { Button } from "../button";
import TextArea from "../TextArea";
import InputText from "../textInput";
import { Form } from "./form.style";

function EDIT() {
  const router = useRouter();
  const id = router.query.edit;
  const [loading, setloading] = useState(false);

  const { data } = useBookState();

  const [state, setstate] = useState({
    author: "",
    tittle: "",
    description: "",
    _id: "",
  });
  const [error, seterror] = useState({
    author: "",
    tittle: "",
    description: "",
  });
  useEffect(() => {
    if (data.length < 1) return;

    const book = data.find((book) => book._id === id);
    if (book) {
      setstate({
        ...state,
        tittle: book.tittle,
        author: book.author,
        description: book.description,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
    seterror({
      author: "",
      tittle: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .put(`/${id}`, state)
      .then(() => {
        setloading(false);
        router.push("/");
      })
      .catch((err) => {
        setloading(false);

        seterror(err.response.data);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Edit Book</h1>
      <InputText
        placeholder="The author name"
        onChange={handleChange}
        value={state.author}
        name="author"
        error={error.author}
      />
      <InputText
        placeholder="Tittle of the book"
        onChange={handleChange}
        value={state.tittle}
        name="tittle"
        error={error.tittle}
      />
      <TextArea
        placeholder="Information about the book"
        onChange={handleChange}
        value={state.description}
        name="description"
        error={error.description}
      />
      <Button disabled={loading}>{loading ? "loading" : "Submit"}</Button>
    </Form>
  );
}

export default EDIT;
