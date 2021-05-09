import React, { Component } from 'react';
import { Box, Heading, Text, Link } from 'rebass';
import { Link as RouterLink } from 'react-router-dom';

const routerLinks = [
  {
    label: 'Circles UBI',
    value: 'https://joincircles.net',
    isExternal: true,
  },
  {
    label: 'Jackfruit Ceremony',
    value: '',
  },
  {
    label: 'Cocoso',
    value: 'https://www.cocoso.info',
    isExternal: true,
  },
  {
    label: 'Community Currency Alliance',
    value: 'https://forum.currency.community',
    isExternal: true,
  },
  {
    label: 'CIC Bonding Curve Demo',
    value: 'https://play.grassecon.org',
    isExternal: true,
  },
  {
    label: 'The Curve',
    value: 'https://www.thecurve.world',
    isExternal: true,
  },
  {
    label: 'Spiral Sphinx',
    value: '/spiral-sphinx',
    isExternal: false,
  },
  {
    label: 'Ravoeira',
    value: '/ravoeira',
    isExternal: false,
  },
  {
    label: 'Labor is Love',
    value: 'https://www.laborislove.se',
    isExternal: true,
  },
  {
    label: 'Artist Run Space Software',
    value: 'http://www.artistrun.space',
    isExternal: true,
  },
  {
    label: 'Skogen',
    value: 'https://new.skogen.pm',
    isExternal: true,
  },
  {
    label: 'Librella',
    value: 'https://librella.co',
    isExternal: true,
  },
  {
    label: 'Infinitesimals Expressive',
    // value: 'http://www.gecekondu.eu/infinitesimals',
    isExternal: true,
  },
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
          <Text fontSize={[2, 3]}>
            Here in this website, you will find documentation of artworks,
            ideas, software, and other processes by <b>Emin Durak</b>.
          </Text>
        </Box>

        <Box p={3} pt={0}>
          <Text fontSize={[2, 3]}>Currently working with:</Text>
          <ul>
            {routerLinks.map((link) => (
              <ListItem
                key={link.label}
                label={link.label}
                value={link.value}
                isExternal={link.isExternal}
              />
            ))}
          </ul>
          {/* <p>
            A non-updated part of my previous works can be attained here:{' '}
            <Link
              href="http://gecekondu.eu/durak/"
              style={{ color: '#07c' }}
              isExternal
            >
              gecekondu.eu/durak
            </Link>
          </p> */}
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
    <Text fontSize={[2, 3]} lineHeight={1.5}>
      Infinitesimals are infinitely small numbers, objects in nature, that are
      so incalculably small. Therefore they are <em>assumed</em> to be{' '}
      non-existent in{' '}
      <Link href="https://en.wikipedia.org/wiki/Mathematical_analysis">
        Standard Analysis
      </Link>
      , despite that they are{' '}
      <Link href="https://plato.stanford.edu/entries/continuity/">
        <em>admitted</em>
      </Link>{' '}
      to exist.
    </Text>
  </Box>
);

export default Home;
