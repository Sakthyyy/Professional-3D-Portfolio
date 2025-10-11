import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'

import { Sakthivel } from './Sakthivel3D'
import HeroLight from './HeroLight'
import Particles from './Particles'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width:1024px' });
    const isMobile = useMediaQuery({ query: '(max-width:880px' });
    return (
        <Canvas shadows camera={{ position: [4, 4, 6], fov: 45 }}>
            <HeroLight />
            <Particles count={100} />
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <group
                scale={1.8}
                position={isMobile ? [0, -3, 0] : [0, -2.3, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Sakthivel />
            </group>
        </Canvas>
    )
}

export default HeroExperience