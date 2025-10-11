import * as THREE from 'three';

const HeroLight = () => {
    return (
        <>
            <directionalLight
                position={[5, 10, 5]}
                intensity={1.2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            <directionalLight
                position={[-5, 5, 5]}
                intensity={4}
                color="#ffffffff"
            />
            <directionalLight
                position={[0, 5, -10]}
                intensity={3}
                color="#ffffff"
            />
            <ambientLight intensity={0.5} />
            <spotLight
                position={[3, -1, 3]}
                intensity={100}
                penumbra={0.2}
            />
            <spotLight
                position={[-5, -2, -3]}
                intensity={100}
                penumbra={1}
            />
            <primitive
                object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
                position={[1, 1, 1]}
                intensity={10}
                penumbra={5}
                rotation={[-Math.PI / 2, Math.PI / 4, 0]}
            />
            <primitive
                object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
                position={[-1, 1.8, -3]}
                intensity={10}
                penumbra={5}
                rotation={[-Math.PI / 2, Math.PI / 4, 0]}
            />
            <pointLight
                position={[1, -2, -4]}
                intensity={5}
                penumbra={1}
                color="#7209b7"
            />
        </>
    )
}

export default HeroLight