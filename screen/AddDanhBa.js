
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
import { Form, TextValidator } from 'react-native-validator-form';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input , Button, Image ,Avatar, Accessory} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

const AddDanhBa =  ({ navigation,  route }) => {
  const { callAgainApi } = route.params;

  const [valueUser,setValueUser] = useState({
        me_name: '',
        ba_name: '',
        me_phone: '',
        ba_phone: '',
        avatar_url: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
        name: '',
        address: '',
        age: 0
  });

  const [valueValidate, setValueValidate] = useState({
        me_name: '',
        ba_name: '',
        me_phone: '',
        ba_phone: '',
        avatar_url: '',
        name_child: '',
        address: '',
        age: 0
  })
  const [validate, setvalidate] = useState([])
  // const name_vali_error = ['me_name_Error','ba_name_Error','me_phone_Error','ba_phone_Error','name_child_Error','address_Error','age_Error']
  // const name_vali = ['me_name','ba_name','me_phone','ba_phone','name_child','address','age']

  function validation (){
  const arraySomething = [];
      Object.keys(valueUser).forEach(function(key) {
        if(valueUser[key] == '' || valueUser[key] == null){
          arraySomething.push(key);
        }
       });
       setvalidate(arraySomething)
     return arraySomething;
  }

  function onSubMit(){ 
    // const valuezs = validation();
    validation();
    console.warn(validate)
    // alert(valuezs);
    // if(validation == true){
    //   axios.post('https://5e96a56d5b19f10016b5e81f.mockapi.io/users',valueUser)
    //   .then(function (response) {
    //     alert('Cập nhập thành công')
    //     navigation.navigate('ListCrud');
    //     callAgainApi();
    //   })
    // }
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
              <Text style={{color:'red',paddingLeft:10,paddingBottom:10}}>{validate.includes("name") ? 'Chua nhap name' :  null}</Text>
              <Input
               onChangeText={text  => {setValueUser({...valueUser,address:text})}}
                 label='Địa chỉ bé'
                 placeholder='Nhập địa chỉ bé'
              />
              <Text style={{color:'red',paddingLeft:10,paddingBottom:10}}>{validate.includes("address") ? 'Chua nhap address' :  null}</Text>

               <Input
               onChangeText={text  => {setValueUser({...valueUser,age:text})}}
                 label='Số tuổi '
                 placeholder='Nhập số tuổi'
              />
              <Text style={{color:'red',paddingLeft:10,paddingBottom:10}}>{validate.includes("age") ? 'Chua nhap age' :  null}</Text>

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
                            keyboardType='numeric'
                        />
                  </View>
                <View style={{ width: (Dimensions.get('screen').width - 60) / 2}}>
                    <Input style={{ width: (Dimensions.get('screen').width - 60) / 2,}}
                    onChangeText={text  => {setValueUser({...valueUser,me_phone:text})}}
                        label='SDT mẹ bé'
                        keyboardType='numeric'
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

export default AddDanhBa;
