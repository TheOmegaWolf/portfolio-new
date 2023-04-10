import "@/styles/globals.css";
import "@/styles/flex.css";
export default function App({ Component, pageProps }) {
  return (
    // <main className={Fjalla.className}>
    <Component {...pageProps} />
    // </main>
  );
}
