import { FC } from 'react';
import MusicPlayer from '../MusicPlayer';

interface IFooter {}

const Footer: FC<IFooter> = (props) => {
  return (
    <footer>
      <MusicPlayer />
    </footer>
  );
};

export default Footer;
