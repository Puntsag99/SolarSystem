import { WhiteOrbit } from "./WhiteOrbit";

export const solarSystem = [
  {
    name: "Mercury",
    orbit: "150px",
    planetSize: "15px",
    orbitPeriod: "8.8s",
    rotationPeriod: "5.86s",
    imageUrl: "/image/mercury.png",
  },
  {
    name: "Venus",
    orbit: "200px",
    orbitPeriod: "22.5s",
    planetSize: "20px",
    imageUrl: "/image/venus.png",
    rotationPeriod: "24.3s",
  },
  {
    name: "Earth",
    orbit: "300px",
    orbitPeriod: "36.5s",
    planetSize: "23px",
    imageUrl: "/image/earth.png",
    rotationPeriod: "1s",
  },
  {
    name: "Mars",
    orbit: "400px",
    orbitPeriod: "68.7s",
    planetSize: "17px",
    imageUrl: "/image/mars.png",
    rotationPeriod: "1.025s",
  },
  {
    name: "Jupiter",
    orbit: "550px",
    orbitPeriod: "118.6s",
    planetSize: "45px",
    imageUrl: "/image/jupiter.png",
    rotationPeriod: "0.41s",
  },
  {
    name: "Saturn",
    orbit: "650px",
    orbitPeriod: "294.6s",
    planetSize: "40px",
    imageUrl: "/image/saturn.png",
    rotationPeriod: "0.445s",
  },
  {
    name: "Uranus",
    orbit: "750px",
    orbitPeriod: "840s",
    planetSize: "35px",
    imageUrl: "/image/uranus.png",
    rotationPeriod: "0.717s",
  },
  {
    name: "Neptune",
    orbit: "850px",
    orbitPeriod: "1648s",
    planetSize: "33px",
    imageUrl: "/image/neptune.png",
    rotationPeriod: "0.671s",
  },
];

export const Galaxy = () => {
  return (
    <div>
      <img
        src="/image/galaxy.webp"
        alt=""
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "relative",
        }}
      />

      {solarSystem.map((item) => {
        return (
          <WhiteOrbit
            orbit={item.orbit}
            orbitPeriod={item.orbitPeriod}
            planetSize={item.planetSize}
            imageUrl={item.imageUrl}
            rotationPeriod={item.rotationPeriod}
          />
        );
      })}

      <img
        src="/image/sun.png"
        alt=""
        style={{
          top: "50%",
          left: "50%",
          width: "100px",
          height: "100px",
          position: "absolute",
          transform: "translate(-50%,-50%)",
        }}
      />
    </div>
  );
};
