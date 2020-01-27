import React, { useState, useEffect } from 'react';

import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import {firebaseRemoteConfig} from '../../config/firebase';

import DataTable from '../data-table';

const theme = createMuiTheme({
    palette: {
        primary: blueGrey,
    },
});

export default function App() {
  const [data] = useState([
      {
        key: 'test key key',
        temperatura: 'test key temperatura',
        umidade: 'test key umidade',
        cliente: 'test key cliente',
        data: 'test key data',
      }
    ]);
  const [showTable, setShowTable] = useState(firebaseRemoteConfig.getValue('showTable').asBoolean())

  useEffect(() => {
    firebaseRemoteConfig.fetchAndActivate()
    .then(
      () => {
        setShowTable(firebaseRemoteConfig.getValue('showTable').asBoolean())
      }
    )
    .catch((err) => {
      console.error(err);
    });
  }, []);
  
  return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit">
                Firebase Remote Config - POC
              </Typography>
            </Toolbar>
          </AppBar>
          {showTable && <DataTable data={data} />}
        </React.Fragment>
      </MuiThemeProvider>
    );
}
