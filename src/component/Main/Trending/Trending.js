import React, { Component } from 'react';
import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from '../../../styles';
import images from '../../../asset/images/image';

const DataTrending = [
  {
    id: '1',
    title: 'All',
  },
  {
    id: '2',
    title: 'Hip-Hop',
  },
  {
    id: '3',
    title: 'Podcasts',
  },
  {
    id: '4',
    title: 'Bollywood',
  },
  {
    id: '5',
    title: 'R&B',
  },
  {
    id: '6',
    title: 'Jazz',
  },

];
const DataTopTrending = [
  {
    id: '1',
    song: 'Kohinoor',
    single: 'DIVINE',
    view:'2.5M plays',
    image: images.recomend4,
  },
  {
    id: '2',
    song: 'Titanium',
    single: 'David Guetta ft. SIA',
    view:'2.3M plays',
    image: images.trend2,
  },
  {
    id: '3',
    song: 'Maradona Rid...',
    single: 'DJ Snake, Niniola',
    view:'1.3M plays',
    image: images.trend3,
  },
  {
    id: '4',
    song: 'Gold',
    single: 'Imagine Dragons',
    view:'1.1M plays',
    image: images.trend4,
  },
  {
    id: '5',
    song: 'Talk',
    single: 'Khalid feat. Disclosure',
    view:'980K plays',
    image: images.trend5,
  },
  {
    id: '6',
    song: 'Loco Contigo',
    single: 'DJ Snake, J Balvin, Tyga',
    view:'900K plays',
    image: images.trend6,
  },
  {
    id: '7',
    song: 'Beautiful People',
    single: 'Ed Sheeran feat. Khalid',
    view:'874K plays',
    image: images.trend7,
  },
  {
    id: '8',
    song: 'No Guidance',
    single: 'Chris Brown feat. Drake',
    view:'840K plays',
    image: images.trend8,
  },

];

export default class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedItem: '1'
    };
  }

  onPressHandler(id) {
      this.setState({selectedItem: id});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.explorContainer}>
          <Text style={styles.header}>Trending</Text>
            <FlatList
              extraData={this.state.selectedItem} // quan trong
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DataTrending}
              renderItem={({item}) => 
                <TouchableOpacity 
                  style={this.state.selectedItem === item.id ? 
                    { ...styles.bgButtonTrending} : {...styles.rebgButtonTrending}
                  }  
                  onPress={() => this.onPressHandler(item.id)}>
                  <Text style={this.state.selectedItem === item.id ? 
                    {...styles.txtButtonTrending} : {...styles.retxtButtonTrending} 
                  }>{item.title}</Text>
                </TouchableOpacity>
              }
              keyExtractor={item => item.id}
            />
            <View style={styles.wrapperTrending}>
              <Text style={styles.titleTrending}>Recently played</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                data={DataTopTrending}
                renderItem={({item}) => 
                  <View style={styles.wrapperContentTrending}>
                    <View style={styles.bgImgTrending}>
                      <Image style={styles.imgTrending} source={item.image}/>
                    </View>
                    <View style={styles.bgTextTrending}>
                      <View style={styles.topTrend}>
                        <Text style={styles.txtTopTrend}>#{item.id}</Text>
                      </View>
                      <Text style={styles.txtSongTrend}>{item.song}</Text>
                      <Text style={styles.txtSingleTrend}>{item.single}</Text>
                      <View style={styles.viewEmpty}/>
                      <View style={styles.bgViewTrend}>
                        <Image style={styles.icPauseTrend} source={images.icPause}/>
                        <Text style={styles.txtViewTrend}>{item.view}</Text>
                      </View>
                    </View>
                    <View style={styles.bgIconTrending}>
                      <Image style={styles.icMoreTrend} source={images.icMore}/>
                    </View>
                  </View>
                }
                keyExtractor={item => item.id}
              />
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
              <Image source={images.playMusic}/>
            </View>
        </View>
    </View>
    );
  }
}
