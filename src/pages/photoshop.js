import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import {
  pageindex,
  imgcontentmargin,
} from "./style.module.scss"

const Photoshop = () => (
  <Layout>

    <h1 className={pageindex}>Photoshop</h1>
    <p>photoshopの作例です</p>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/a.jpg"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/b.jpg"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/c.jpg"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/d.jpg"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
  </Layout>
)

export default Photoshop
