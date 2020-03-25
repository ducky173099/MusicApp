import React, { Component } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

import styles from '../../../styles';
import images from '../../../asset/images/image';
import { FlatList } from 'react-native-gesture-handler';




const DataSearchSongName = [
  {
    id: '1',
    title: 'Hãy trao cho anh',
    name: 'Sơn Tùng M-TP'
  },
  {
    id: '2',
    title: 'Người lạ ơi',
    name: 'Orange x Karik'
  },
  {
    id: '3',
    title: 'Bước qua đời nhau',
    name: 'Lê Bảo Bình'
  },
  {
    id: '4',
    title: "I don't want u back",
    name: 'B-ray'
  },
];

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSong: ''
    };
  }
  render() {
    // const { nameSong }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapperSearch}>
          <View style={styles.bgTopSearch}>
              <Image style={styles.imgIcSearch} source={images.icSearch}/>
              <TextInput
                numberOfLines={1}
                ellipsizeMode="tail"
                pointerEvents="none"
                style={styles.inPutSerch}
                placeholder="Search for songs, albums, podc..."
                onChangeText={(nameSong) => this.setState({nameSong})}
                value={this.state.nameSong}
              />
            </View>
            <View style={styles.wrapperListSearch}>
              <View style={styles.searchSongName}>
                <Text style={styles.titleApp}>Search history</Text>
                {/* {this.state.text.split(' ').map((word) => word && 'kyy').join(' ')} */}

                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={false}
                  data={DataSearchSongName}
                  renderItem={({item}) => 
                    <View style={styles.bghSearchSongName}>
                      <View style={styles.songNameText}>
                        <Text style={styles.txtSN}>{item.title}</Text>
                        <Text style={styles.txtSNMore}>{item.name}</Text>
                      </View>
                      <Image style={styles.icMoreTrend} source={images.icMore}/>
                    </View>
                  }
                  keyExtractor={item => item.id}
                />
              </View>
              <View style={styles.searchSongName}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={DataSearchSongName}
                  renderItem={({item}) => 
                    <View style={styles.bgSearchAlbum}>
                      <Image style={styles.imgRecently} source={images.popular2}/>
                      <Text style={styles.txtRecently}>{item.name}</Text>
                    </View>
                  }
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
        </ScrollView>
          <View style={styles.miniPlayer}>
            <View style={styles.bgImgMiniMusic}>
              <Image style={styles.imgMiniMusic} source={images.recently1}/>
            </View>
              <View style={styles.bgtxtMini}>
                <Text style={styles.txtNameMusicmini}>014 The Art of Communic...</Text>
                <Text style={styles.txtSingleMusicmini}>The Futur</Text>
              </View>
              <View style={styles.bgImgIconmini}>
                <Image style={styles.iconMusic} source={images.icPlay}/>
              </View>
          </View>
      </View>
    );
  }
}
