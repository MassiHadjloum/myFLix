import React from 'react'
import { Helmet } from 'react-helmet';

const FAQ = () => {
  return (
    <>
    <Helmet>
        <meta name="title" content={"Faq"} data-react-helmet="true" />
        <meta name="description" content={"list des question les plus posées par nos utilisateur"} data-react-helmet="true" />
        <meta property="og:title" content={"Faq"} data-react-helmet="true" />
        <meta property="og:description" content={"list des question les plus posées par nos utilisateur"} data-react-helmet="true" />
        <meta property="og:image" content={""} data-react-helmet="true" />
        <meta name="robots" content={"index"} />
        <meta name="keywords" content={"faq"} />
        <link rel="canonical" href={"https://myflix-massihadjloum-gmailcom.vercel.app/faq"} />
        {/* <link rel="preload" fetchpriority="high" href={metaData?.firstBlock?.img} as='image' />
        <link rel="preload" fetchpriority="high" href={logoDark} as='image' />
        <link rel="preload" fetchpriority="high" href={logowhite} as='image' /> */}
        {/* <title>{metaData?.titePage}</title> */}
      </Helmet>
    </>
  )
}

export default FAQ