import intermediateImage from '../images/draw-intermediate.PNG';
import intermediate from '../clips/draw-intermediate.mp3';
import listenBeginner from '../images/listen-beginner.PNG';
import advancedClip from '../clips/draw-advanced.mp3';
import advancedImage from '../images/draw-advanced.PNG';
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
    answer: listenBeginner
  },
  {
    id: 2,
    name: 'Intermediate',
    instruction: 'Listen and Draw',
    question: `<div>
    <audio style="margin-left:20%" ref=”audio_tag” src=${intermediate} controls/>
    </div>`,
    answer: intermediateImage
  },
  {
    id: 3,
    name: 'Advanced',
    instruction: 'Listen and Draw',
    question: `<div>
    <audio ref=”audio_tag” src=${advancedClip} controls/>
    </div>`,
    answer: advancedImage
  }
];
export default activities;
