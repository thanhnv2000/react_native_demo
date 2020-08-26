
import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { ListItem, Icon, Button  } from 'react-native-elements';


const ListCrud =  ({ navigation }) => {

    const [list, setListDanhBa] = useState([])
    const getListCate = () => {
         axios.get('https://5e96a56d5b19f10016b5e81f.mockapi.io/users')
         .then(function (response) {
           let data = response.data;
           setListDanhBa(data);
         })
         .catch(function (error) {
           console.log(error);
         });
     };
     useEffect(getListCate, []);
    

     function callAgainApi(){
        getListCate();
     }

      
      
       return (
           <View>
                 <Button
                    title="Thêm mới danh bạ"
                    buttonStyle={{backgroundColor:'green'}}
                    onPress={()=>{
                        navigation.navigate('AddDanhBa',{
                            callAgainApi : callAgainApi
                          })
                    }}
                 />
                    {
                        list.map((l, i) => (
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate('EditDanhBa',{
                                     users: l, 
                                     callAgainApi : callAgainApi
                                   })
                             }}>
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                    rightIcon={{ name:  'ios-american-football'}}
                                    buttons='submit'
                                    bottomDivider
                                />
                            </TouchableOpacity>

                        ))
                    }
            </View>
         
  )
};

export default ListCrud;
