import React from 'react';
import { render } from '@testing-library/react';

import SettingsBar from '../SettingsBar';

const testId = 'testingSettingsBar';

type SettingsBarProps = React.ComponentProps<typeof SettingsBar>;

const renderComponent = (props: SettingsBarProps = {}) => render(
  <SettingsBar
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SettingsBar', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
