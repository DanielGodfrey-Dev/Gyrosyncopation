import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styles from '../CSS/FriendName.css';

// Create a new theme using Orbitron
const theme = createMuiTheme({
  typography: {
    fontFamily: "Orbitron, Roboto, sans-serif"
  }
});

export default function FriendName({ nameReveal, friendName }) {
  let open = nameReveal;

  const getGreeting = () => {
    const greetings = ['GREETINGS FRIEND', 'I AM FAMILIAR WITH YOU', 'HERE IS MY IDENITY', '...BUT WHO ARE YOU?'];
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
        <DialogTitle className={styles.nameReveal} id="namereveal">{greeting}</DialogTitle>
        <DialogContent className={styles.nameReveal}>
          <DialogContentText className={styles.nameReveal} id="namerevealText">
            My Name is {friendName}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    </ThemeProvider>
  );
}