interface ListProps {
  items: string[];
}
export default function List(props: ListProps) {
  const listItems = props.items.map((item: string, i: number) => <li key={i} className="list-group-item">{item}</li>);
  return <ul className="list-group list-group-flush">{listItems}</ul>;
}
