import React from 'react'
import { ActivityIndicator } from 'react-native';


const Loader = () => {
  return (
<ActivityIndicator animating={true} hidesWhenStopped={true} size={60} color="blue" style={{justifyContent: 'center',alignItems: 'center',backgroundColor:'ffffff',width:'100%',height:'100%'}} />
  )
}

export default Loader