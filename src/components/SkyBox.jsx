import { useThree } from "react-three-fiber";
import { CubeTextureLoader } from "three";

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    "/images/front.jpg",
    "/images/back.jpg",
    "/images/top.jpg",
    "/images/bottom.jpg",
    "/images/left.jpg",
    "/images/right.jpg"
  ]);

  scene.background = texture;
  return null;
};

export default SkyBox;
