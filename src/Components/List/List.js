const List = ({ li }) => {
  return (
    <ul>
      {li.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
