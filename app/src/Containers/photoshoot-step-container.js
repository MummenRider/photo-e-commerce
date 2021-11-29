import PhotoShootStep from 'Components/PhotoShootStep/photoshoot-step';
import { useMediaQuery } from 'react-responsive';
import { steps } from 'Components/PhotoShootStep/photoshoot-step-data';
import photoshootImg from 'Assets/Images/photoshoot_img.jpg';

export function PhotoShootStepContainer() {
  const isMobile = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <PhotoShootStep isMobile={isMobile}>
      <PhotoShootStep.Left>
        <PhotoShootStep.Outer>
          <PhotoShootStep.Title>
            So, how <br /> does it work
          </PhotoShootStep.Title>
          <PhotoShootStep.SubTitle>
            Steps to your <span>dream</span> photoshoot!
          </PhotoShootStep.SubTitle>
        </PhotoShootStep.Outer>
        <PhotoShootStep.Inner>
          <PhotoShootStep.List>
            {steps.map((step) => (
              <PhotoShootStep.Item key={step.id}>
                {step.content}
              </PhotoShootStep.Item>
            ))}
          </PhotoShootStep.List>
          <PhotoShootStep.ContactBtn>Contact me</PhotoShootStep.ContactBtn>
        </PhotoShootStep.Inner>
      </PhotoShootStep.Left>

      <PhotoShootStep.Right isMobile={isMobile}>
        <PhotoShootStep.Image src={photoshootImg} />
      </PhotoShootStep.Right>

      <PhotoShootStep.SvgWave>
        <PhotoShootStep.SvgInner>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'
            ></path>
          </svg>
        </PhotoShootStep.SvgInner>
      </PhotoShootStep.SvgWave>
    </PhotoShootStep>
  );
}
