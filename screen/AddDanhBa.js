
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

  const [valueUser,setValueUser] = useState({
        me_name: '',
        ba_name: '',
        me_phone: '',
        ba_phone: '',
        avatar_url: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
        name_child: '',
        address: '',
        age: 0
  });

  function onSubMit(){
    axios.post('https://5e96a56d5b19f10016b5e81f.mockapi.io/users',valueUser)
    .then(function (response) {
      alert('Cập nhập thành công')
      navigation.navigate('ListCrud')
    })
  }

//   function imageHandle(){
//     const options = {
//       title: 'Select Avatar',
//       chooseFromLibraryButtonTitle: 'Choose Image Library'
//     };
//       ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);
//       if(response.uri){
//         setValueUser({ avatar: response})
//         Alert.alert('asko')
//       }  
//     });
//   }


  return (

<ScrollView>
    <View style={styles.container}>
        <Text style={{fontSize:20, paddingBottom:10}}>Thêm danh bạ</Text>
              <Input
               onChangeText={text  => {setValueUser({...valueUser,name:text})}}
                 label='Họ tên bé'
                 placeholder='Nhập tên của bé'
              />
              <Input
               onChangeText={text  => {setValueUser({...valueUser,address:text})}}
                 label='Địa chỉ bé'
                 placeholder='Nhập địa chỉ bé'
              />
               <Input
               onChangeText={text  => {setValueUser({...valueUser,age:text})}}
                 label='Số tuổi '
                 placeholder='Nhập số tuổi'
              />
               <Input
               onChangeText={text  => {setValueUser({...valueUser,ba_name:text})}}
                 label='Tên ba bé'
                 placeholder='Nhập tên ba bé'
              />
                <Input
               onChangeText={text  => {setValueUser({...valueUser,me_name:text})}}
                 label='Tên mẹ bé'
                 placeholder='Nhập tên mẹ bé'
              />
              
              <View style={{flexDirection:'row'}}>
                  <View  style={{ width: (Dimensions.get('screen').width - 60) / 2}}>
                        <Input
                        onChangeText={text  => {setValueUser({...valueUser,ba_phone:text})}}
                            label='SDT ba bé'
                            placeholder='Phone ba bé'
                        />
                  </View>
                <View style={{ width: (Dimensions.get('screen').width - 60) / 2}}>
                    <Input style={{ width: (Dimensions.get('screen').width - 60) / 2,}}
                    onChangeText={text  => {setValueUser({...valueUser,me_phone:text})}}
                        label='SDT mẹ bé'
                        placeholder='Phone mẹ bé'

                    />    
                </View>
              </View>


            {/* <Button
              title="Chose Image"
              onPress={imageHandle}
            /> */}

            <Button
              title="Thêm mới"
              onPress={onSubMit}
            />

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
