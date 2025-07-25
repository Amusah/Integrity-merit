import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import ResignationsTable from "../features/Resignations/ResignationsTable";

function Resignations() {
  return (
    <Container>
      <SearchBar>
        <Button className="!text-red-600">Ask for Clarifications</Button>
      </SearchBar>
      <ResignationsTable />
    </Container>
  );
}

export default Resignations;
