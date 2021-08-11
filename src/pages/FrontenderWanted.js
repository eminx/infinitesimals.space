import React from 'react';

import RenderMD from '../components/RenderMD';
const source = require('./frontender-wanted.md');

export default function FrontenderWanted() {
  return (
    <div>
      <RenderMD mdFilePath={source} />
    </div>
  );
}
