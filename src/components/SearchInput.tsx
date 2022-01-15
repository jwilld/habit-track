interface SearchInputProps {
  addon: string;
  placeholder: string;
}
export default function SearchInput(props: SearchInputProps) {
  return (
    <div className="input-group mb-3 search-input">
      <span className="input-group-text" id="basic-addon1">
        {props.addon}
      </span>
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
