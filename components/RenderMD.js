import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function RenderMD(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ReactMarkdown>{props.mdSource}</ReactMarkdown>
    </>
  );
}
