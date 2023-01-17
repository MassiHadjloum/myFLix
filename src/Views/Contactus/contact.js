import React from 'react'
import { Helmet } from 'react-helmet';
import './contact.css'

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta name="title" content={"List des film"} data-react-helmet="true" />
        <meta name="description" content={"list de recent film"} data-react-helmet="true" />
        <meta property="og:title" content={"List des film"} data-react-helmet="true" />
        <meta property="og:description" content={"list de recents films"} data-react-helmet="true" />
        <meta property="og:image" content={""} data-react-helmet="true" />
        <meta name="robots" content={"index"} />
        <meta name="keywords" content={"flix"} />
        <link rel="canonical" href={"https://myflix-massihadjloum-gmailcom.vercel.app/movies-list"} />
        {/* <link rel="preload" fetchpriority="high" href={metaData?.firstBlock?.img} as='image' />
        <link rel="preload" fetchpriority="high" href={logoDark} as='image' />
        <link rel="preload" fetchpriority="high" href={logowhite} as='image' /> */}
        {/* <title>{metaData?.titePage}</title> */}
      </Helmet>
      <div className='contact-composant'>
      <section class="container contacteznous">
        <div class="row">
          <div class="col-md-6">
            <div class="contact_info">
              <h5 class="form-h5-title">
                Contactez-Nous (ou pas)
              </h5>
              <p class="form-contact_info-desc">
                Un super chouette en droit.
                <br />profitez du beau temps,
                <br /> n'hésitez pas à nous laisser vos coordonnées et
                <br />un message expliquant votre choix.
              </p>
              <ul class="social_list">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>

              <ul class="icon_list pt50">
                <li>
                  <i class="fas fa-map-marked-alt"></i>
                  <span>
                    Rue des petits oiseaux 56
                    <br /> 1989 Houtsiplou (Belgique)
                  </span>
                </li>
                <li>
                  <i class="fas fa-mobile-alt"></i>
                  <span>
                    <strong>0499/99.99.99</strong>
                  </span>
                </li>
                <li>
                  <i class="far fa-envelope"></i>
                  <span>
                    <strong>info@pouet.org</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <p>
              <div class="contact_form">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Nom" />
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="E-mail" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Sujet" />
                </div>
                <div class="form-group">
                  <textarea class="form-control" cols="4" rows="4" placeholder="Message"></textarea>
                </div>
                <div class="form-group text-right">
                  <button class="btn btn-rounded btn-primary">Envoyer</button>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Contact