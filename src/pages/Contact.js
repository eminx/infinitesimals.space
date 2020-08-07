import React, { Component } from 'react';
import { Box, Link, Heading, Text } from 'rebass';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Box p={3}>
          <Heading fontSize={[4, 5]}>Contact</Heading>
          {/* <Heading fontSize={[1, 2]}>
            currently available for freelance work
          </Heading> */}
        </Box>
        <Box p={3}>
          <Heading fontSize={[2, 3]}>Email</Heading>
          <Text fontSize={[1, 2]}>
            <Link href="mailto:emin@infinitesimals.space">
              emin@infinitesimals.space
            </Link>
          </Text>
        </Box>
        <Box p={3}>
          <Heading fontSize={[2, 3]}>Text</Heading>
          <Text fontSize={[1, 2]}>
            <span>Signal: </span>
            <Link href="#">+46 72-2 257 774</Link>
          </Text>
        </Box>
      </div>
    );
  }
}

export default Contact;
