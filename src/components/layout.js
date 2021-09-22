/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
import Header from "./header"
import IconBar from "./iconBar"
import SubBar from "./subBar"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap-reboot.min.css'; // リセットcss
import 'bootstrap/dist/css/bootstrap.min.css'; // ← 追加bootstrap本体
import {
  bodystyle,
  mainbarstyle,
  center,
} from './layout.module.scss';
import {
  Button,
} from '@material-ui/core';
const Layout = ({ children }) => {

  return (
    <>
      <body className={bodystyle}>
        <Header />
        <div className="container">
          <div className="row">
            <IconBar />
            <main className="col-md-7 col-xs-12">
              <div className={mainbarstyle}>
                {children}
                <div className={center}>
                  <Button variant="contained" href="/" size="large">ホームへ戻る</Button>
                </div>
                <Footer />
              </div>
            </main>
            <SubBar />
          </div>
        </div>
      </body>
    </>
  )
}


export default Layout
