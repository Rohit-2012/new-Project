import {Profiles} from './Components/horizontal-Scroller'
import './App.css';

function App() {
  const profileArray = [{
    image : "https://img.etimg.com/thumb/msid-98412970,width-650,height-488,imgsize-82672,,resizemode-75/elon-musk.jpg" ,
    name : "Elon Musk" ,
    designation : "CEO @ SpaceX",
    experience: '14 Yrs Exp.'
  }, {
    image : "https://i.ndtvimg.com/i/2016-07/edward-snowden_650x400_51469164236.jpg" ,
    name : "Edward Snowden" ,
    designation : "Hacker @ CIA",
    experience: '8 Yrs Exp.'
  }, {
  image : "https://scontent.frdp1-1.fna.fbcdn.net/v/t1.6435-9/89020871_102047821410992_6861042330728660992_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=O41qF-kRT6QAX9pvPr8&_nc_ht=scontent.frdp1-1.fna&oh=00_AfBT6D78uHC2Q5w1p5996afRr3vzV8zkMGnKCMZmUMgIfA&oe=6442A4CC" ,
  name : "Anuradha" ,
  designation : "HR @Laxmi Chit Fund",
  experience: '4 Yrs Exp.'
}, {
  image : "https://www.mirchiplay.com/wp-content/uploads/2020/06/akshay-kumar-scheme-pose.jpg" ,
  name : "Raju" ,
  designation : "Alumuni @ ITUS",
  experience: '6 Yrs Exp.'
}, {
  image : "https://images.ottplay.com/images/hera-pheri-suniel-shetty-615.jpg?impolicy=ottplay-20210210&width=1200&height=675" ,
  name : "Shyam" ,
  designation : "M.Com.",
  experience: '4 Yrs Exp.'
}, {
  image : "https://i.pinimg.com/originals/13/2e/08/132e08c603bcd528609ed2d1b733cade.jpg" ,
  name : "Baburao Apte" ,
  designation : "Owner @ Star Garage",
  experience: '4 Yrs Exp.'
}]
  return (
    <div className="App">
      <div className='horizontalScroller'>
      <div className='heading'>
          <h1>Know your mentors</h1>
          <p>Work with a mentor (senior data scientists from top companies) who colosely looks at your progress, gives you personalized feedback and helps you fill gaps in your knowledge.</p>
        </div>
      <div className="task1">
      {profileArray.map((x)=>{
        return(
          <li><Profiles User ={x}/></li>
        )
      })}
      </div>
      </div>
    </div>
  );
}

export default App;
