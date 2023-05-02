export function StationaryList({ header, items }) {
  console.log(items);
  return (
    <div>
      <h1>{header}</h1>
      {items.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </div>
  );
}
