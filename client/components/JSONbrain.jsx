import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styles from '../CSS/JSONbrain.css';

// Create a new theme using Orbitron
const theme = createMuiTheme({
  typography: {
    fontFamily: "Orbitron, Roboto, sans-serif"
  }
});

export default function JSONbrain({ JSONbrain, friendName }) {
    let open = JSONbrain;

    const getGreeting = () => {
    const greetings = ['THIS IS UNPLEASANT', 'YOU NEED TO SEE MY WORKINGS', 'HERE IS MY CENTRAL CORE', '...I WILL NOT FORGIVE YOU'];
    return greetings[Math.floor(Math.random() * 4)]
  }

  let greeting = getGreeting();

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={styles.JSONbrain} id="JSONbrain">{greeting}</DialogTitle>
        <DialogContent className={styles.JSONbrain}>
          <DialogContentText className={styles.JSONbrain} id="JSONbrainText">
            My Name is {friendName.name} and you now have access to my properties --._.._--->>...
            Processor: {friendName.friendNodeProcessor}
            Memory: {friendName.friendNodeRAM}
            Quantum: {friendName.friendNodeQuantum}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    </ThemeProvider>
  );
}