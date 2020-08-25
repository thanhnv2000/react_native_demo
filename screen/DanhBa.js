
import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements';



const DanhBa =  ({ navigation }) => {

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
    // const list = [
    //     {
    //       name: 'Phụ huynh bé Hiếu',
    //       me_name: 'Ngọc Linh',
    //       ba_name: 'Lê Ngọc Tâm',
    //       me_phone: ' 0984390543',
    //       ba_phone: ' 0984397654',
    //       avatar_url: 'https://i.pinimg.com/originals/36/a5/09/36a5090dbc00b9992018ddbb9dbc09b0.jpg',
    //       subtitle: 'Vice President',
    //       name_child: ' Nguyễn Trường Xuân',
    //       address: 'Thanh Xuân - Mỹ đình 2',
    //       age: 3
    //     },
    //     {
    //       name: 'Phụ huynh bé Xuân',
    //       me_name: 'Ngọc Bích',
    //       ba_name: 'Hồ Quang Hiếu',
    //       me_phone: ' 0984390589',
    //       ba_phone: ' 0988765888',
    //       avatar_url: 'https://tinbacgiang.net/file/upload/images/bacgiang/20180404/29314564_952891881554881_6869352933200239202_n.jpg',
    //       subtitle: 'Vice Chairman',
    //       name_child: 'Lê Xuân Quảng',
    //       address: 'Hồ Tây - Hà Nội',
    //       age: 3
    //     },
    //   ];
    
      const KEYExtractor = (item, index) => index.toString()
    
      const RENDERItems = ({ item }) => (
          <TouchableOpacity onPress={()=>{
            navigation.navigate('UserPro',{
                userInfor: item,
               })
          }}>
                <ListItem
                    title={item.name}
                    subtitle={item.subtitle}
                    leftAvatar={{ source: { uri: item.avatar_url } }}
                    bottomDivider
                    chevron
                />
            </TouchableOpacity>
      )
       return (
           <View>
               {/* <Text>abc</Text> */}
        
                <FlatList
                keyExtractor={KEYExtractor}
                data={list}
                renderItem={RENDERItems}
                />
            </View>
         
  )
};

export default DanhBa;
