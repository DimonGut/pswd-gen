import React from 'react';
import { render } from '@testing-library/react';

import Checkbox from '../Checkbox';

const testId = 'testingCheckbox';

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

const renderComponent = (props: CheckboxProps = {}) => render(
  <Checkbox
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Checkbox', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
