import React, { Component } from 'react';
import { Box, Heading, Text, Link } from 'rebass';
import { Link as RouterLink } from 'react-router-dom';

const routerLinks = [
  {
    label: 'Spiral Sphinx',
    value: '/spiral-sphinx'
  },
  {
    label: 'Ravoeira',
    value: '/ravoeira'
  }
];

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Box p={3} pb={0}>
          <Heading fontSize={[4, 5]}>infinitesimals » space</Heading>
        </Box>
        <EntryText />

        <Box p={3}>
          <Text fontSize={[2]}>
            Here in this website, you will find documentation of artworks,
            ideas, software, and other processes by <b>Emin Durak</b>.
          </Text>
        </Box>

        <Box p={3} pt={0}>
          <Text fontSize={[2]}>Currently working on:</Text>
          <ul>
            {routerLinks.map(link => (
              <ListItem
                key={link.label}
                label={link.label}
                value={link.value}
              />
            ))}
            <ListItem
              label="Pomegra"
              value="https://app.pomegra.org"
              isExternal
            />
            <ListItem
              label="Nodal"
              value="http://www.nodal.network"
              isExternal
            />
          </ul>
        </Box>

        <Text p={3} pt={6}>
          contact:{' '}
          <Link href="mailto:emin@infinitesimals.space">
            emin@infinitesimals.space
          </Link>
        </Text>
      </div>
    );
  }
}

const ListItem = ({ label, value, isExternal }) => (
  <li>
    <Heading fontSize={[2, 3]} fontWeight={400}>
      {isExternal ? (
        <Link href={value} target="_blank">
          {label}
        </Link>
      ) : (
        <RouterLink to={value} style={{ color: '#07c' }}>
          {label}
        </RouterLink>
      )}
    </Heading>
  </li>
);

const EntryText = () => (
  <Box p={3}>
    <Text fontSize={[2]} lineHeight={1.5}>
      Infinitesimals are infinitely small numbers, objects in nature, that are
      so incalculably small. Therefore they are <em>assumed</em> to be{' '}
      <em> Zero (0)</em> in{' '}
      <Link href="https://en.wikipedia.org/wiki/Mathematical_analysis">
        Standard Analysis
      </Link>
      , despite that they are{' '}
      <Link href="https://plato.stanford.edu/entries/continuity/">
        <em>admitted</em>
      </Link>{' '}
      to be not.
    </Text>
  </Box>
);

export default Home;
