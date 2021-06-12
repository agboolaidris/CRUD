import Link from "next/link";
import BookList from "../components/bookList";
import { Button } from "../components/button";

import { Container, Header } from "../styles/home.style";

export default function Home() {
  return (
    <Container>
      <Header>
        <Link href="/">
          <a>
            <Button>HOME</Button>
          </a>
        </Link>
        <Link href="/create">
          <a>
            <Button>ADD BOOK</Button>
          </a>
        </Link>
      </Header>
      <BookList />
    </Container>
  );
}
