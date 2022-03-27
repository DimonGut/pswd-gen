import React from 'react';
import { render } from '@testing-library/react';

import ResultField from '../ResultField';

const testId = 'testingResultField';

type ResultFieldProps = React.ComponentProps<typeof ResultField>;

const renderComponent = (props: ResultFieldProps = {}) => render(
  <ResultField
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ResultField', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
