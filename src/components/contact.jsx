import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

 


function BasicExample() {
    const navHome = useNavigate();
  const [details, setDetails] = useState({
    fName: "",
    email: "",
    phone: "",
    query: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { fName, lName, email, query } = details;

    const res = await fetch(
      "https://portfolio-c3c08-default-rtdb.firebaseio.com/form.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
          query,
        }),
      }
    );
    alert("your responce is recorded")
    navHome("/");
  };
  return (
    <div className="full">
      <Form>
      <Form.Text className="text-muted">
           please feel free to contace me on +91 7795585891 or <a href='https://mailto:b.vivek47@gmail.com'>b.vivek47@gmail.com</a>
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setDetails({ ...details, fName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Phone number"
            onChange={(e) => setDetails({ ...details, lName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"  
            placeholder=" Please enter your query"
            onChange={(e) => setDetails({ ...details, query: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={PostData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default BasicExample;