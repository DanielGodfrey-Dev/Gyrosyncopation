import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styles from '../CSS/GyroFail.css';

// Create a new theme using Orbitron
const theme = createMuiTheme({
  typography: {
    fontFamily: "Orbitron, Roboto, sans-serif"
  }
});

export default function GyroFail({ gyroFail, character }) {
  let open = gyroFail;

  console.log('gyrosyncopated with ' + character);

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={styles.gyroFail} id="alert-dialog-title">{"GYROSYNCOPATION FAILURE"}</DialogTitle>
        <DialogContent className={styles.gyroFail}>
          <DialogContentText className={styles.gyroFail} id="alert-dialog-description">
            GYROSYNCOPATION FAILED. Catastrophic memory loss. Processor shutting down. Quantum Matrix slipping...
            You have failed to reclaim your humanity. All is lost. You will be erased from the Titan-Matrix_Bloc for eternity.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    </ThemeProvider>
  );
}
