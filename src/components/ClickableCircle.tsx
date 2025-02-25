import { Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import '/src/assets/css/ClickableCircle.scss';

interface ClickableCircleProps {
  position: [number, number, number];
  onClick?: () => void;
  isDragging: boolean;
}

function ClickableCircle({ position, isDragging }: ClickableCircleProps) {
    const navigate = useNavigate();

    return (
        <Html position={position} center transform distanceFactor={10}>
          <div
             onClick={() => navigate('/content')}
            className={`clickable-circle ${isDragging ? "dragging" : ""}`}
          />
        </Html>
      );
}

export default  ClickableCircle;
