import React, { Component } from 'react';
import { Box, Heading, Text } from 'rebass';

const bio = [
  `I've studied different design and technology related studies in my BSc in Istanbul and then an MFA in Arts in Stockholm. I've always been very much into dance, movement and sound art and therefore have made my master thesis with an emphasis on movement practices in different rituals and contemporary electronic dance music culture, entitled "Experience of Devotion".`,
  `Following my studies, I've worked as software developer and new media artist collaborating with several professional dance & choreography artists in Stockholm, in contemporary field. My contributions have been mainly in the form of sound art but also light and choreography.`,
  `I have been busy writing a few software projects that have kept me busy last years. One that is called "Cocoso" (Community Cooperation Software) is basically one that provides tools for organisations to build their own platform. Based on Cocoso, I have intentions to create a platform that will connect artistrun spaces and artists globally.`,
  `My other baby software project is "Librella": A platform for book-lovers to lend their books to each other`,
  `Then, for about 5+ years I've been practicing capoeira on top of other movement exercises I do such as yoga, contact-impro and some improvisation techniques. My fascination with capoeira especially regarding its evolution, and my interest in contemporary art and dance naturally made me articulate and create this workshop called "Spiral Sphinx" which includes different movement material and tools to transform the body in both primitive and sophisticated sense with a detailed focused in individual's own, diverse expressions; besides as a tool for an active, playful resistance.`,
];

const bioSelf = [
  `Emin is an artist with way too many interests and a dozen of unrealisable projects in his agenda. Although Emin knows and admits openly that not having ever taken part in Mark Zuckerberg's data brothel business of mass manipulation and suppressive capitalist ego empire is an extremely high disadvantage for his general business, recognition and indeed a high rate for the survival of his kind; he still pursues with his stubbornness by not creating any account to feed that monster with any trackable data there, either fake or not fake (but what is real?). Because Emin prefers that his projects, that indeed you may have loved to use, such as a book lending app and a tool for managing artist run spaces; rather stay in abstract theory, and he is just probably too occupied with another project and too careless and bored to execute any time to let anyone know about them. Marketing in the 21st century is just some tricks on social media, which he finds extremely antisocial, and pointless.`,
  `After a traumatic incident at which his first and the only painting was lost in his mid-school's archives before a cancelled exhibition (first to ever happen in that school), he had a permanent shock and a crisis of never being able to commit fully to his artworks becoming publicly acknowledged, because, well it may be stolen or just lost right? He kind of started to secretly like this neo-buddhist phenomenon of impermanence and impartiality toward all artefacts and beings, nonetheless, for that everything vanishes into abyss of nothingness at some point anyways...`,
  `Emin writes software for cooperation and making of arts, moves his body in an anarcho-capoeira fashion, makes electronic sounds that doesn't follow a stereotypical pattern, and likes to talk about things. His best friend is a feline called Gülizar from whom he's on exile from, due to the practices of the Nazi Swedish State. Don't prejudge him for this exaggeration please. You probably don't know much about it...`,
  `Emin is a Deleuzian, has written 69 pages of a master thesis called Experience of Devotion in 2012 that his American professor denied to read for being "too deep" (wtf right), and yet made a failed attempt to fail Emin for that. The thesis is highly structured around Difference & Repetition by Gilles Deleuze. Emin has a thing with infinitely small numbers which Leibniz, among others, have talked about in detail.`,
];

const worksPresented = [
  `Infinitesimals Expressive`,
  `Infinitesimals Transgressed (future research project)`,
  `Gecekondu`,
  `Charter 10 (Nobel)`,
  `Chaos`,
  `Soap`,
  `Strange Splendor (Opera)`,
  `Resolutionary Bodies (Foyer Installation)`,
  `A Storytelling Space with Klee (urbanburn)`,
  `Playaground and the Rusted Tree (borderland)`,
  `Bodyrave (sensors etc)`,
  `Ravoeira`,
  `Spiral Sphinx`,
];

class Bio extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Box p={3}>
          <Heading fontSize={[4, 5]} mb={2}>
            Bio
          </Heading>
        </Box>
        <Box p={3}>
          <Heading fontSize={[2, 3]} mb={2}>
            Emin Durak
          </Heading>
          {bio.map((item) => (
            <Text key={item.substr(0, 16)} fontSize={[1, 2]} mb={3}>
              {item}
            </Text>
          ))}
        </Box>
        {/* <Box p={3}>
          <Heading fontSize={[2, 3]} mb={2}>
            Also Emin Durak
          </Heading>
          {bioSelf.map((item) => (
            <Text key={item.substr(0, 16)} fontSize={[1, 2]} mb={3}>
              {item}
            </Text>
          ))}
        </Box> */}
        <Box p={3}>
          <Heading fontSize={[2, 3]} mb={4}>
            Some Works Published: (need update...)
          </Heading>
          {worksPresented.map((item) => (
            <Text key={item.substr(0, 16)} fontSize={[1, 2]} mb={3}>
              {item}
            </Text>
          ))}
        </Box>
      </div>
    );
  }
}

export default Bio;
