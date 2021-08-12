import InputForm from "../UI/InputForm";

const SearchBar = (props)=>{
  return  <InputForm onSubmit={props.onSubmit}></InputForm>
}
export default SearchBar;