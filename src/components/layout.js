import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'

//components
import Header from './header'
import Main from './mainContainer'
import Grid from './grid'
import SharedHeader from './sharedHeader'


//css
import './css/reset.css'
import './css/layout.css'
import './css/typography.css'
import './css/responsive.css'


const Layout = ({ children }) => (
  <>
    <Helmet
      title={`Sandvine React`}
      meta={[
        {
          name: 'description',
          content: 'Sandvine Implementation using React',
        },
        { name: 'keywords', content: 'Chris, Adamczyk' },
      ]}
    >
      <html lang="en" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix('/ico/apple-touch-icon.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix('/ico/favicon-32x32.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix('/ico/favicon-16x16.png')}
      />
      <link rel="manifest" href={withPrefix('ico/site.webmanifest')} />
      <link
        rel="mask-icon"
        href={withPrefix('ico/safari-pinned-tab.svg')}
        color="#535555"
      />
      <link rel="shortcut icon" href={withPrefix('ico/favicon.ico')} />
      <meta name="msapplication-TileColor" content="#535555" />
      <meta
        name="msapplication-config"
        content={withPrefix('ico/browserconfig.xml')}
      />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Header />
    <Main>
      <SharedHeader />
      <Grid>

      </Grid>
    </Main>

    {children}
  </>
)

export default Layout
