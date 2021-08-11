import React, { useEffect } from 'react';
import { Box } from 'rebass';
import ReactMarkdown from 'react-markdown';

export default function RenderMD(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box p={3}>
      <ReactMarkdown>{props.mdSource}</ReactMarkdown>
    </Box>
  );
}
