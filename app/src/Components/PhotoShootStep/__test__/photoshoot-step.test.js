import PhotoShootStep from '../photoshoot-step';
import { render, cleanup } from '@testing-library/react';
import React from 'react';
import photoshootImg from 'Assets/Images/photoshoot_img.jpg';
import { steps } from 'Components/PhotoShootStep/photoshoot-step-data';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

afterEach(cleanup);
describe('<PhotoShootStep />', () => {
  it('should render <PhotoShootStep /> with data populated', () => {
    const { container, getByText } = render(
      <PhotoShootStep>
        <PhotoShootStep.Left>
          <PhotoShootStep.Outer>
            <PhotoShootStep.Title>This block is a title</PhotoShootStep.Title>
            <PhotoShootStep.SubTitle>Subtitle here</PhotoShootStep.SubTitle>
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

        <PhotoShootStep.Right isMobile={true}>
          <PhotoShootStep.Image src={photoshootImg} />
        </PhotoShootStep.Right>

        <PhotoShootStep.SvgWave>
          <PhotoShootStep.SvgInner>Svg content here</PhotoShootStep.SvgInner>
        </PhotoShootStep.SvgWave>
      </PhotoShootStep>
    );

    expect(getByText('This block is a title')).toBeTruthy();
    expect(getByText('Subtitle here')).toBeTruthy();
    expect(getByText('RESERVE YOUR DATE')).toBeTruthy();
    expect(getByText('Svg content here')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('should render <PhotoShootStep /> with data populated', () => {
    const { container, queryByText } = render(
      <PhotoShootStep>
        <PhotoShootStep.Right isMobile={false}>
          I am hidden
        </PhotoShootStep.Right>
      </PhotoShootStep>
    );

    expect(queryByText('I am hidden')).toBeFalsy();
    expect(container).toMatchSnapshot();
  });

  it('should not render the pseudo element (upside down triangle) in smaller device', () => {
    const tree = renderer.create(<PhotoShootStep isMobile={false} />).toJSON();

    expect(tree).toHaveStyleRule('display', 'none', {
      modifier: '::before',
    });
  });

  it('should render the pseudo element (upside down triangle) in bigger device', () => {
    const tree = renderer.create(<PhotoShootStep isMobile={true} />).toJSON();

    expect(tree).toHaveStyleRule('display', 'block', {
      modifier: '::before',
    });
  });
});
