import React from 'react';

import Checkbox from '../Checkbox';
import classes from './SettingsBar.module.scss';

export type Settings = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

type SettingsBarProps = {
  params: Settings;
  updateParams: (sttngs: Settings) => void;
};

const SettingsBar: React.FC<SettingsBarProps> = (props) => {
  const {
    uppercase, lowercase, numbers, symbols,
  } = props.params;
  const { updateParams } = props;
  return (
    <div className={classes.component}>
      <span className={classes.title}>Настройки</span>
      <Checkbox
        id="uppercase"
        checked={uppercase}
        label="Использовать Заглавные"
        onChange={() => updateParams({ ...props.params, uppercase: !uppercase })}
        disable={!lowercase && !numbers && !symbols}
      />
      <Checkbox
        id="lowercase"
        checked={lowercase}
        label="Использовать Прописные"
        onChange={() => updateParams({ ...props.params, lowercase: !lowercase })}
        disable={!uppercase && !numbers && !symbols}
      />
      <Checkbox
        id="numbers"
        checked={numbers}
        label="Использовать Цифры"
        onChange={() => updateParams({ ...props.params, numbers: !numbers })}
        disable={!uppercase && !lowercase && !symbols}
      />
      <Checkbox
        id="symbols"
        checked={symbols}
        label="Использовать Символы"
        onChange={() => updateParams({ ...props.params, symbols: !symbols })}
        disable={!uppercase && !lowercase && !numbers}
      />
    </div>
  );
};

export default SettingsBar;
