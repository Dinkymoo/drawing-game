import beginnerImage from '../images/draw-beginner.PNG';

const activities = [
  {
    id: 1,
    name: 'Beginner',
    instruction: 'Read and Draw',
    question: `<div>
    <ol>
      <li>Draw a dot in the centre of your page.</li>
      <li>
        Starting at the top left-hand corner of the page rule a straight
        line through the dot finishing at the bottom right hand corner.
      </li>
      <li>
        Starting at the bottom left-hand corner of the page rule a line
        through the dot, finishing at the top right hand corner.
      </li>
      <li>
        Write your name in the triangle in the centre of the left-hand side
        of the page.
      </li>
    </ol>
    </div>`,
    answer: beginnerImage
  },
  {
    id: 2,
    name: 'Intermediate',
    instruction: 'Listen and Draw',
    question: `<div>
    <audio ref=”audio_tag” src=beginnerClip controls autoPlay/>
    </div>`,
    answer: '2',
    hasCanvas: true
  },
  {
    id: 3,
    name: 'Advanced',
    instruction: 'activity3',
    question: '<h1>Three</h1>',
    answer: '3',
    hasCanvas: true
  }
];
export default activities;
