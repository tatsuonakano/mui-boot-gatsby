import * as React from "react"
import Layout from "../components/layout"
import {
  TextField,
  Button,
} from '@material-ui/core';
import {
  pageindex,
  inquirybgcoler,
  margin,
} from "./style.module.scss"

const Inquiry = () => (
  <Layout>
    <h1 className={pageindex}>お問い合わせ</h1>
    <form className={inquirybgcoler} id="ContactForm" action="">
      <div className={margin}>
        <TextField
          required
          fullWidth
          id="Username"
          label="お名前"
          color="primary"
        />
      </div>

      <div className={margin}>
        <TextField
          required
          fullWidth
          id="MailAddress"
          label="メールアドレス"
          color="primary"
        />
      </div>

      <div className={margin}>
        <TextField
          fullWidth
          id="PhoneNumber"
          label="電話番号"
          color="primary"
        />
      </div>

      <div className={margin}>
        <TextField
          required
          fullWidth
          rows={15}
          multiline
          id="Contact"
          label="お問合せ内容"
          color="primary"
        />
      </div>

      <div className={margin}>
        <Button variant="contained" href="/" size="large" color="primary">送信</Button>
      </div>
    </form>


  </Layout>
)

export default Inquiry
