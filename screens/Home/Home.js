import React from 'react';
import { Text, View } from 'react-native';


class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    }
    render(){
      return(
      <View>
        <Text>This is home page</Text>
      </View>
       )
     }
  }

  export default Home;