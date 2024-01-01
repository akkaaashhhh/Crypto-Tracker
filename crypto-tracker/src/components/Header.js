import { AppBar, Toolbar, Typography, Container, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import React, { useState } from 'react'
import { useNavigate,useContext } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';


const useStyles=makeStyles(()=>({
  title:{
    flex : 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight:"bold",
    cursor:"pointer"
  }
}))

const darkTheme = createTheme({
  palette:{
    primary:{
      main:"#fff"
    },
    type: "dark"
  }
})

const Header = () => {

  const classes = useStyles()
  const navigate = useNavigate()

  const {currency, setCurrency, symbol} = CryptoState()

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography onClick={()=>navigate('/')} className={classes.title} variant='h6'>
              Crypto Hunter
            </Typography>
            <Select variant='outlined' style={{
              width: 100,
              height: 40,
              marginRight:15
              }}
              value={currency}
              onChange={(e)=>setCurrency(e.target.value)}
              >
              <MenuItem value={'USD'}>USD </MenuItem>
              <MenuItem value={'INR'}>INR </MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header