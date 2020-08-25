
import React ,{ useState, useEffect }from 'react';
import {
  View,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input , Button, Image } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar, Accessory } from 'react-native-elements';
import axios from 'axios';

import ImagePicker from 'react-native-image-picker';
const TaiKhoan =  () => {

  const [valueUser,setValueUser] = useState({
        name:'',
        avatar:null,
  });
  const [users,setUser] = useState({});
  useEffect(() => {
    async function getList(){
      try{
        const {data} = await axios.get("https://5e96a56d5b19f10016b5e81f.mockapi.io/users/1");
        setUser(data);
      }catch(error){
        Alert.alert('Get one use error')
      }
    }
    getList()
  }, []);

  function onSubMit(){
    axios.put('https://5e96a56d5b19f10016b5e81f.mockapi.io/users/1',valueUser)
    .then(function (response) {
      alert('Cập nhập thành công')
    })
  }

  function imageHandle(){
    const options = {
      title: 'Select Avatar',
      chooseFromLibraryButtonTitle: 'Choose Image Library'
    };
      ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if(response.uri){
        setValueUser({ avatar: response})
        Alert.alert('asko')
      }  
    });

    // ImagePicker.launchImageLibrary(options, (response) => {
    //   console.log('Response = ', response);
    //   if(response.uri){
    //     setValueUser({ avatar: response})
    //   }  
    // });
  }
  return (
            <View>
              <Image
                source={{ uri: users.avatar }}
                style={{ width: 200, height: 200 }}
              />
              <Input
               onChangeText={text  => {setValueUser({name:text})}}
                placeholder={users.name}
                leftIcon={
                  <Icon
                    name='user'
                    size={24}
                    color='black'
                  />
                }
              />
            <Button
              title="Chose Image"
              onPress={imageHandle}
            />

            <Button
              title="Cập nhập"
              onPress={onSubMit}
            />

            </View>

  );
};

export default TaiKhoan;
