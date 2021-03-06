import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetails extends React.Component{
    render(){
        const { title, artist, thumbnail_image, image, url } = this.props.album;
        return (
            <Card>
                
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image style={styles.thumbnailStyle} source={{uri: thumbnail_image}} />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle} key={title}>{title}</Text>
                        <Text key={artist}>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style={styles.imageStyle} source={{uri: image}}/>
                </CardSection>

                <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>
                        Buy now
                    </Button>
                </CardSection>
            </Card>
        );
    }

    takeMeToWebsite() {
        
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
}

export default AlbumDetails;
