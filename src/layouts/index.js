import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider, injectGlobal } from 'styled-components'

import Hamburger from '../components/hamburger'

//import './index.css'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Oswald:400,500');

  html, body {
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }

  body {
    background: #000;
    font-family: Oswald, sans-serif;
    overflow: hidden;
  }

  #___gatsby,
  [data-reactroot] {
    min-height: 100vh;
  }
`

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
  },
  fonts: {
    serif: 'Helvethica Neue, serif',
    sansSerif: 'Oswald, sans-serif',
  },
}

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />

        <Hamburger />
        <div>
          {children()}
        </div>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
