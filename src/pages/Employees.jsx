import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Button from '../components/Button';
import EmployeeContainer from "../features/Employees/EmployeeContainer";




function Employees() {
  return (
    <Container>
      <SearchBar>
        <Button>Create</Button>
      </SearchBar>
     <EmployeeContainer/>
    </Container>
  );
}

export default Employees
