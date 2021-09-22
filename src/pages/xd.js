import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import {
  pageindex,
  imgcontentmargin,
} from "./style.module.scss"


const Xd = () => (
  <Layout>

    <h1 className={pageindex}>XD</h1>
    <p>XDの作例です</p>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/xd-a.png"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/xd-b.png"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/xd-c.png"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
  </Layout>
)

export default Xd
