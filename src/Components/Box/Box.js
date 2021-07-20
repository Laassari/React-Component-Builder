const Box = ({ children, borderSize }) => {
  return (
    <div
      style={{
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: borderSize,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
