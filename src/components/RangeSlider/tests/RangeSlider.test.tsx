import React from 'react';
import { render } from '@testing-library/react';

import RangeSlider from '../RangeSlider';

const testId = 'testingRangeSlider';

type RangeSliderProps = React.ComponentProps<typeof RangeSlider>;

const renderComponent = (props: RangeSliderProps = {}) => render(
  <RangeSlider
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент RangeSlider', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
