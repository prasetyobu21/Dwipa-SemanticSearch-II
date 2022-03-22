import { Button, Container, Form, Stack } from 'react-bootstrap';

const ImageSearch = props => {
  return (
    <div>
      <Container className="my-auto p-3 w-50 mt-5">
        <h1 className="header, mb-3">Dwipa Image Search</h1>
        <Form.Control type="file" onChange={props.fileSelectorHandler} />
        <Stack direction="horizontal" gap={3} className="mt-3 mb-3">
          <Button variant="primary" onClick={props.searchPharmacy}>
            Search Pharmacy
          </Button>
          <Button variant="primary" onClick={props.searchTransportation}>
            Search Transportation
          </Button>
          <Button variant="primary" onClick={props.searchATM}>
            Search ATM
          </Button>
          <Button variant="primary" onClick={props.searchRestaurant}>
            Search Restaurant
          </Button>
        </Stack>
        <h3>{props.searchType}</h3>
        <p>{props.loading}</p>
        {props.data?.map((item, index) => (
          <p>- {item.Amenities.value.substring(55)}</p>
        ))}
      </Container>
    </div>
  );
};

export default ImageSearch;
