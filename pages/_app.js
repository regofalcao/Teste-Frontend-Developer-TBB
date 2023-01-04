import "../styles/globals.css";
import localFont from "@next/font/local";
const myFont = localFont({ src: "../font/trebuc.woff" });

function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />;
    </main>
  );
}

export default MyApp;
