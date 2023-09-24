import Footer from "Components/Footer/footer";
import { ReactComponent as Instagram } from "Assets/Images/instagram.svg";
import { ReactComponent as Facebook } from "Assets/Images/facebook.svg";
import { ReactComponent as Twitter } from "Assets/Images/twitter.svg";
import { ReactComponent as BackOnTop } from "Assets/Images/backOnTop.svg";
import { ContentInner } from "Components/Footer/footer.styles";
export function FooterContainer() {
  return (
    <Footer>
      <Footer.TitleContainer>
        <Footer.Title>FOLLOW ME</Footer.Title>
      </Footer.TitleContainer>
      <Footer.Content>
        <ContentInner>
          <Footer.SocialMediasContainer>
            <Footer.SocialMedia>
              <Instagram />
            </Footer.SocialMedia>
            <Footer.SocialMedia>
              <Facebook />
            </Footer.SocialMedia>
            <Footer.SocialMedia>
              <Twitter />
            </Footer.SocialMedia>
          </Footer.SocialMediasContainer>
          <Footer.NamesContainer>
            <Footer.Owner>
              COPYRIGHTS &copy; NICO INOCALLA PHOTOGRAPHY 2022
            </Footer.Owner>
            <Footer.Developer>
              DEVELOPED & DESIGN BY CLARK INOCALLA
            </Footer.Developer>
          </Footer.NamesContainer>
          <Footer.BackOnTopContainer>
            <BackOnTop />
          </Footer.BackOnTopContainer>
        </ContentInner>
      </Footer.Content>
    </Footer>
  );
}

// Created by Clark Inocalla. &copy; 2021
