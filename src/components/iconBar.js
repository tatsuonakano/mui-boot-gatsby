//sub_bar.js
import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; // ← 追加
import {
  iconbarstyle,
  icontitle,
  iconlink,
} from './layout.module.scss';
import {
  List,
  ListItem,
} from '@material-ui/core';


const IconBar = () => (

  <>
    <aside className="col-2 d-none d-md-block">
      <nav className={iconbarstyle}>
        <div className={icontitle}>Adobe 作例</div>
        <List component="nav" aria-label="mailbox folders">
          <ListItem button divider>
            <Link className={iconlink} to="/photoshop/">Photoshop 作例</Link>
          </ListItem>
          <ListItem button divider>
            <Link className={iconlink} to="/illustrator/">Illustrator 作例</Link>
          </ListItem>
          <ListItem button divider>
            <Link className={iconlink} to="/xd/">XD 作例</Link>
          </ListItem>
          <ListItem button divider>
            <Link className={iconlink} to="/lightroom/">Lightroom 作例</Link>
          </ListItem>
          <ListItem button divider>
            <Link className={iconlink} to="/premiere/">Premiere 作例</Link>
          </ListItem>
        </List>

        <div className={icontitle}>ストックフォト</div>
        <List component="nav" aria-label="mailbox folders">
          <ListItem button divider>
            <Link className={iconlink} to="/stockphoto/">Adobe stock</Link>
          </ListItem>
        </List>

        <div className={icontitle}>使用技術解説</div>
        <List component="nav" aria-label="mailbox folders">
          <ListItem button divider>
            <Link className={iconlink} to="/technical/">Technical</Link>
          </ListItem>
        </List>

        <div className={icontitle}>サイトについて</div>
        <List component="nav" aria-label="mailbox folders">
          <ListItem button divider>
            <Link className={iconlink} to="/inquiry/">問い合わせ</Link>
          </ListItem>
          <ListItem button divider>
            <Link className={iconlink} to="/privact/">ポリシー</Link>
          </ListItem>
        </List>

      </nav>
    </aside>
  </>
)

export default IconBar
