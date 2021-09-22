import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import {
  List,
  ListItem,
} from '@material-ui/core';
import {
  pageindex,
  h2pageindex,
  iconlink,
} from "./style.module.scss"

<List component="nav" aria-label="mailbox folders">
  <ListItem button divider>
    <Link className={iconlink} to="/photoshop/">Photoshop 作例</Link>
  </ListItem>
</List>



const IndexPage = () => (
  <Layout>
    <h1 className={pageindex}>このサイトについて</h1>
    <List component="nav" aria-label="mailbox folders">
      <ListItem button divider><Link className={iconlink} to="/">ホーム</Link>
      </ListItem>
      <ListItem button divider><Link className={iconlink} to="inquiry">お問い合わせ</Link>
      </ListItem>
      <ListItem button divider><Link className={iconlink} to="privact">プライバシーポリシー</Link>
      </ListItem>
    </List>
    <h2 className={h2pageindex}>サイト内部使用技術解説</h2>
    <List component="nav" aria-label="mailbox folders">
      <ListItem button divider>
        <div><Link className={iconlink} to="technical">使用技術</Link></div>
      </ListItem>
    </List>

    <h2 className={h2pageindex}>ストックフォト</h2>
    <List component="nav" aria-label="mailbox folders">
      <ListItem button divider>
        <div><Link className={iconlink} to="stockphoto">Adobe stock</Link></div>
      </ListItem>
    </List>


    <h2 className={h2pageindex}>作例</h2>
    <List component="nav" aria-label="mailbox folders">
      <ListItem button divider>
        <div><Link className={iconlink} to="photoshop">Photoshop作例</Link></div></ListItem>
      <ListItem button divider><div><Link className={iconlink} to="lightroom">Lightroom作例</Link></div></ListItem>
      <ListItem button divider><div><Link className={iconlink} to="illustrator">Illustrator作例</Link></div></ListItem>
      <ListItem button divider><div><Link className={iconlink} to="xd">XD作例</Link></div></ListItem>
      <ListItem button divider><div><Link className={iconlink} to="premiere">Premiere Pro作例</Link></div>
      </ListItem>
    </List>

  </Layout>
)

export default IndexPage
