import {
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  View,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Searchbar, Checkbox} from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Filter from "../Icons/filter.svg";
import axios from 'axios';

const Home = ({navigation}) => {
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSortingLoading, setSortingLoading] = useState(false);
  const [productSearch, setProductSearch] = useState('');
  // const [ProductData, setProductData] = useState('');
  const [loading, setLoading] = useState(true);
  const ProductData = [
    {
      category: 'mens_clothing',
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      id: 1,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 109.95,
      rating: {
        count: 120,
        rate: 3.9,
      },
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    },
    {
      category: 'mens_clothing',
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      id: 2,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      price: 22.3,
      rating: {
        count: 259,
        rate: 4.1,
      },
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
    },
    {
      category: 'mens_clothing',
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      id: 3,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      price: 55.99,
      rating: {
        count: 500,
        rate: 4.7,
      },
      title: 'Mens Cotton Jacket',
    },
    {
      category: 'mens_clothing',
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      id: 4,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      price: 15.99,
      rating: {
        count: 430,
        rate: 2.1,
      },
      title: 'Mens Casual Slim Fit',
    },
    {
      category: 'jewelery',
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      id: 5,
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      price: 695,
      rating: {
        count: 400,
        rate: 4.6,
      },
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    },
    {
      category: 'jewelery',
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      id: 6,
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      price: 168,
      rating: {
        count: 70,
        rate: 3.9,
      },
      title: 'Solid Gold Petite Micropave ',
    },
    {
      category: 'jewelery',
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      id: 7,
      image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
      price: 9.99,
      rating: {
        count: 400,
        rate: 3,
      },
      title: 'White Gold Plated Princess',
    },
    {
      category: 'jewelery',
      description:
        'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
      id: 8,
      image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
      price: 10.99,
      rating: {
        count: 100,
        rate: 1.9,
      },
      title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    },
    {
      category: 'electronics',
      description:
        'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
      id: 9,
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
      price: 64,
      rating: {
        count: 203,
        rate: 3.3,
      },
      title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    },
    {
      category: 'electronics',
      description:
        'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
      id: 10,
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
      price: 109,
      rating: {
        count: 470,
        rate: 2.9,
      },
      title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    },
    {
      category: 'electronics',
      description:
        '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
      id: 11,
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
      price: 109,
      rating: {
        count: 319,
        rate: 4.8,
      },
      title:
        'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    },
    {
      category: 'electronics',
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      id: 12,
      image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
      price: 114,
      rating: {
        count: 400,
        rate: 4.8,
      },
      title:
        'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    },
    {
      category: 'electronics',
      description:
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
      id: 13,
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
      price: 599,
      rating: {
        count: 250,
        rate: 2.9,
      },
      title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    },
    {
      category: 'electronics',
      description:
        '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
      id: 14,
      image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
      price: 999.99,
      rating: {
        count: 140,
        rate: 2.2,
      },
      title:
        'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
    },
    {
      category: 'womens_clothing',
      description:
        'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
      id: 15,
      image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
      price: 56.99,
      rating: {
        count: 235,
        rate: 2.6,
      },
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    },
    {
      category: 'womens_clothing',
      description:
        '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
      id: 16,
      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
      price: 29.95,
      rating: {
        count: 340,
        rate: 2.9,
      },
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    },
    {
      category: 'womens_clothing',
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      id: 17,
      image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
      price: 39.99,
      rating: {
        count: 679,
        rate: 3.8,
      },
      title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    },
    {
      category: 'womens_clothing',
      description:
        '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
      id: 18,
      image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
      price: 9.85,
      rating: {
        count: 130,
        rate: 4.7,
      },
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    },
    {
      category: 'womens_clothing',
      description:
        '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
      id: 19,
      image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
      price: 7.95,
      rating: {
        count: 146,
        rate: 4.5,
      },
      title: "Opna Women's Short Sleeve Moisture",
    },
    {
      category: 'womens_clothing',
      description:
        '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
      id: 20,
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
      price: 12.99,
      rating: {
        count: 145,
        rate: 3.6,
      },
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
    },
  ];
  const handleSearch = query => {
    setSearch(query);
    // Simulate a search-related action
    console.log('Performing search for:', query);
  };

  const SingleProductPage = SingleItemData => {
    navigation.navigate('productdetail', {ProductDetails: SingleItemData});
  };

  useEffect(() => {
    // Make an API request here
    axios.get('https://fakestoreapi.com/products').then(response => {
      // console.log("all product data responce");
      console.log('all product data responce', response.data);
      //   setProductData(response.data);
      // setLoading(false);
    });
    //   .catch((error) => {
    //     console.error(error);
    //     setLoading(false);
    //   });
  }, []);

  const applyFilters = () => {
    let filteredProducts = ProductData;

    // Apply category filter if a category is selected
    if (selectedCategory !== 'All') {
      filteredProducts = filteredProducts.filter(
        product => product.category === selectedCategory,
      );
    }

    // Set the filtered products in state
    setFilters(filteredProducts);
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
            {/* <Icon
                name="chevron-left"
                size={20}
                onPress={() => navigation.goBack()}
              /> */}
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Lato-Bold',
                alignItems: 'center',
                marginRight: 14,
              }}>
              Home Screen
            </Text>
          </View>
          <View></View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginHorizontal: 17}}>
        <View
          style={{
            padding: 5,
            flexDirection: 'row',
            paddingHorizontal: 20,
            marginBottom: 41,
          }}>
          <Searchbar
            // style={styles.searchbar}
            placeholder="Search Product Here..."
            icon="map-marker-alt"
            style={{width: '82%', elevation: 0, backgroundColor: '#ffffff'}}
            // style={{ width:"82%",elevation:0}}
            onChangeText={handleSearch}
            value={search}
            round={true}
            inputStyle={{height: 60}}
            searchIcon={{size: 30}}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginLeft: 5,
              width: '17%',
            }}>
            <TouchableOpacity>
            <Image
              source={require('../Icons/Group.png')}
              style={styles.clockIcon}
            />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filtersContainer}>
          {/* <Text>Filter by Category:</Text> */}
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedCategory === 'All' && styles.selectedFilterOption,
            ]}
            onPress={() => {
              setSelectedCategory('All');
              applyFilters();
            }}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedCategory === 'electronics' && styles.selectedFilterOption,
            ]}
            onPress={() => {
              setSelectedCategory('electronics');
              applyFilters();
            }}>
            <Text>Electronics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedCategory === 'mens_clothing' &&
                styles.selectedFilterOption,
            ]}
            onPress={() => {
              setSelectedCategory('mens_clothing');
              applyFilters();
            }}>
            <Text>Mens Clothing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedCategory === 'womens_clothing' &&
                styles.selectedFilterOption,
            ]}
            onPress={() => {
              setSelectedCategory('womens_clothing');
              applyFilters();
            }}>
            <Text>Women's Clothing</Text>
          </TouchableOpacity>
          {/* Add more category filter options as needed */}
        </View>
        <View>
          <FlatList
            data={filters.length > 0 ? filters : ProductData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, i}) => (
              <TouchableOpacity
                key={i}
                style={styles.ViewRewards}
                // onPress={() => navigation.navigate('productdetail')}
                onPress={() => SingleProductPage(item)}>
                <View style={styles.Points}>
                  <View></View>
                  <View>
                    <View>
                      <Image
                        style={styles.CoachImage}
                        source={{uri: item.image}}
                      />
                    </View>
                  </View>
                </View>

                <View>
                  <View style={{alignItems: 'flex-start'}}>
                    <Text style={styles.categorytxt}>{item?.category}</Text>
                    <Text style={styles.ViewRewardstxt}>{item?.title}</Text>
                    <Text style={styles.pricetxt}>${item?.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
  searchbar: {
    width: '100%',
    borderRadius: 40,
    fontFamily: 'Lato-Bold',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 17,
    borderColor: '#B0ADAD',
    backgroundColor: '#ffffff',
  },
  ProductImageView: {
    // alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    paddingTop: 8,
    paddingBottom: 10,
    // borderRadius: 6,
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
  },
  CoachImage: {
    // height: Dimensions.get("screen").height / 10.7,
    // width: Dimensions.get("screen").width / 4.9,
    // // height:Dimensions.get("screen").height/16.2,
    // // width:Dimensions.get("screen").width/7.2,
    // borderRadius: 50,
    // marginBottom: 4
    height: 133,
    width: 133,
  },
  CoachName: {
    // fontFamily: 'Lato-Bold',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 15,
    color: '#000',
    textTransform: 'capitalize',
    textAlign: 'center',
    // marginBottom: 4,
    // width: Dimensions.get('screen').width / 1.91,
  },

  ViewRewards: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
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
    paddingVertical: 10,
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 12,
    textAlign: 'center',
  },
  pricetxt: {
    color: '#000000',
    paddingVertical: 10,
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 12,
    textAlign: 'center',
  },
  ViewRewardstxt: {
    color: '#000000',
    width: 200,
    paddingVertical: 10,
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 12,
  },

  filterOption: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    // backgroundColor:"#000"
  },
  selectedFilterOption: {
    backgroundColor: 'lightblue',
  },

  productItem: {
    marginBottom: 16,
  },
  filtersContainer: {
    // borderWidth:2,
    flexDirection: 'row',
    gap: 17,
    paddingVertical: 10,
    overflow: 'hidden',
  },
  clockIcon: {
    height: 30,
    width: 30,
  },
});
