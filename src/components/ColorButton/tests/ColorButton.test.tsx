import React from 'react';
import { render } from '@testing-library/react';

import ColorButton from '../ColorButton';

const testId = 'testingColorButton';

type ColorButtonProps = React.ComponentProps<typeof ColorButton>;

const renderComponent = (props: ColorButtonProps = {}) => render(
  <ColorButton
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ColorButton', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
