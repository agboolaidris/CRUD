import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useBookDispatch } from "../../context/book";
import { Table } from "./bookList.style";

function BOOKLIST() {
  const [data, setdata] = useState([]);
  const dispatch = useBookDispatch();
  console.log(dispatch);
  useEffect(() => {
    axios
      .get("/book")
      .then((res: any) => {
        setdata(res.data);
        dispatch({ type: "UPDATE", payload: res.data });
      })
      .catch((err) => console.log(err.response));
  }, []);

  const handleDelete = (id: string) => {
    axios
      .delete(`/${id}`)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <Table>
      <thead>
        <th>Author</th>
        <th>Tittle</th>
        <th>Description</th>
        <th>Edit</th>
      </thead>
      <tbody>
        {data &&
          data.map((book) => (
            <tr key={book._id}>
              <td>{book.author}</td>
              <td>{book.tittle}</td>
              <td>{book.description}</td>
              <td>
                <p onClick={() => handleDelete(book._id)}>Delete</p>
                <Link href={`/edit/${book._id}`}>
                  <a>
                    <p>Update</p>
                  </a>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default BOOKLIST;
