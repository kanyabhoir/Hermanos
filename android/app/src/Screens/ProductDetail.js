import {
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import React from 'react';

const ProductDetail = ({route, navigation}) => {
  const {ProductDetails} = route?.params;

  const SingleProductPage = SingleItemData => {
    navigation.navigate('productcard', {ProductDetails: SingleItemData});
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <View style={styles.headerinner}>
          <View>
            <Icon
              name="chevron-left"
              size={20}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Lato-Bold',
                alignItems: 'center',
                marginRight: 14,
              }}>
              Product Detail
            </Text>
          </View>
          <View></View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginHorizontal: 17}}>
        <ImageBackground
          source={{uri: ProductDetails?.image}}
          style={styles.coachImage}>
          <TouchableOpacity style={styles.backIcon} onPress={() => GoBack()}>
            <Icon name="chevron-left" size={20} color={'#FFFFFF'} />
          </TouchableOpacity>

          <LinearGradient
            colors={['#0d18a100', '#0d18a1e6']}
            start={{x: 0.5, y: 0.5}}
            end={{x: 0.5, y: 0.9}}
            style={styles.linearGradient}></LinearGradient>
        </ImageBackground>
        <View style={{marginHorizontal: 17, marginTop: 24}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
                width: '70%',
              }}>
              {ProductDetails?.title}
            </Text>
            <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
              $ {ProductDetails?.price}
            </Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 15, color: '#000'}}>
              {ProductDetails?.category}
            </Text>
          </View>
          <View style={{marginBottom: 28}}>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                lineHeight: 18,
                fontWeight: '600',
              }}>
              description
            </Text>
            <Text style={{fontSize: 14, color: '#000'}}>
              {ProductDetails?.description}
            </Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.bookNowBtn} onPress={() => SingleProductPage(ProductDetails)}>
          <Text style={styles.booknowText}>Book Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  header: {
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
    marginBottom: 28,
  },
  headerinner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bgImage: {
    marginRight: 12,
    width: 150,
    borderRadius: 10,
    overflow: 'hidden',
    height: 210,
    backgroundColor: '#00000060',
    position: 'relative',
  },
  linearGradient: {
    position: 'relative',
    height: Dimensions.get('screen').height / 1.58,
    width: Dimensions.get('screen').width / 1.1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  coachImage: {
    height: Dimensions.get('screen').height / 1.58,
    width: Dimensions.get('screen').width / 1.1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  backIcon: {
    zIndex: 100,
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 5,
  },
  bookNowBtn: {
    justifyContent: 'center',
    textAlign: 'left',
    backgroundColor: '#003AD0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
    paddingVertical: 15,
  },
  booknowText: {
    color: '#fff',
    fontFamily: 'Lato-Black',
    alignSelf: 'center',
  },
});
