import Nav from '../../components/nav'
import Footer from '../../components/footer'
import { csrfToken } from 'next-auth/client'

const SigninPage = ({ csrfToken }) => (
  <>
    <Nav />
    <main>
      <h1>SigninPage.js Demo</h1>
      <div>
        <form action="/api/auth/callback/login_with_u_p" method="post">
        <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
          <label for="username">username:</label><br />
          <input type="text" id="username" name="username"/><br />
            <label for="password">password:</label><br />
            <input type="password" id="password" name="password"/>
            <input type="submit" value="submit"/>
      </form>
      </div>
    </main>
        <Footer />
  </>
)
SigninPage.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}

export default SigninPage;
