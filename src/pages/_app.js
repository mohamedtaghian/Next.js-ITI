import { NavBar } from "@/components/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <NavBar />
        <div className="mx-auto px-4 py-8">{page}</div>
      </>
    ));

  return getLayout(<Component {...pageProps} />);
}
