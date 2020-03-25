import React, { Component } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';

import styles from '../../../styles';
import images from '../../../asset/images/image';




const DATA = [
  {
    id: '1',
    title: '061 Marketing...',
    image: images.recently1
  },
  {
    id: '2',
    title: 'Lights',
    image: images.recently2
  },
  {
    id: '3',
    title: 'Sounds Like G...',
    image: images.recently3
  },
  {
    id: '4',
    title: 'Havana',
    image: images.recently4
  },
  {
    id: '5',
    title: 'See All',
    image: images.recently5
  },
  {
    id: '6',
    title: '050 Motion De...',
    image: images.recently1
  },
];
const DataRecomend = [
  {
    id: '1',
    title: 'Bass Rani',
    image: images.recomend1,
    name: 'Nucleya'
  },
  {
    id: '2',
    title: 'Gully Boy',
    image: images.recomend2,
    name: 'Various Artists'
  },
  {
    id: '3',
    title: 'X',
    image: images.recomend3,
    name: 'Ed Sheeran'
  },
  {
    id: '4',
    title: 'Kohinoor',
    image: images.recomend4,
    name: 'DIVINE'
  },

];
const DataInspri = [
  {
    id: '1',
    title: 'The GaryVee Audio Experience',
    image: images.inspri1,
  },
  {
    id: '2',
    title: 'Wireframe',
    image: images.inspri2,
  },
  {
    id: '3',
    title: 'Design Better Podcast',
    image: images.inspri3,
  },
  {
    id: '4',
    title: 'The Futur Podcast',
    image: images.inspri4,
  },

];
const DataPopular = [
  {
    id: '1',
    title: 'DIVINE',
    image: images.popular1
  },
  {
    id: '2',
    title: 'DJ Snake',
    image: images.popular2
  },
  {
    id: '3',
    title: 'RITVIZ',
    image: images.popular3
  },
  {
    id: '4',
    title: 'Nucleya',
    image: images.popular4
  },
  {
    id: '5',
    title: 'David Guetta',
    image: images.popular5
  },

];
const DataGenres = [
  {
    id: '1',
    title: 'Pop',
  },
  {
    id: '2',
    title: 'Hip-Hop',
  },
  {
    id: '3',
    title: 'jazz',
  },
  {
    id: '4',
    title: 'Electronic',
  },
  {
    id: '5',
    title: 'Folk',
  },

];

export default class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
          <ScrollView style={styles.explorContainer}>
            <Text style={styles.header}>Explore</Text>
            <View style={styles.wrapper}>
              <Text style={styles.titleApp}>Recently played</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DATA}
                renderItem={({item}) => 
                  <View style={styles.bgRecently}>
                    <Image style={styles.imgRecently} source={item.image}/>
                    <Text style={styles.txtRecently}>{item.title}</Text>
                  </View>
                }
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.titleApp}>Recommended for you</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DataRecomend}
                renderItem={({item}) => 
                  <View style={styles.bgReComend}>
                    <Image style={styles.imgRecomend} source={item.image}/>
                    <Text style={styles.txtTitleRecomend}>{item.title}</Text>
                    <Text style={styles.txtNameRecomend}>{item.name}</Text>
                  </View>
                }
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.titleApp}>Get Inspired !</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DataInspri}
                renderItem={({item}) => 
                  <View style={styles.bgInspri}>
                    <Image style={styles.imgRecomend} source={item.image}/>
                    <View style={styles.bgtxtInpri}>
                      <Text style={styles.txtTitleInspri}>{item.title}</Text>
                    </View>
                  </View>
                }
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.titleApp}>Popular Artists</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DataPopular}
                renderItem={({item}) => 
                  <View style={styles.bgRecently}>
                    <Image style={styles.imgRecently} source={item.image}/>
                    <Text style={styles.txtRecently}>{item.title}</Text>
                  </View>
                }
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.titleApp}>Genres & Moods</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DataGenres}
                renderItem={({item}) => 
                  <View style={styles.bgGenres}>
                    <Text style={styles.txtGenres}>{item.title}</Text>
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


