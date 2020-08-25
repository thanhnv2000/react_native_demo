import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';

const UserPro =  ({ navigation,  route }) => {
  const { userInfor } = route.params;
    return (
    <ScrollView>
        <View style={styles.container}>
             <View style={styles.header}>
            <ImageBackground style={{width:'100%', height:250}} source={{uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-minimalistic-purple-gradient-geometric-background-image_200139.jpg'}}>
                  <View style={styles.headerContent}>
                      <Image style={styles.avatar}
                      source={{uri: userInfor.avatar_url}}/>
                      <Text style={styles.name}>Bé : {userInfor.name_child}</Text>
                      <Text style={{color:'white'}}>Địa chỉ : {userInfor.address} </Text>
                  </View>
              </ImageBackground>
              </View>

            <View style={styles.body}>
               <View style={{flexDirection: 'row'}}>
                            <View style={styles.iconContent}>
                            <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
                            </View>
                            <View style={styles.infoContent}>
                            <Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Gia đình</Text>
                            </View>
                </View>
                <View style={{flexDirection: 'row',paddingLeft:10}}>
                            <View style={styles.iconContent}>
                            <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
                            </View>
                            <View style={styles.infoContent}>
                               <Text style={styles.info}>Bố: {userInfor.ba}</Text>
                                <Text style={styles.info}>SDT: {userInfor.ba_phone}</Text>
                            </View>
                </View>
                <View style={{flexDirection: 'row',paddingLeft:10}}>
                            <View style={styles.iconContent}>
                            <Image style={styles.icon} source={{uri: 'data:image/png;base64,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'}}/>
                            </View>
                            <View style={styles.infoContent}>
                                <Text style={styles.info}>Mẹ: {userInfor.me}</Text>
                                <Text style={styles.info}>SDT: {userInfor.me_phone}</Text>
                            </View>
                </View>
  


        
                {/* <View style={{flexDirection: 'row'}}>
                            <View style={styles.iconContent}>
                            <Image style={styles.icon} source={{uri: 'https://www.clipartmax.com/png/middle/69-699906_infant-cartoon-clip-art-clip-art-baby-brother.png'}}/>
                            </View>
                            <View style={styles.infoContent}>
                            <Text style={{fontWeight:'bold',color:'black',fontSize:20}}>Bé</Text>
                            </View>
                </View>
                <View style={{flexDirection: 'row',paddingLeft:25}}>
                            <View style={styles.infoContent}>
                                <Text style={styles.info}>Họ và tên: Nguyễn Trường Xuân</Text>
                                <Text style={styles.info}>Địa chỉ: Thanh Xuân - Mỹ Đình 2</Text>
                            </View>
                </View> */}

            </View>
        </View>
        </ScrollView>
      );
};


const styles = StyleSheet.create({
   
  header:{
    backgroundColor:'aqua'
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#fff",
    height:500,
  },
  item: {
    width: (Dimensions.get('screen').width - 60) / 2
  },
  infoContent:{
    paddingLeft:50,
    width: '80%'
  },

  iconContent:{
    alignItems:'flex-start',
    paddingRight:10,
    width: '5%'
  },

  icon:{
    width:30,
    height:30,
  },
  info:{
    fontSize:18,
    color: "black",
  },
  textDetail:{
    color: "black",
    fontSize:18,
  }
});
export default UserPro;
 