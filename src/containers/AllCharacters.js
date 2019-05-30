import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Characters from '../components/components/Characters';
import { getCharactersSelector } from '../selectors/charactersSelectors';
import { characterActions } from '../actions/characterActions';

class AllCharacters extends PureComponent {

  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Characters characters={this.props.characters} />
    );
  }
}

// mapStateToProps(allows to check redux) 
// in redux, holds all your state as props now
const mapStateToProps = state => ({
  characters: getCharactersSelector(state)
});

// then mapDispatchToProps(makes apiCall w/action creator)
const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(characterActions());
  }
});


// connect to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
