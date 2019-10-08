import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Platform,SafeAreaView } from 'react-native';
import { Images, Profiles, Metrics } from './App/Themes';


export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.navigationBar]}>
          <Image style={styles.settingsLogo}
            source={Images.settings}/>
          <Image style={styles.tinderLogo}
            source={Images.logo}/>
          <Image style={styles.messagesLogo}
            source={Images.chat}/>
        </View>

        <View style={[styles.profileCard]}>
          <Image style = {styles.profileLogo}
            source = {Images.harold}/>
          <Text style = {styles.nameText}>
            <Text>Harold, </Text>
            <Text style = {styles.ageText}>
              {this.state.age}
            </Text>
          </Text>
          <Text style = {styles.occupationText}>
            {this.state.occupation}
          </Text>
        </View>

        <View style={[styles.actionBar]}>
          <View style = {styles.mediumButtonBackground}>
            <Image style={styles.rewindLogo}
              source={Images.rewind}/>
          </View>
          <View style = {styles.largeButtonBackground}>
            <Image style={styles.nopeLogo}
              source={Images.nope}/>
          </View>
          <View style = {styles.mediumButtonBackground}>
            <Image style={styles.boostLogo}
              source={Images.boost}/>
          </View>
          <View style = {styles.largeButtonBackground}>
            <Image style={styles.likeLogo}
              source={Images.like}/>
          </View>
          <View style = {styles.mediumButtonBackground}>
            <Image style={styles.superLikeLogo}
              source={Images.superLike}/>
          </View>
        </View>

      </View>
    );
  }
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EAEAEA'
  },
  navigationBar: {
    width: '100%',
    height: Platform.OS === 'ios' ? 44 : 56,
    backgroundColor: '#EAEAEA',
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    alignItems: 'center'
  },
  profileCard: {
    margin: 15,
    width: width * .9,
    height: width * 1.1 ,
    backgroundColor: 'white',
    borderColor: '#C5C5C5',
    borderWidth: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  actionBar: {
    width: '100%',
    backgroundColor: '#EAEAEA',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center'
  },
  profileLogo: {
    width: width * .89,
    height: width * .9,
  },
  tinderLogo: {
    width: 67,
    height: 25,
  },
  settingsLogo: {
    width: 25,
    height: 25,
    tintColor: '#C5C5C5',
  },
  messagesLogo: {
    width: 25,
    height: 25,
    tintColor: '#C5C5C5',
  },
  rewindLogo: {
    width: 18,
    height: 20,
    tintColor: 'gold',
  },
  nopeLogo: {
    width: 25,
    height: 25,
    tintColor: 'orangered',
  },
  boostLogo: {
    width: 10,
    height: 20,
    tintColor: 'mediumpurple',
  },
  likeLogo: {
    width: 25,
    height: 20,
    tintColor: 'aquamarine',
  },
  superLikeLogo: {
    width: 25,
    height: 25,
    tintColor: 'deepskyblue',
  },
  mediumButtonBackground: {
    borderRadius: 18,
    width: 36,
    height: 36,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeButtonBackground: {
    borderRadius: 23,
    width: 46,
    height: 46,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 10,
    paddingTop: 10
  },
  ageText: {
    fontSize: 24,
    fontWeight: 'normal'
  },
  occupationText: {
    fontSize: 16,
    color: 'gray',
    paddingLeft: 10
  },
});
