import React from 'react';
import { Table, Container } from 'react-bootstrap';
import UserData from '../../JsonData.json';

class TableView extends React.Component {
  state = {
    userData: ''
  }
  componentDidMount() {
    this.setState({ userData: UserData })
  }

  render() {
    let Tdata;
    if (this.state.userData) {
      Tdata = <Container>
        <Table style={{ marginTop: '50px' }} striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th> Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userData.map(key => {
              return (
                <tr key={key.id}>
                  <td>{key.name}</td>
                  <td>{key.age}</td>
                  <td>{key.gender}</td>
                  <td>{key.email}</td>
                  <td>{key.phoneNo}</td>
                  <td>@mdo</td>
                </tr>)
            })}
          </tbody>
        </Table>
      </Container>
    }
    return (<>
      {Tdata} 
    </>)
  }
}
export default TableView;