import Button from './Button'

const Search = ({ value, setValue, onClick }) => {
  return (
    <div className="input-group flex-nowrap">
      <span className="input-group-text" id="basic-addon1">
        <i className="fa fa-search" />{' '}
      </span>
      <input
        value={value}
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button label={'Find'} onClick={onClick} />
    </div>
  );
};

export default Search