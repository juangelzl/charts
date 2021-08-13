import InputForm from "../UI/InputForm";
import LastfmContext from "../../store/lastfm-context";
import { useContext } from "react";

const SearchBar = () => {
  const ctx = useContext(LastfmContext);
  const submitHandler = (e) => {
    ctx.onSearch(e);
  };
  return <InputForm onSubmit={submitHandler}></InputForm>;
};
export default SearchBar;
