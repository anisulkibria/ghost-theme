import './styles/bootstrap.min.css'
import './styles/fontawesome.min.css'
import './styles/brands.min.css'
import './styles/main.min.css'
import { Roboto, Roboto_Slab } from 'next/font/google'
import Script from 'next/script'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })
const roboto_slab = Roboto_Slab({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })

export const metadata = {
  title: 'Ghost Theme',
  description: 'Showcase of Custom Ghost CMS Themes, Developed by Anisul Kibria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
      <Script src="./js/jquery-3.5.1.js" />
      <Script src="./js/bootstrap.min.js" />
      <Script src="./js/libs.js" />
      <Script src="./js/chefee.js" />
    </html>
  )
}
