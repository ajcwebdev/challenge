import {useState} from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <div className="App">
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Search by Name, City, or Genre
          <br />
          <input type="text" onChange={e => handleChange(e)} />
        </label>
        <br />
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default Search;