
import React ,{ useState, useEffect }from 'react';
import {
  View,
  TextInput,
  Text,
  Alert,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input , Button, Image ,Avatar, Accessory} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import ImagePicker from 'react-native-image-picker';
const EditDanhBa =  ({ navigation,  route }) => {
  const { users } = route.params;
  const { callAgainApi } = route.params;

  const [valueUser,setValueUser] = useState(users);

  function onSubMit(){
    axios.put(`https://5e96a56d5b19f10016b5e81f.mockapi.io/users/${users.id}`,valueUser)
    .then(function (response) {
      alert('Cập nhập thành công');
      navigation.navigate('ListCrud')
      callAgainApi();
    })
  }

  function onDelete(){
  
    Alert.alert(
      'Bạn có chắc muốn xóa danh bạ này ?',
      'Lưu ý :sẽ không lấy lại đc khi xóa',
      [
        { text: 'Đồng ý', onPress: () => {
          axios.delete(`https://5e96a56d5b19f10016b5e81f.mockapi.io/users/${users.id}`)
          .then(function (response) {
            alert('Xóa thành công')
            navigation.navigate('ListCrud');
            callAgainApi();
          })
        } },
        {
          text: 'Hủy',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
      ],
      { cancelable: false }
    );
  }


  // function imageHandle(){
  //   const options = {
  //     title: 'Select Avatar',
  //     chooseFromLibraryButtonTitle: 'Choose Image Library'
  //   };
  //     ImagePicker.showImagePicker(options, (response) => {
  //     console.log('Response = ', response);
  //     if(response.uri){
  //       setValueUser({ avatar: response})
  //       Alert.alert('asko')
  //     }  
  //   });
  // }
  return (

<ScrollView>
    <View style={styles.container}>
             <View style={styles.header}>
                    <View style={styles.headerContent}>
                    <Image style={styles.avatar}
                    source={{uri: users.avatar_url}}/>
                    </View>
               </View>

               <Input
               onChangeText={text  => {setValueUser({...valueUser,avatar_url:text})}}
                 label='Anh be'
                 value={valueUser.avatar_url}
              />
              <Input
               onChangeText={text  => {setValueUser({...valueUser,name:text})}}
                 label='Họ tên bé'
                 value={valueUser.name}
              />
              <Input
               onChangeText={text  => {setValueUser({...valueUser,address:text})}}
                 label='Địa chỉ bé'
                 value={valueUser.address}
              />

               <Input
               onChangeText={text  => {setValueUser({...valueUser,age:text})}}
                 label='Số tuổi '
                 value={valueUser.age}
              />

               <Input
               onChangeText={text  => {setValueUser({...valueUser,ba_name:text})}}
                 label='Tên ba bé'
                 value={valueUser.ba_name}

              />
                <Input
                onChangeText={text  => {setValueUser({...valueUser,me_name:text})}}
                 label='Tên mẹ bé'
                 value={valueUser.me_name}
              />
              
              <View style={{flexDirection:'row'}}>
                  <View  style={{ width: (Dimensions.get('screen').width - 60) / 2}}>
                        <Input
                        onChangeText={text  => {setValueUser({...valueUser,ba_phone:text})}}
                            label='SDT ba bé'
                            keyboardType='numeric'
                          value={valueUser.ba_phone}

                        />
                  </View>
                <View style={{ width: (Dimensions.get('screen').width - 60) / 1.5}}>
                        <Input 
                        onChangeText={text  => {setValueUser({...valueUser,me_phone:text})}}
                            label='SDT mẹ bé'
                            keyboardType='numeric'
                            value = {valueUser.me_phone}
                        />    
                </View>
              </View>


            {/* <Button
              title="Chose Image"
              onPress={imageHandle}
            /> */}
            <View style={{flexDirection:'row'}}>
              <View style={{width: (Dimensions.get('screen').width - 60) / 1.5}}>
                <Button
                  title="Cập nhập"
                  onPress={onSubMit}
                />
              </View>
                <View style={{width: (Dimensions.get('screen').width - 60) / 2 , paddingLeft:10}}>
                  <Button
                  title="Xóa"
                  onPress={onDelete}
                  buttonStyle= {{backgroundColor:'#f7566d'}}
                />
                </View>
            </View>
      
            </View>
            </ScrollView>

  );
};
const styles = StyleSheet.create({
   
    header:{
      backgroundColor:'#fff'
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 150,
      height: 150,
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
    }
  });

export default EditDanhBa;
