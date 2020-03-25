import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
const heightMiniMusic = height/8;

 
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#fff',
      flex:1,
      paddingTop:15,
    },
    explorContainer:{
        paddingHorizontal:15,
    },
    miniPlayer:{
        position:'absolute',
        bottom:0,
        height:heightMiniMusic, 
        backgroundColor:'#EBEBEB', 
        width: '100%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    header:{
        color:'#000000',
        fontSize:34,
        fontWeight:'bold',

    },
    wrapper:{
        paddingVertical: 10
    },
    titleApp:{
        color:'#000000',
        fontSize: 22,
        fontWeight:'bold',
        marginTop:10
    },
    imgRecently:{
        width: 114,
        height: 114,
    },
    txtRecently:{
        fontSize: 15,
        color: '#000000',
        fontWeight:'700',
        marginTop: 5
    },
    bgRecently:{
        marginRight: 12,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    },
    imgRecomend:{
        width: 180,
        height: 180,
    },
    txtTitleRecomend:{
        fontSize: 17,
        color: '#000000',
        fontWeight:'700',
        marginTop: 5
    },
    txtNameRecomend:{

    },
    bgReComend:{
        marginRight: 12,
        marginTop:20,
    },
    txtTitleInspri:{
        fontSize: 17,
        color: '#000000',
        fontWeight:'700',
        textAlign:'center'
    },
    bgInspri:{
        marginRight: 12,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    },
    bgtxtInpri:{
        alignItems:'center',
        width:180,
        height:48,
        marginTop: 5,
    },
    bgGenres:{
        width: 150,
        height: 70,
        backgroundColor: '#FF2D55',
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'center',
        marginRight: 15,
        marginTop: 20,
        marginBottom: 80
    },
    txtGenres:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    imgMiniMusic:{
        width: 54,
        height: 54,
        borderRadius: 15
    },
    bgImgMiniMusic:{
        width: '20%',
        alignItems:'center'
    },
    bgtxtMini:{
        width: '60%',
        alignItems:'flex-start',
    },
    bgImgIconmini:{
        width:'20%',
        alignItems:'center'
    },
    txtNameMusicmini:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000000',
    },
    txtSingleMusicmini:{
        color: '#000000',
        opacity: 0.6,
        fontSize: 13
    },
    bgButtonTrending:{
        width: 115,
        height: 50,
        backgroundColor: '#FF2D55',
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'center',
        marginRight: 15,
        marginTop: 20,
    },
    rebgButtonTrending:{
        width: 115,
        height: 50,
        backgroundColor: '#EBEBEB',
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'center',
        marginRight: 15,
        marginTop: 20,
    },
    txtButtonTrending:{
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
    retxtButtonTrending:{
        fontSize: 15,
        color: '#080808',
        fontWeight: 'bold',
    },
    wrapperTrending:{
        paddingTop: 25

    },
    titleTrending:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom:20
    },
    wrapperContentTrending:{
        justifyContent:'space-between',
        width: '100%',
        flexDirection:'row',
        marginBottom: 15,

    },
    bgImgTrending:{
        width: '35%',
    },
    bgTextTrending:{
        width: '55%',
        justifyContent:'space-between',
        paddingLeft: 10
    },
    bgIconTrending:{
        width: '10%',
    },
    imgTrending:{
        width: 114,
        height: 114,

    },
    topTrend:{
        width: 43,
        height: 25,
        backgroundColor: '#FF2D55',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15
    },
    txtTopTrend:{
       fontSize: 13,
       color: '#fff'
    },
    txtSongTrend:{
        color:'#000000',
        fontSize: 20,
        fontWeight:'bold'
    },
    txtSingleTrend:{
        fontSize: 15,
        color: '#838383'
    },
    bgViewTrend:{
        flexDirection: 'row',
        alignItems:'center'
    },
    icPauseTrend:{
        width: 12,
        height: 12,
    },
    txtViewTrend:{
        color: '#000000',
        opacity: 0.6,
        fontSize: 13,
        fontWeight: '700',
        marginLeft: 5

    },
    viewEmpty:{
        height:20
    },
    icMoreTrend:{
        width: 32,
        height: 32
    },
    wrapperSearch:{
        paddingHorizontal: 15,

    },  
    bgTopSearch:{
        flexDirection:'row',
        backgroundColor:'#EBEBEB',
        alignItems:'center',
        paddingHorizontal: 14,
        borderRadius: 25,
        height: 55,
        width: '100%',
        justifyContent:'center'

    },
    imgIcSearch:{
        width: 25,
        height: 25,
    },
    inPutSerch:{
        height: 40,
        width: '90%',
        color:'#000000',
        fontSize: 17,
        // flexWrap: 'nowrap',
        // overflow: 'hidden',
        
    },
    bghSearchSongName:{
        marginTop: 25,
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    songNameText:{
        width: '90%',
    },
    txtSN:{
        color: '#FF2D55',
        fontSize: 20,
        fontWeight: 'bold'
    },
    txtSNMore:{
        color: '#838383',
        fontSize: 15
    },
    bgSearchAlbum:{
        marginRight: 12,
        marginTop:25,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 80
    },
    iconMusic:{
        width: 32,
        height: 32
    }
  
  
  })

  export default styles;