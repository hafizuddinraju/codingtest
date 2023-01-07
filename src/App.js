import Slider from './components/Slider';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <>
      <Slider />
      <ComingSoon></ComingSoon>
      <ToastContainer />
    </>
  );
}

export default App;
