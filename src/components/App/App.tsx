import React from 'react';

import GenerationForm from '../GenerationForm';
import classes from './App.module.scss';

const App: React.FC = () => (
  <main className={classes.component}>
    <GenerationForm />
  </main>
);

export default App;
