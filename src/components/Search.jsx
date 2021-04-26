import Button from './Button'

const Search = ({ value, setValue, onClick }) => {

  return (
    <div className="input-group flex-nowrap ms-3">
      <span className="input-group-text" id="basic-addon1">
        <i className="fa fa-search" />
      </span>
      <input
        value={value}
        type="text"
        className="form-control "
        placeholder="Enter username"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button label={'Find'} onClick={onClick} bootstrap={"btn-success"} />
    </div>
  );
};

export default Search