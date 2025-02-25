import { Html } from '@react-three/drei';
import '/src/assets/css/ClickableCircle.scss';

interface ClickableCircleProps {
  position: [number, number, number];
  onClick?: () => void;
  isDragging: boolean;
}

function ClickableCircle({ position, isDragging, onClick }: ClickableCircleProps) {

    return (
        <Html position={position} center transform distanceFactor={10}>
          <div
             onClick={onClick}
            className={`clickable-circle ${isDragging ? "dragging" : ""}`}
          />
        </Html>
      );
}

export default  ClickableCircle;
