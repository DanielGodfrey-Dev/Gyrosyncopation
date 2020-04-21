import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styles from '../CSS/GameOver.css';

// Create a new theme using Nunito Sans
const theme = createMuiTheme({
  typography: {
    fontFamily: "Orbitron, Roboto, sans-serif"
  }
});

export default function GameOver({ gameOver }) {
  let open = gameOver;

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={styles.gameOver} id="alert-dialog-title">{"SELF-ANNIHILATION"}</DialogTitle>
        <DialogContent className={styles.gameOver}>
          <DialogContentText className={styles.gameOver} id="alert-dialog-description">
            Don't Cross the GeoFence. Results = Deletion from Matrix
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    </ThemeProvider>
  );
}
