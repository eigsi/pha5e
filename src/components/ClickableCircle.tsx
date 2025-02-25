import { Html } from '@react-three/drei';
import '/src/assets/css/ClickableCircle.scss';

interface ClickableCircleProps {
  position: [number, number, number];
  onClick: () => void;
}

function ClickableCircle({ position, onClick }: ClickableCircleProps) {
    return (
        <Html position={position} center>
          <div
            onClick={onClick}
            className='clickable-circle'
          />
        </Html>
      );
}

export default  ClickableCircle;
