import React, { Component } from 'react';
import { Box, Heading, Text } from 'rebass';
import ReactPlayer from 'react-player';

const performedAt = [
  `- Borderland Festival: Boesdal, Denmark`,
  `- Noden kulturföreningen: Stockholm, Sweden`,
  `- Blivande House: Stockholm, Sweden`,
  `- Höjden: Stockholm, Sweden`,
  `- Art Labor at Refugio: Berlin, Germany`,
  `- J-fest: Antalya, Turkey`,
  `- Olimpos Climbing festival: Antalya, Turkey`,
  `- Kabak Valley: Fethiye, Turkey`,
  `- Ege Sanat Atölyesi: Izmir, Turkey`,
  `- Çatı Dans - Association of Contemporary Dance: Istanbul, Turkey`,
  `- Play Practice: Bangalore, India `,
  `- Jungle Dance: Arambol, India`,
  `- Ocean Sky: Arugam Bay, Sri Lanka`,
  `- Ekoyoga Festival at Pastoral Vadi: Yanıklar, Fethiye, Turkey`,
  `- Şifa ve Sanat Kampı at Pastoral Vadi: Yanıklar, Fethiye, Turkey`,
  `- Nefses camp, Kayaköy, Fethiye, Turkey`,
  `- Tales of Utopia Bay Festival, Fethiye, Turkey`,
  `- Rocas Roja, Faralya, Fethiye, Turkey`,
];

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
          <Heading fontSize={[3, 4]}>Concept</Heading>
          <Text fontSize={[2, 3]}>
            {/* <p>
              <em>
                A way to overcome the fear of falling is to repeat falling over
                and over again, and cautiously so, until reaching the inflection
                point at which the fear is dissolved into the skills gained by
                the act of the falls repeated.{' '}
              </em>
            </p> */}
            <p>
              Inspired primarily from Capoeira and its historical evolution, but
              also infinitesimals theory in mathematics, and some other
              improvisation techniques such as <em>Axis Syllabus</em> (Frey
              Faust), <em>Movement Archery</em> (Tom Weksler) and{' '}
              <em>Continously into Movement</em> (Eva Georgitsopoulou); Spiral
              Sphinx is a framework for movement improvisations. Pursued as a
              workshop that continue with certain instructions and exercises
              given to its participants, it is practiced with a set of special
              methods, related to geometry and mathematics of the body.
            </p>
            <p>
              Within Spiral Sphinx, participants explore the boundaries that
              they often consent to move within during daily quotidian movements
              - such as actively or passively being choreographed by interior
              settings and furniture at any given space. They are expected to
              become aware and re-articulate default choreography executed by
              modernist-industrialist axiom that recur in varying forms, guided
              by a serious of instructions of collapse and expand. Then the
              process continues by trying to create new algebraic formulations
              that lead us to move in unprecedented rhythms as opposed to
              movements that occur within such determinate external barriers.
            </p>
            <p>
              Seeing body as a radically autonomous assemblage and everything it
              does as an impact of an algebraically complex algorithm, one could
              be curious to see how a set of simple & complex algebraic movement
              codes can regenerate endless possibilities of complex curves in
              movement. In Spiral Sphinx, movements are not externally
              predefined by a space limiting an organism that it contains. In
              contrast, the organism is to redefine the space by its movement
              patterns via oscillating rhythms.
            </p>
          </Text>

          <Heading py={20} fontSize={[3, 4]}>
            Performed at:
          </Heading>
          <ul>
            {performedAt.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Heading py={20} fontSize={[3, 4]}>
            Credits
          </Heading>
          <ul>
            <li>
              My Capoeira master Mestre Kiura, part of Senzala group, and his
              master Mestre Zumbi
            </li>
            <li>
              Åska Saga Eriksson, for her fantastic being and the movements
            </li>
            <li>
              Eva Georgitsopoulou, with the practice "Continously into Movement"
            </li>
            <li>Tom Weksler, with the practice "Movement Archery"</li>
            <li>Frey Faust, with the ecosystem of Axis Syllabus</li>
            <li>Moa Westerlund, with her entire being...</li>
          </ul>

          <Box py={20}>
            <Heading py={20} fontSize={[3, 4]}>
              Fragments
            </Heading>

            {spiralVideos.map((video) => (
              <Box key={video.videoUrl} py={2}>
                <ReactPlayer url={video.videoUrl} width="100%" />
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    );
  }
}

const spiralVideos = [
  { videoUrl: 'https://vimeo.com/359961424' },
  { videoUrl: 'https://vimeo.com/376707017' },
  { videoUrl: 'https://vimeo.com/400524921' },
  { videoUrl: 'https://vimeo.com/313034151' },
];

export default SpiralSphinx;
