import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails'

class AlbumList extends React.Component{

    state = {
        albums: []
    };

    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

    componentDidMount() {
        var url = 'http://rallycoding.herokuapp.com/api/music_albums';
        axios.get(url)
            .then(res => {
                this.setState({albums: res.data});
            });
    }

    renderAlbums() {
        return this.state.albums.map(album1 => <AlbumDetails album={album1} />);
    }
}


export default AlbumList;
