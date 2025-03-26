export const WhiteOrbit = ({
  orbit,
  orbitPeriod,
  planetSize,
  imageUrl,
  rotationPeriod,
}) => {
  return (
    <div
      style={{
        top: "50%",
        left: "50%",
        width: orbit,
        height: orbit,
        borderRadius: "50%",
        position: "absolute",
        border: "2px dashed white",
        transform: "translate(-50%,-50%)",
        animation: `whiteCircle ${orbitPeriod} infinite linear`,
      }}
    >
      <img
        src={imageUrl}
        alt=""
        style={{
          left: "50%",
          width: planetSize,
          height: planetSize,
          position: "absolute",
          transform: "translate(-50%,-50%)",
          animation: `planetCircle ${rotationPeriod} infinite linear`,
        }}
      />
    </div>
  );
};
