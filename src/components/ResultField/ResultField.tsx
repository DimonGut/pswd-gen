import React from 'react';

import classes from './ResultField.module.scss';

type ResultFieldProps = {
  value: string;
};

const ResultField: React.FC<ResultFieldProps> = (props) => (
  <div className={classes.component}>
    <div className={classes.result}>{props.value}</div>
    {/* <div className={classes.result_info}>Info</div> */}
    {/* <div className={classes.btn_copy}>копировать</div> */}
  </div>
);

export default ResultField;
