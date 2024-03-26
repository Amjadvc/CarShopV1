export default function Star({ full, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
  };

  return (
    <span style={starStyle}>
      {full ? (
        <svg viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.4998 30.357L31.0573 36.7291L28.2557 24.7195L37.5832 16.6391L25.3003 15.597L20.4998 4.27075L15.6994 15.597L3.4165 16.6391L12.744 24.7195L9.94234 36.7291L20.4998 30.357Z"
            fill={color}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.7582 29.9289L20.4998 29.773L20.2415 29.9289L10.6985 35.6887L13.2309 24.8331L13.2995 24.5392L13.0714 24.3416L4.63959 17.0371L15.7417 16.0952L16.0421 16.0697L16.1598 15.7921L20.4998 5.55205L24.8399 15.7921L24.9576 16.0697L25.258 16.0952L36.3601 17.0371L27.9283 24.3416L27.7002 24.5392L27.7687 24.8331L30.3012 35.6887L20.7582 29.9289Z"
            fill="#ffff"
            fillOpacity="0.2"
            stroke={color}
          />
        </svg>
      )}
    </span>
  );
}
