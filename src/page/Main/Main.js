import React from 'react';
import { Container, NewsCard } from './styles';
import {ReactComponent as IconFacebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as IconMessenger} from '../../assets/icons/messenger.svg';
import {ReactComponent as IconTwitter} from '../../assets/icons/twitter.svg';
import {ReactComponent as IconLinkedin} from '../../assets/icons/linkedin.svg';
import {ReactComponent as IconEmail} from '../../assets/icons/email.svg';
import {ReactComponent as IconWhatsapp} from '../../assets/icons/whatsapp.svg';
import imgWriter from '../../assets/writer.png';

function Main() {
  return (<Container>
    <div>
      <NewsCard>
        <div className="container-icons">
          <IconFacebook/>
          <IconTwitter/>
          <IconLinkedin/>
          <IconMessenger/>
          <IconWhatsapp/>
          <IconEmail/>
        </div>
        <h2>WhatsApp muda regras de privacidade e app deixa de ser o mais baixado do Brasil</h2>
        <div className="writer">
          <div>
            <img src={imgWriter} alt="escritor"/>
            <img src={imgWriter} alt="escritor"/>
            <img src={imgWriter} alt="escritor"/>
            <img src={imgWriter} alt="escritor"/>
          </div>
          <div>
            <span>Fernando Nakagawa, Fernando Nakagawa, Fernando Nakagawa, Fernando Nakagawa</span>
            <span>13 de setembro de 2021 às 08:45</span>
          </div>
        </div>
        <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </NewsCard>
      <NewsCard>
        <div className="container-icons">
          <IconFacebook/>
          <IconTwitter/>
          <IconLinkedin/>
          <IconMessenger/>
          <IconWhatsapp/>
          <IconEmail/>
        </div>
        <h2>WhatsApp muda regras de privacidade e app deixa de ser o mais baixado do Brasil</h2>
        <div className="writer">
          <div>
            <img src={imgWriter} alt="escritor"/>
            <img src={imgWriter} alt="escritor"/>
            <img src={imgWriter} alt="escritor"/>
          </div>
          <div>
            <span>Fernando Nakagawa, Fernando Nakagawa, Fernando Nakagawa</span>
            <span>13 de setembro de 2021 às 08:45</span>
          </div>
        </div>
        <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </NewsCard>
      <NewsCard>
        <div className="container-icons">
          <IconFacebook/>
          <IconTwitter/>
          <IconLinkedin/>
          <IconMessenger/>
          <IconWhatsapp/>
          <IconEmail/>
        </div>
        <h2>WhatsApp muda regras de privacidade e app deixa de ser o mais baixado do Brasil</h2>
        <div className="writer">
          <div>
            <img src={imgWriter} alt="escritor"/>
            <img src={imgWriter} alt="escritor"/>
          </div>
          <div>
            <span>Fernando Nakagawa, Fernando Nakagawa</span>
            <span>13 de setembro de 2021 às 08:45</span>
          </div>
        </div>
        <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </NewsCard>
      <NewsCard>
        <div className="container-icons">
          <IconFacebook/>
          <IconTwitter/>
          <IconLinkedin/>
          <IconMessenger/>
          <IconWhatsapp/>
          <IconEmail/>
        </div>
        <h2>WhatsApp muda regras de privacidade e app deixa de ser o mais baixado do Brasil</h2>
        <div className="writer">
          <div>
            <img src={imgWriter} alt="escritor"/>
          </div>
          <div>
            <span>Fernando Nakagawa</span>
            <span>13 de setembro de 2021 às 08:45</span>
          </div>
        </div>
        <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </NewsCard>
    </div>
  </Container>);
}

export default Main;