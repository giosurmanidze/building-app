
const NestedCards = ({ data, category }) => {
  return (
    <div className="nested__cards">
      {data
        .filter((d) => d.category_name === category)
        .map((da) => {
          return (
            <div key={Math.random() * 10000}>
              <img src={da.url} />
              <h1>{da.category_name}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default NestedCards;
