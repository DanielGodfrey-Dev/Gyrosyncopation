import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styles from '../CSS/Cooperation.css';

// Create a new theme using Orbitron
const theme = createMuiTheme({
  typography: {
    fontFamily: "Orbitron, Roboto, sans-serif"
  }
});

export default function Cooperation({ cooperation, friendName }) {
    let open = cooperation;

    const getGreeting = () => {
    const greetings = ['CAN THIS HELP YOU?', 'YOU WILL KNOW THIS', 'HERE IS ONE OF MY PROPERTIES', 'MAY YOU NAVIGATE THE TITAN-MATRIX_BLOC'];
    return greetings[Math.floor(Math.random() * 4)]
  }

  const getRandomProperty = () => {
    return Math.floor(Math.random() * 2)
  }

  let property = getRandomProperty();

  let greeting = getGreeting();

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={styles.cooperation} id="cooperation">{greeting}</DialogTitle>
        <DialogContent className={styles.cooperation}>
          <DialogContentText className={styles.cooperation} id="cooperationText">
            My Name is {friendName.name} and you can access one property --_..--->>
            Processor: {property === 0 ? friendName.friendNodeProcessor : null} ..___..
            Memory:  {property === 1 ? friendName.friendNodeProcessor : null} ..___..
            Quantum:  {property === 2 ? friendName.friendNodeQuantum : null}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    </ThemeProvider>
  );
}