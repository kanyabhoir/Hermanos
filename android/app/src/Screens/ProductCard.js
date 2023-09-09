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
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProductCard = ({route, navigation}) => {
  const {ProductDetails} = route?.params;
  console.log('ProductDetails===inside card======>>', route);
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
              Your Product Card
            </Text>
          </View>
          <View></View>
        </View>
      </View>
      <ScrollView>
        <TouchableOpacity style={styles.cardView}>
          <View style={styles.Points}>
            <Image
              style={{borderWidth: 2, height: 150, width: 107}}
              source={{uri: ProductDetails.image}}
            />
          </View>

          <View>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={styles.categorytitle}>{ProductDetails?.title}</Text>
              <Text style={styles.categorytxt}>{ProductDetails?.category}</Text>
              <Text style={styles.categoryprice}>{ProductDetails?.price}</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.bookNowBtn}>
            <Image
              source={require('../Icons/Trash.png')}
              style={styles.clockIcon}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductCard;

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
  cardView: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 10,
  },
  Points: {
    flexDirection: 'row',
    fontSize: 10,
    alignItems: 'center',
  },
  ViewRewardsBtn: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    width: 'auto',
    borderRadius: 25,
    borderColor: '#FEAE2A',
    borderWidth: 1,
  },
  categorytxt: {
    color: '#000000',
    width: 200,
    paddingVertical: 10,
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 12,
  },
  categorytitle: {
    color: '#000000',
    width: 200,
    paddingVertical: 10,
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 12,
  },
  categoryprice: {
    color: '#000000',
    width: 200,
    paddingVertical: 10,
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 12,
  },
  categorytitle: {
    color: '#000000',
    width: 200,
    paddingVertical: 10,
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 12,
  },
  bookNowBtn: {},
  clockIcon: {
    height: 30,
    width: 30,
  },
});
