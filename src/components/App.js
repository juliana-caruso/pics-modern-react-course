import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import Imagelist from './ImageList';

class App extends React.Component {
  state = { images: [] }

  // ******* API call with promises *******
  // onSearchSubmit(searchTerm) {
  //   axios
  //   .get('https://api.unsplash.com/search/photos', {
  //     params: { query: searchTerm },
  //     headers: {
  //       Authorization: 'Client-ID k3WMjCPPr76yOrAqneazKLE2P3d0ETWLeadSIT_z7m0'
  //     }
  //   })
  //   .then(response => {
  //     console.log(response.data.results);
  //   });
  // }

  // ******* API call with async await *******
  onSearchSubmit = async (searchTerm) => {
    // config at api/unsplash.js file
    const response = await unsplash.get("/search/photos", {
      params: { query: searchTerm }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}

export default App;