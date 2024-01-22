import react from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


const BottomTab = ({home,cart,profile}) => {
    return (
        <View style={styles.container}>

         <View style={styles.innercontainer}>

      
          
            <TouchableOpacity style={styles.tab} onPress={home}>
                <Image style={styles.icon} source={require('../../../assets/images/home.png')} />
            </TouchableOpacity>
          

          
            <TouchableOpacity style={styles.tab} onPress={cart}>
                <Image style={styles.icon} source={require('../../../assets/images/cart.png')} />
            </TouchableOpacity>
        

           
            <TouchableOpacity style={styles.tab} onPress={profile}>
                <Image style={styles.icon} source={require('../../../assets/images/profile.png')} />
            </TouchableOpacity>
           

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
//     container:{
// flex:0,
//     },
    container: {
        backgroundColor:'#2a2e7e'    
    },
    innercontainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop:15,
        paddingBottom:15
    },
    icon: {
        width: 25,
        height: 25,
        tintColor: '#748c94',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default BottomTab;
