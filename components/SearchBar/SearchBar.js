import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Icon, Text, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ navigation }) => {

    const dummy = [
        { id: 1, title: 'Item 1', description: 'This  black nylon case will conveniently carry 60 knives whe..' },
        { id: 2, title: 'cccc', description: 'Description for item 2' },
        { id: 3, title: 'fbdfbdb', description: 'Description for item 3' },
        { id: 4, title: 'fdbbfb', description: 'Description for item 4' },
        { id: 5, title: 'myhm', description: 'Description for item 5' },
        { id: 6, title: 'Item 6', description: 'Description for item 6' },
        { id: 7, title: 'Item 7', description: 'Description for item 7' },
        { id: 8, title: 'Item 8', description: 'Description for item 8' },
        { id: 9, title: 'Item 9', description: 'Description for item 9' },
        { id: 10, title: 'Item 10', description: 'Description for item 10' },
    ]

    const [items, setItems] = useState(dummy);

    const [searchTerm, setSearchTerm] = useState('');

    const filterProducts = () => {
        setItems(dummy.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    };


    const renderItem = ({ item }) => {
        return (
            <View style={styles.list_container}>
                <View style={styles.label}>
                    <Text style={{ color: 'black', fontSize: 20, width: '40%' }}>Product Code:</Text>
                    <Text style={{ color: '#2f2e7e', fontSize: 20, width: '60%' }}>{item.title}</Text>
                </View>
                <View style={styles.label}>
                    <Text style={{ color: 'black', fontSize: 20, width: '40%' }}>Description:</Text>
                    <Text style={{ color: 'red', fontSize: 20, width: '60%' }} numberOfLines={2}>{item.description}</Text>
                </View>
            </View>
        );
    };


    return (
        <View style={styles.SearchBar_container}>
            <View style={styles.container}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Barcode"
                    onChangeText={setSearchTerm}
                    onChange={filterProducts}
                    value={searchTerm}
                />
                <AntDesign name="search1" size={24} marginLeft={10} color="black" />
            </View>
            <View style={styles.flatlist_container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}

                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SearchBar_container: {
        width: '100%',
        height: "100%",
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
        fontWeight: 'bold'
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
    flatlist_container: {
        padding: 10,
        width: '100%',
        backgroundColor: 'white',
    }

});

export default SearchBar;