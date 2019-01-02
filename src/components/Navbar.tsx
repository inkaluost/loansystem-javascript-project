import Link from 'next/link';
import React from 'react' ;
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SwipeableTemporaryDrawer from './SideNav'

const Navbar: React.SFC<{}> = () => (
  <AppBar position="static">
    <Toolbar>
      <SwipeableTemporaryDrawer />
      <Link href="/"><Button color="inherit">Home</Button></Link>
      <Link href="/clock"><Button color="inherit">Clock</Button></Link>
      <Link href="/countries"><Button color="inherit">Countries</Button></Link>
      <Link href="/countriesapi"><Button color="inherit">CountriesApi</Button></Link>
    </Toolbar>
  </AppBar>
)

export default Navbar;
