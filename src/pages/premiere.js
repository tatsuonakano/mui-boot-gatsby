import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import {
  imgcontentmargin,
  pageindex,
} from "./style.module.scss"


const Premiere = () => (
  <Layout>

    <h1 className={pageindex}>Premiere Pro</h1>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/pre.png"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
  </Layout>
)

export default Premiere
