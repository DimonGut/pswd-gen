import React, { useState } from 'react';

import { generatePassword } from '../../utils/generatePassword';
import ResultField from '../ResultField';
import RangeSlider from '../RangeSlider';
import SettingsBar from '../SettingsBar';
import ColorButton from '../ColorButton';
import classes from './GenerationForm.module.scss';

const GenerationForm: React.FC = () => {
  const [result, setResult] = useState('Нажмите кнопку Сгенерировать');
  const [length, setLength] = useState(16);
  const [settings, setSettings] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  const generate = () => {
    const {
      uppercase, lowercase, numbers, symbols,
    } = settings;
    setResult(generatePassword(length, uppercase, lowercase, numbers, symbols));
  };
  return (
    <form className={classes.generationForm}>
      <h1 className={classes.formHeader}>Password Generator</h1>
      <ResultField
        value={result}
      />
      <RangeSlider
        length={length}
        changed={setLength}
      />
      <SettingsBar
        params={settings}
        updateParams={setSettings}
      />
      <ColorButton
        buttonName="сгенерировать пароль"
        action={generate}
      />
    </form>
  );
};

export default GenerationForm;
