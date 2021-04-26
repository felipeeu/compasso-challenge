const Button = ({ label, onClick, icon, bootstrap }) => {
  return (
    <button type="button" className={`btn  ${bootstrap}`} onClick={onClick}>
      <i className={`fa ${icon}`} /><span className="px-2" >{label}</span>
    </button>
  );
};
export default Button