import React from 'react'
import { Helmet } from 'react-helmet';
import 'faq.css'

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
        <section className="container">
            <h1 className="title-flix">Myflix</h1>

            <h1 className="title">FAQ</h1>

            <p className="text-lg text-center margin-top">Frequently Asked Question</p>

            <ul className="faq-accordion margin-inline text-md margin-top margin-bottom-1">
                <li>
                    <input className="faq-input" type="radio" name="faq" id="faq-1"/>
                    <label className="faq-label" htmlFor="faq-1">What is Myflix?<i className="fa fa-add"></i> </label>
                    <div className="faq-content">
                        <p>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
                            anime, documentaries, and more on thousands of internet-connected devices. <br/>
                            <br/>
                            You can watch as much as you want, whenever you want without a single commercial – all for
                            one low monthly price. There's always something new to discover and new TV shows and movies
                            are added every week!
                        </p>
                    </div>
                </li>

                <li>
                    <input className="faq-input" type="radio" name="faq" id="faq-2"/>
                    <label className="faq-label" htmlFor="faq-2">How much does Netflix cost?<i
                        className="fa fa-add"></i></label>
                    <div className="faq-content">
                        <p>The cost of using the service may vary depending on the website or service in question. Some
                            services may be entirely free to use, while others may offer a free trial period or a free
                            version with limited features. Other services may require a subscription or pay-per-use fee.
                            It is best to check the pricing page or contact customer support to confirm if there is a
                            cost associated with using the service.</p>
                    </div>
                </li>

                <li>
                    <input className="faq-input" type="radio" name="faq" id="faq-3"/>
                    <label className="faq-label" htmlFor="faq-3">How do I cancel my subscription?<i
                        className="fa fa-add"></i></label>
                    <div className="faq-content">
                        <p>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
                            netflix.com from your personal computer or on any internet-connected device that offers the
                            Netflix app, including smart TVs,
                            smartphones, tablets, streaming media players and game consoles. <br/>
                            <br/>
                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use
                            downloads to watch while you're on the go and without an internet connection. Take Netflix
                            with you anywhere.
                        </p>
                    </div>
                </li>


                <li>
                    <input className="faq-input" type="radio" name="faq" id="faq-5"/>
                    <label className="faq-label" htmlFor="faq-5">What can I watch on Netflix?<i
                        className="fa fa-add"></i></label>
                    <div className="faq-content">
                        <p>Myflix has an extensive library of feature films, documentaries, TV shows, anime,
                            award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>
                </li>

                <li>
                    <input className="faq-input" type="radio" name="faq" id="faq-6"/>
                    <label className="faq-label" htmlFor="faq-6">Is Myflix good for kids?<i
                        className="fa fa-add"></i></label>
                    <div className="faq-content">
                        <p>
                            The Myflix Kids experience is included in your membership to give parents control while kids
                            enjoy family-friendly TV shows and movies in their own space. <br/>
                            <br/>
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity
                            rating of content kids can watch and block specific titles you don’t want kids to see.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    </>



  )
}

export default FAQ
