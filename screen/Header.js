
import React ,{ useState }from 'react';
import {
    StyleSheet,
    View,
    FlatList,Text,
  } from 'react-native';

const Header =  () => {

  return (
            <View style={styles.container}>
                <View>
             <Text>Header</Text>
            </View>
            </View>

  
  );
};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'#dddd',
        justifyContent:'center',
    },
  
    
  });
export default Header;
