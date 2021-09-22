import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import {
  pageindex,
  imgcontentmargin,
} from "./style.module.scss"


const Lightroom = () => (
  <Layout>

    <h1 className={pageindex}>Lightroom</h1>
    <p>一眼レフカメラにてRAW画像形式で撮影・RAW現像を行い、jpeg形式にて書き出しました。Lightroomの作例です</p>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/lr-1.jpg"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/lr-2.jpg"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/lr-3.jpg"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/lr-4.jpg"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
    <div className={imgcontentmargin}>
      <StaticImage
        src="../images/lr-5.jpg"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
      />
    </div>
  </Layout>
)

export default Lightroom
