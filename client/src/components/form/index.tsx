import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../button";
import TextArea from "../TextArea";
import InputText from "../textInput";
import { Form } from "./form.style";

function FORM() {
  const router = useRouter();
  const [loading, setloading] = useState(false);

  const [state, setstate] = useState({
    author: "",
    tittle: "",
    description: "",
  });
  const [error, seterror] = useState({
    author: "",
    tittle: "",
    description: "",
  });

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
      .post("/book", state)
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
      <h1>Add Book</h1>
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

export default FORM;
