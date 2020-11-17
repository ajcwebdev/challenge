const Filter = props => {
  const changeTerm = (e) => {
    props.setFilterTerm(e.target.value);
  }

  return (
    <form>
      <label>
        Filter by State or Genre
        <br />
        <input
          value={props.filterTerm}
          type="text"
          placeholder="Filter by State and Genre"
          onChange={changeTerm}>
        </input>
      </label>
    </form>
  );
}

export default Filter;