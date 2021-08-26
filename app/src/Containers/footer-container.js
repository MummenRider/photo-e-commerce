import Footer from "Components/Footer/footer";
import {
  siteMap,
  socialMediasOne,
  socialMediasTwo,
} from "Components/Footer/footer-data";

export function FooterContainer({ day, time }) {
  return (
    <Footer>
      <Footer.Column>
        <Footer.Description>Regina SK</Footer.Description>
        <Footer.Description>
          LOCAL TIME: {day} {time}
        </Footer.Description>
      </Footer.Column>

      <Footer.Row>
        <Footer.SiteMap>
          <Footer.TitleDescription>SITE MAP</Footer.TitleDescription>
          {siteMap.map((link) => (
            <Footer.Description key={link.id}>{link.site}</Footer.Description>
          ))}
        </Footer.SiteMap>

        <Footer.SocialMedias>
          <Footer.TitleDescription>SOCIAL MEDIAS</Footer.TitleDescription>
          <Footer.Row>
            <Footer.Column>
              {socialMediasOne.map((socialMedia) => (
                <Footer.Description key={socialMedia.id}>
                  {socialMedia.link}
                </Footer.Description>
              ))}
            </Footer.Column>
            <Footer.Column>
              {socialMediasTwo.map((socialMedia) => (
                <Footer.Description key={socialMedia.id}>
                  {socialMedia.link}
                </Footer.Description>
              ))}
            </Footer.Column>
          </Footer.Row>
        </Footer.SocialMedias>
      </Footer.Row>

      <Footer.Row direction="row">
        <Footer.Title>Get in touch</Footer.Title>
      </Footer.Row>
      <Footer.CopyRight>
        Created by Clark Inocalla. &copy; 2021
      </Footer.CopyRight>
    </Footer>
  );
}
