const ImageCenter = ({data,productIndex,direction,changeIndex,mainDirection}) => {
  return (
    <div className="div">
      <img
        src={data[productIndex - 1] && data[productIndex - 1].photo}
        alt={data[productIndex - 1] && data[productIndex - 1].name}
        className="previous-image"
        style={
          direction.up
            ? { animation: "0.4s linear downnext" }
            : { animation: "inherit" }
        }
      />
      <img
        src={data[productIndex] && data[productIndex].photo}
        alt={data[productIndex] && data[productIndex].name}
        className="main-image"
        style={
          direction.center
            ? { animation: `0.4s linear ${mainDirection}` }
            : { animation: "inherit" }
        }
        onAnimationEnd={changeIndex}
      />
      <img
        src={data[productIndex + 1] && data[productIndex + 1].photo}
        alt={data[productIndex + 1] && data[productIndex + 1].name}
        className="next-image"
        style={
          direction.down
            ? { animation: "0.4s linear upnext" }
            : { animation: "inherit" }
        }
      />
    </div>
  );
};

export default ImageCenter;
