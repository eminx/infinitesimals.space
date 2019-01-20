import React, { Component } from 'react';
import { Box, Heading, Text } from 'rebass';

class SpiralSphinx extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Box p={3}>
          <Heading fontSize={[4, 5]}>Spiral Sphinx</Heading>
          <Heading fontSize={[2, 3]}>
            a framework for movement improvisations
          </Heading>
          <Text italic>
            <em>workshop</em>
          </Text>
        </Box>
        <Box p={3}>
          <Text fontSize={[2]}>
            <p>
              Inspired primarily from Capoeira and its historical evolution, but
              also infinitesimals theory in mathematics, Spiral Sphinx is a
              framework for movement improvisations. Pursued as a workshop that
              continue with certain instructions and exercises given to
              participants, it is practiced with a set of special methods, due
              to its connection to geometry and mathematics of the body.
            </p>
            <p>
              Within Spiral Sphinx, participants explore the boundaries that
              they often consent to move within during daily quotidian movements
              - such as actively or passively being choreographed by interior
              settings and furniture at any given space. Participants are
              expected to become aware and re-articulate default choreography
              executed by modernist-industrialist axiom that recur in varying
              forms. Then the process continues by trying to create new
              algebraic formulations that lead us to move in unprecedented
              rhythms as opposed to movements that occur within such determinate
              external barriers.
            </p>
            <p>
              Seeing body as a radically autonomous assemblage and everything it
              does as an impact of an algebraically complex algorithm, we’re
              curious to see how a set of simple & complex algebraic movement
              codes can regenerate endless possibilities of complex curves in
              movement. In Spiral Sphinx, movements are not externally
              predefined by a space limiting an organism that it contains. In
              contrast, the organism is to redefine the space by its movement
              patterns via oscillating rhythms.
            </p>
          </Text>
        </Box>
      </div>
    );
  }
}

export default SpiralSphinx;
