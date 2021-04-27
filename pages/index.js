import { useState } from "react";

import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 75%px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsla(216, 27%, 17%, 1);
  flex-direction: column;
`;

const InnerContainer = styled.div`
  width: clamp(500px, 80%, 800px);
`;

const Form = styled.form``;

const Launching = styled.p`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: hsla(216, 27%, 17%, 1);
  background: white;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 800;
`;

const FormContainer = styled.div`
  margin-top: 2rem;
  input {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    background: white;
    border: none;
    outline: none;
  }

  .btn {
    outline: none;
    border: none;
    padding: 0.6rem 1rem;
  }

  h3 {
    margin-bottom: 1rem;
  }
`;

export default function Home() {
  const [email, setEmail] = useState("");
  const url = "https://api.airtable.com/v0/appYGboIPg9GIXpaX/Interest";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY}`,
        },
        body: JSON.stringify({ fields: { Email: email } }),
      });
      const data = await res.json();
      setEmail("");
      alert("Thanks! We will let you know when basextend is in alpha :)");
    } else {
      alert("please input a real email...");
    }
  };

  return (
    <Container>
      <Head>
        <title>basextend</title>
        <link rel='shortcut icon' href='/static/favicon.ico' />
      </Head>
      <InnerContainer>
        <div>
          <Launching>Launching June 2021</Launching>
        </div>
        <Title>🚀 basextend 🚀</Title>
        <div className='hero-container'>
          <p>
            Build your own custom browser extension to query and add data to
            your Airtable base!
          </p>
          <img
            src='/images/airtable-extension.gif'
            alt=''
            width='100%'
            height='100%'
          />
        </div>
        <FormContainer>
          <h3>Sign up for alpha</h3>
          <Form action='submit' onSubmit={handleSubmit}>
            <input
              className='email'
              type='text'
              placeholder='your@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type='submit' className='btn' value='sign up' />
          </Form>
        </FormContainer>
      </InnerContainer>
    </Container>
  );
}
