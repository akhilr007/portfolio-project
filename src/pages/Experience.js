import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from '@mui/icons-material';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date="2017 - 2021"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon = {<School />}
        >
          <h3 className='vertical-timeline-element-title'>KCC Institute Of Technology & Management</h3>
          <h4 className='vertical-timeline-element-subtitle'>Greater Noida, UP</h4>
          <p>Bachelor of Technology in Computer Science & Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--work'
        date="June'2019 - August'2019"
        iconStyle={{background: "#009FFD", color: "#fff"}}
        icon = {<Work />}
        >
          <h3 className='vertical-timeline-element-title'>ML Intern, Eckovation</h3>
          <h4 className='vertical-timeline-element-subtitle'>New Delhi</h4>
          <p>Developed projects on realtime based problems by implementing Machine Learning algorithms. </p>
          <p>Created a model on Credit Score Analysis. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--work'
        date="January'2021 - Febrauary'2021"
        iconStyle={{background: "#FFA69E", color: "#fff"}}
        icon = {<Work />}
        >
          <h3 className='vertical-timeline-element-title'>Software Engineering Intern, Widhya</h3>
          <h4 className='vertical-timeline-element-subtitle'>Remote</h4>
          <p>Created Customer review webapp using HTML, CSS, Flask</p>
          <p>Performed key role in the development process of UI portion of web application.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--work'
        date="December'2021 - March'2022"
        iconStyle={{background: "#37D5D6", color: "#fff"}}
        icon = {<Work />}
        >
          <h3 className='vertical-timeline-element-title'>Trainee Software Engineer, Marsh McClennan</h3>
          <h4 className='vertical-timeline-element-subtitle'>Mumbai, Maharashtra</h4>
          <p>Worked with process automation team of Guy Carpenter.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience;
