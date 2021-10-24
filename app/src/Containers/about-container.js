import nicoImgOne from "Assets/Images/nico_bkg.jpg";
import nicoImgTwo from "Assets/Images/nico_img_2.jpg";
import About from "Components/About/about";

export function AboutContainer() {
  return (
    <About>
      <About.Left>
        <About.ImageOne>
          <About.Image src={nicoImgOne} padTop="98.38%" width="100%" />
          <About.ImageTwo options={{ threshold: 0.5 }}>
            <About.Image src={nicoImgTwo} padTop="97.78%" width="100%" />
          </About.ImageTwo>
        </About.ImageOne>
      </About.Left>

      <About.Right>
        <About.Description
          options={{ threshold: 0.3, rootMargin: "15% 0px 0px 0px" }}
        >
          My name is Nico Inocalla, and I’m a photographer based in
          Regina,Saskatchewan. I started photography when I was in high school,
          and I totally fell in love with it. Until now, I can still remember
          the day that my photography teacher handed me her camera. In the past
          years, I began taking more portrait photos, architectures, and
          wildlife to expose *myself* and gain experiences in the photography
          field.
          {<br />}
          {<br />}
          Now that I have gained confidence and experiences as a photographer, I
          specialize in model portfolio, engagement, maternity, and family
          photos. *add a sentence or two on why you chose to specialize on
          these; like what do you like to capture from these audiences?* Most of
          the time, I like to do my photoshoots outdoors despite the
          unpredictable nature of portrait photography outdoors. When I’m
          outside, I feel like I always have a blank canvas and each natural
          element brings *an entirely new colour to my palette.
          {<br />}
          {<br />}
          When it comes to editing, I don’t really have a particular editing or
          visual style;* my style is likely more in how I approach my subjects.
          It’s important for me what one single photograph has to say. I like to
          play around with *colours, textures, light, and softness of my
          photographs.
          {<br />}
          {<br />}I am a very friendly and sociable person.* I always try to
          make my clients feel more comfortable and have a lot of fun during the
          photoshoot session. Being able to capture emotion, character, and true
          beauty in people are what matters for me as a photographer.
          photographs.
        </About.Description>
      </About.Right>
    </About>
  );
}
