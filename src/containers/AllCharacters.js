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

const mapStateToProps = state => ({
  characters: getCharactersSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(characterActions());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
