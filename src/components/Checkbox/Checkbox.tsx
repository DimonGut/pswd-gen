import React from 'react';

import classes from './Checkbox.module.scss';

type CheckboxProps = {
  id: string;
  checked: boolean;
  label: string;
  onChange: () => void;
  disable: boolean;
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    id, checked, onChange, label, disable,
  } = props;
  return (
    <div className={classes.component}>
      <input
        id={id}
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
        disabled={disable}
      />
      <label
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
