import React, { PureComponent } from 'react';
import Characters from '../components/components/Characters';
import { getCharactersApi } from '../services/avatarApi';

export default class AllCharacter extends PureComponent {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharactersApi()
      .then(characters => {
        this.setState({ characters });
      });
  }

  render() {
    return (
      <Characters characters={this.state.characters} />
    );
  }
}
