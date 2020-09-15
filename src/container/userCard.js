import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../actions/userActions';
import './usercard.css'
import Modal from '../components/modal';
import Spinner from '../components/Spinner/Spinner.js'
import User from '../components/user'
import SearchIcon from '../components/search/searchicon';
import Map from '../components/maps'


class UserCard extends Component {
  constructor(props) {
    super(props);
    props.getUser();

    this.handleChange = this.handleChange.bind(this)
    this.showModal = this.showModal.bind(this);

  }

  state = {
    search: '',
    newusers: null,
    filtered: false,
    show: '',
    isOpen: false
  };


  showModal = (userId) => {
    const { isOpen, show } = this.state;
    let st = null;
    if (userId) {
      st = userId;
    }
    this.setState({ show: st });
    if (show === userId) {
      this.setState({ isOpen: !this.state.isOpen })
    }
  };


  handleChange = (e) => {
    const { users } = this.props.users
    let newUsers = users.filter(user => {
        return (
          user.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
          || user.email.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        )
      }
    );

    this.setState({
      search: e.target.value.substr(0, 20),
      newUsers: newUsers,
      filtered: true
    })
  };


  render() {
    const { users, loading } = this.props.users;
    const { newUsers, filtered } = this.state;
    let usersList;
    if (!filtered) {
      if (loading) {
        usersList = <Spinner />
      } else {
        usersList = users.length ? (
          users.map(user => {
            let position = {
              lng: parseFloat(user.address.geo.lng),
              lat: parseFloat(user.address.geo.lat)
            }
            let address = {
              address: user.address.street
            }
            return (
              <User user={user} key={user.id}>
                <div className='button-wrapper'>
                  <button
                    key={user.id}
                    className="toggle-button"
                    onClick={e => this.showModal(user.id)}
                  > Contact
                  </button>
                </div>

                <Modal isOpen={this.state.show === user.id} onClose={this.showModal}>
                  <p>Email : {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </Modal>

                <Map address={address} center={position} zoom={15} />
              </User>
            )
          })
        ) : (
          <div>No users</div>
        );
      }
    } else {
      usersList = newUsers.length ? (
        newUsers.map(user => {
          let position = {
            lng: parseFloat(user.address.geo.lng),
            lat: parseFloat(user.address.geo.lat)
          }
          let address = {
            address: user.address.street
          }
          return (
            <User user={user} key={user.id}>
              <div className='button-wrapper'>
                <button
                  key={user.id}
                  className="toggle-button"
                  onClick={e => this.showModal(user.id)}
                > Contact
                </button>
              </div>

              <Modal isOpen={this.state.show === user.id} onClose={this.showModal}>
                <p>Email : {user.email}</p>
                <p>Phone: {user.phone}</p>
              </Modal>
              <Map address={address} center={position} zoom={15} />
            </User>
          )
        })
      ) : (
        <div>No Users</div>
      );
    }


    return (
      <>
        <div className='searchbar-wrapper'>
          <form className='search-container' onSubmit={this.handleSubmit}>
            <div className="search">
              <SearchIcon color="#7f8da9" className="searchIcon" />
              <input
                className="searchInput"
                type="text"
                placeholder='Search'
                value={this.state.search}
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
        {usersList}
      </>
    )
  }

}

const mapStateToProps = state => ({
  users: state.users
});

UserCard.propTypes = {
  users: PropTypes.object.isRequired,

};


export default connect(mapStateToProps, { getUser })(UserCard);
