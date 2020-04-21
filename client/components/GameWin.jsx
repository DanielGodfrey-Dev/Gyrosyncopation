import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styles from '../CSS/GameWin.css';

// Create a new theme using Orbitron
const theme = createMuiTheme({
  typography: {
    fontFamily: "Orbitron, Roboto, sans-serif"
  }
});

export default function GameWin({ gameWin, character }) {
  let open = gameWin;

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={styles.gameWin} id="alert-dialog-title">{"GYROSYNCOPATION SUCCESS"}</DialogTitle>
        <DialogContent className={styles.gameWin}>
          <DialogContentText className={styles.gameWin} style={{fontWeight: 'bold'}} id="alert-dialog-description">
            GYROSYNCOPATION succeeded with {character}. Your processor has never been so in tune with your Quantum Matrix. You are made whole.
            The grim darkness of the Titan-Matrix_bloc resides from your RAM for the time being and a friendNode has been integrated
            into your circuitry. Congratulations. gyroSyncopate(selfNode, friendNode, zen);
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    </ThemeProvider>
  );
}