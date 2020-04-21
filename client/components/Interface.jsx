import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from '../CSS/Interface.css';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Fade from '@material-ui/core/Fade';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function Interface() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
      <Button className={styles.interface} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Interface
      </Button>
        <Menu
            className={styles.menu}
            id='fade-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            Interface Engaged

            <MenuItem className={styles.menu} onClick={handleClose}>
            <ListItemIcon className={styles.enquire}>
                <SendIcon fontSize="inherit" />
            <ListItemText primary="name.enquire()" />
            </ListItemIcon>
            </MenuItem>

            <MenuItem onClick={handleClose}>
            <ListItemIcon className={styles.JSON}>
                <SendIcon fontSize="inherit" />
            <ListItemText primary="JSONbrain.scan()" />
            </ListItemIcon>
            </MenuItem>

            <MenuItem onClick={handleClose}>
            <ListItemIcon className={styles.attemptGyro}>
                <SendIcon fontSize="inherit" />
            <ListItemText primary="ATTEMPT GYROSYNCOPATION" />
            </ListItemIcon>
            </MenuItem>

        </Menu>
      </ThemeProvider>
    </div>
  );
}
