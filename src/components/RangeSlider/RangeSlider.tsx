import React, { Dispatch, SetStateAction } from 'react';

import classes from './RangeSlider.module.scss';

type RangeSliderProps = {
  length: number;
  changed: Dispatch<SetStateAction<number>>;
};

const RangeSlider: React.FC<RangeSliderProps> = (props) => {
  const { length, changed } = props;

  const updateLength: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    changed(parseInt(event.target.value, 10));
  };

  return (
    <div
      className={classes.component}
      data-min="4"
      data-max="32"
    >
      <div
        className={classes.length}
        data-length={length}
      >
        длина:
      </div>
      <input
        className={classes.range_slider}
        type="range"
        min="4"
        max="32"
        value={length}
        onChange={updateLength}
      />
    </div>
  );
};

export default RangeSlider;
