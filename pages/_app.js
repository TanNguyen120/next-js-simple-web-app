
// globals css là các định dạng css được dùng bởi mọi components trong web app
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
