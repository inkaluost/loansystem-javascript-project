import Link from 'next/link'
import React from'react';
import React1a_vko35 from './React1a_vko35'
import React1b_vko35 from './React1b_vko35'
import Button from'@material-ui/core/Button'
import Countries from './components/Countries'
import React3_a from './components/React3_a';
import Navbar from './components/Navbar';
import Clock from './React2a_vko36'

export default () =>
  <div>
    <div>
      <Navbar />
    </div>

    this is home.tsx.{' '}
    <Link href="/about">

      <a>About</a>
    </Link>
    <React1a_vko35 />
    <React1b_vko35 />
    <Button color="primary">Material UI Test Button</Button>
    <Countries />
    <React3_a />


    <Clock />

  </div>
