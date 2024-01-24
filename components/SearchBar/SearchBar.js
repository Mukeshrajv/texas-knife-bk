import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Icon, Text, Platform ,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';
import HTMLView from 'react-native-htmlview';
import { useDispatch } from 'react-redux'; 
import { getProductDetails } from '../../Slice/ProductDetailsSlice';
import filter from 'lodash.filter';
import debounce from 'lodash/debounce';
import BottomTab from "../Sub-components/ButtomTab/BottomTab";



const SearchBar = ({ navigation }) => {
    const dispatch=useDispatch();
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const[fullData,setFullData]=useState([])
   const [page, setPage] = useState(1);

    useEffect(()=>{
    const searchbarapi="https://www.texasknife.com/dynamic/texasknifeapi.php?action=get_product_like"
    const fetchdata=async()=>{
     try{
        const response=await axios.get(searchbarapi);
        setData(response.data.data)
        setFullData(response.data.data)

     }catch(error){
        console.log(error)
     }
    }
    fetchdata()
    },[page])

    const handleEndReached = () => {
        // Load more data when the end of the list is reached
        setPage(page + 1);
      };

   const handleSearch=(text)=>{
    setSearchQuery(text)
    const formattedQuery=text.toLowerCase();
    const filteredData=filter(fullData,(product)=>{
        return contains(product,formattedQuery)
    })
    setData(filteredData)
   }

   const contains=({sku},query)=>{
    if(sku.toLowerCase().includes(query)){
        return true
    }else{
        return false
    }
   }

  const onClickHandle=(item)=>{
    navigation.navigate('pop')
    dispatch(getProductDetails(item.sku))
  }

  const home = () => {
    navigation.navigate('Home')
}
const cart = () => {
    navigation.navigate('cart')
}
const profile = () => {
    navigation.navigate('Profile')
}

    return (
        <View>
        <View style={styles.SearchBar_container}>
            <View style={styles.container}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Barcode"
                    onChangeText={(text)=>handleSearch(text)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={searchQuery}
                />
                <AntDesign name="search1" size={24} marginLeft={10} color="black" />
            </View>
            <View style={styles.flatlist_container}>

                {searchQuery?( <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item.sku.toString()}
                    renderItem ={ ({item} ) => (
                            <TouchableOpacity key={item.sku} keyExtractor style={styles.list_container} onPress={()=>onClickHandle(item)}>
                                <View style={styles.label}>
                                    <Text style={{ color: 'black', fontSize:16, width: '40%',fontWeight:'bold' }}>Product Code:</Text>
                                    <Text style={{ color: '#2f2e7e', fontSize: 16, width: '60%' }}>{item.sku}</Text>
                                </View>
                                <View style={styles.label}>
                                    <Text style={{ color: 'black', fontSize: 16, width: '40%',fontWeight:'bold' }}>Description:</Text>
                                    <ScrollView style={styles.htmlcontainer}>
                                    <HTMLView   value={item.description}  stylesheet={customStyles} />
                                    </ScrollView>
                                  
                                    {/* <Text style={{ color: 'red', fontSize: 20, width: '60%' }} numberOfLines={2}>{item.description}</Text> */}
                                </View>
                            </TouchableOpacity>
                        )}
                
                        onEndReached={handleEndReached}
                        onEndReachedThreshold={0.1}

                />):(<View></View>)}
               
            </View>
            

        </View>
        <BottomTab home={home} cart={cart} profile={profile} />
        </View>
    );
};
const customStyles = StyleSheet.create({
    p: {
         fontSize: 16,
        marginBottom:-60      
     },
    // Add more styles for other HTML elements as needed
  });
const styles = StyleSheet.create({
    SearchBar_container: {
        width: '100%',
        height: "93.5%",
        paddingTop: 30,
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 10,
        marginTop: 15,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    search_container: {
        height: '92%',
        marginTop: 20,

    },
    list_container: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderColor: 'black',
        borderRadius: 10,
        width: '95%',
        shadowColor: '#000',
        elevation: 5,
        ...Platform.select({
            android: {
                shadowColor: '#000',
                elevation: 5,
            },
            ios: {
                shadowColor: '#171717',
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            }
        })
    },
    label: {
        flexDirection: 'row',

    },
    htmlcontainer:{
        // backgroundColor:'green',
        height:60,
        maxWidth:'80%',
        overflow:'scroll'
    },
    flatlist_container: {
        padding: 10,
        width: '100%',
        backgroundColor: 'white',
    }

});

export default SearchBar;