import Link from 'next/link'
import React from'react';
import React1a_vko35 from './React1a_vko35'
import React1b_vko35 from './React1b_vko35'

import Clock from './React2a_vko36'

export default () =>
  <div>
    this is home.tsx.{' '}
    <Link href="/about">

      <a>About</a>
    </Link>
    <React1a_vko35 />
    <React1b_vko35 />

    <Clock />

  </div>
