import {NestedCards} from '../components'

const NoNestedCards = ({ dataa, category }) => {
  return (
    <div className="cards">
      {dataa.map((data) => {
        if (data.types.length === 0 && data.category === category) {
          return (
            <div className="noNested_items" key={Math.random() * 100000}>
              <h1>{data.category}</h1>
              <img src={data.url} />
            </div>
          );
        } else {
          return <NestedCards key={Math.random() * 100000} data={data.types} category={category} />;
        }
      })}
    </div>
  );
};

export default NoNestedCards;
