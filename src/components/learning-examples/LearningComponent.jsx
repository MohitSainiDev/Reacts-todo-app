import FourthComponent from './FourthComponent';
import ThirdComponent from './ThirdComponent';
import SecondComponent from './SecondComponent';
import FirstComponent, { FifthComponent } from './FirstComponent';

export default function LearningComponent() {
    return (
      <div className="App">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
        <FifthComponent/>
      </div>
    );
  }