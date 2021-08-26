import { render } from "@testing-library/react";
import {
  siteMap,
  socialMediasOne,
  socialMediasTwo,
} from "Components/Footer/footer-data";
import Footer from "Components/Footer/footer";

describe("<Footer/>", () => {
  it("should render <Footer /> with data populated", () => {
    const { getByText } = render(
      <Footer>
        <Footer.Row>
          <Footer.Description>Regina SK</Footer.Description>
          <Footer.Description>GT LOCAL TIME</Footer.Description>
        </Footer.Row>
        <Footer.Row>
          <Footer.Column>
            {siteMap.map((link) => (
              <Footer.Description key={link.id}>{link.site}</Footer.Description>
            ))}
          </Footer.Column>
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
        <Footer.Row>
          <Footer.Title>Get in touch</Footer.Title>
        </Footer.Row>
      </Footer>
    );
    expect(getByText("Regina SK")).toBeTruthy();
    expect(getByText("GT LOCAL TIME")).toBeTruthy();
    expect(getByText("HOME")).toBeTruthy();
    expect(getByText("HOME")).toBeTruthy();
    expect(getByText("SERVICES")).toBeTruthy();
    expect(getByText("CONTACT")).toBeTruthy();
    expect(getByText("INSTAGRAM")).toBeTruthy();
    expect(getByText("FACEBOOK")).toBeTruthy();
    expect(getByText("TWITTER")).toBeTruthy();
    expect(getByText("LINKED IN")).toBeTruthy();
    expect(getByText("TIK-TOK")).toBeTruthy();
    expect(getByText("SNAPCHAT")).toBeTruthy();
    expect(getByText("Get in touch")).toBeTruthy();
  });
});
