import React from 'react';
import { render } from '@testing-library/react';

import GenerationForm from '../GenerationForm';

const testId = 'testingGenerationForm';

type GenerationFormProps = React.ComponentProps<typeof GenerationForm>;

const renderComponent = (props: GenerationFormProps = {}) => render(
  <GenerationForm
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент GenerationForm', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
