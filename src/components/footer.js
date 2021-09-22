//footer.js
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; // ← 追加
import {
  center,
} from './layout.module.scss';

const Footer = () => (

  <>
    <footer className={center}>
      © {new Date().getFullYear()}, Built with
    {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  </>
)

export default Footer
