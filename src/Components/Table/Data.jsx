import React from 'react';
import { Table, Container } from 'react-bootstrap';
import UserData from '../../JsonData.json';
import { connect } from 'react-redux';
// import {Redirect} from 'react-router-dom';


class TableView extends React.Component {
  componentDidMount() {
    this.props.onlogin();
  }

  render() {
    let Tdata;
    if (this.props.vicky) {
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
            {this.props.vicky.map(key => {
              return (
                <tr key={key.id}>
                  <td>{key.id}</td>
                  <td>{key.name}</td>
                  <td>{key.age}</td>
                  <td>{key.gender}</td>
                  <td>{key.email}</td>
                  <td>{key.phoneNo}</td>

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

const mapStateToProps = state => {
  return {
    vicky: state.userDataa
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onlogin: () => dispatch({type:'login',payload:UserData})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableView);