import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

import { LayoutChild } from "../../types/types"

const Layout = ({ children }: LayoutChild) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
