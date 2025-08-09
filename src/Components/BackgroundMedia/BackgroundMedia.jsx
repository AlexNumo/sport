import Breath from '../../assets/Breath.mp4';
import { VideoBackground, MobileBackground } from './BackgroundMedia.Styled';



function BackgroundMedia() {
  return (
    <>
      <VideoBackground src={Breath} autoPlay muted loop playsInline />
      <MobileBackground />
    </>
  );
};

export default BackgroundMedia;
