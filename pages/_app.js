import { AppContextProvider } from "../state/appContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <div>{<Component {...pageProps} />}</div>
    </AppContextProvider>
  );
}
