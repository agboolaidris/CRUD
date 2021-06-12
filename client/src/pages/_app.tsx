import { GlobalStyle } from "../styles/globalstyle";
import { BookProvider } from "../context/book";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

function MyApp({ Component, pageProps }) {
  return (
    <BookProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </BookProvider>
  );
}

export default MyApp;
