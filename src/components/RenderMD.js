import React, { useEffect, useState } from 'react';
import { Box } from 'rebass';
import ReactMarkdown from 'react-markdown';

export default function RenderMD({ mdFilePath }) {
  const [source, setSource] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(mdFilePath)
      .then((response) => response.text())
      .then((text) => {
        setSource(text);
      });
  }, []);

  return (
    <div>
      <Box p={3}>
        <ReactMarkdown>{source}</ReactMarkdown>
      </Box>
    </div>
  );
}
