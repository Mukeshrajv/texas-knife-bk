import react from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';


const BottomTab = ({home,cart,profile}) => {
    return (
        <View style={styles.container}>

         <View style={styles.innercontainer}>

      
          
            <TouchableOpacity style={styles.tab} onPress={home}>
                <Image style={styles.icon} source={require('../../../assets/images/home.png')} />
            </TouchableOpacity>
          

          
            <TouchableOpacity style={styles.tab} onPress={cart}>
               <View style={{backgroundColor:'#FF0000',borderRadius:50,width:15,height:15,position:'absolute',top:-3,left:54,zIndex:1}}>
                 <Text style={{color:"#ffffff",textAlign:"center",fontSize:10,position:'relative'}}>{useSelector((state)=>state.cartdata.cartCount)}</Text>
               </View>
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
        paddingTop:16,
        paddingBottom:16
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
