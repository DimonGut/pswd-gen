import React from 'react';

import classes from './ColorButton.module.scss';

type ColorButtonProps = {
  buttonName: string;
  action: () => void;
};

const ColorButton: React.FC<ColorButtonProps> = (props) => {
  const { buttonName, action } = props;
  const pressButton: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    action();
  };
  return (
    <div className={classes.component}>
      <button
        className={classes.generate_btn}
        onClick={pressButton}
        type="button"
      >
        {buttonName}
      </button>
    </div>
  );
};

export default ColorButton;
