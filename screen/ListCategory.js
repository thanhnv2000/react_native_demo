
import React ,{ useState, useEffect }from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';

import { NavigationContainer } from '@react-navigation/native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import CateListItem from '../android/app/src/component/CateListItem';
import IconDauGoi from '../android/app/src/asset/img/dau-goi.png';
import IconDon from '../android/app/src/asset/img/don_icon.png';
import Icontkb from '../android/app/src/asset/img/icon_tkb.png';
import IconThuoc from '../android/app/src/asset/img/thuoc-icon.jpg';
import Header from '../screen/Header';
import IconSucKhoe from '../android/app/src/asset/img/suc-khoe.jpg';

const ListCategory = ({ navigation }) => 

{
  const [Category,setCategory] = useState([
      {id: 2, name : 'Đơn thuốc',image :IconThuoc },
      {id: 3, name : 'Xin nghỉ học',image :IconDon },
      {id: 4, name : 'Lịch học',image :Icontkb },
      {id: 5, name : 'Sức khỏe',image :IconSucKhoe },
    ])

    navigationOptions = ({ navigation }) => {
      return {
        headerTitle: <Header />,
        headerRight: (
          <Button
            onPress={navigation.getParam('increaseCount')}
            title="+1"
            color="#fff"
          />
        ),
      };
    };
    // const [News,setNews] = useState([
    //   {id: 1, name : 'Mẹo giúp trẻ năng động hơn'},
    //   {id: 2, name : 'Những cuốn sách hữu ích cho bé'},
    //   {id: 3, name : 'Hoạt động nhà trường với các bé'},
    // ])

    const [News, setAllTinTuc] = useState([])
    const getListCate = () => {
         axios.get('https://hosteshoper.000webhostapp.com/api/post')
         .then(function (response) {
           let data = response.data;
           let threeNews = data.filter(el => (el.id <= 3));
            setAllTinTuc(threeNews);
         })
         .catch(function (error) {
           console.log(error);
         });
     };
     useEffect(getListCate, []);

  return (

            <View style={styles.container}>
               <View style={{flexDirection: 'row'}}>
                  <View style={styles.titleTinTuc}>
                    <Text style={styles.textTitleTinTuc}>Tin tức</Text>
                  </View>
                  <View  style={styles.titleXemThem}>
                    <TouchableOpacity onPress={()=>{
                      navigation.navigate('ListTinTuc')
                      }}>
                            <Text style={styles.textTitleTinTuc}>Xem Thêm</Text>
                    </TouchableOpacity>

                  </View>
              </View>
              <View>

                  <FlatList
                    data={News}
                    renderItem={({item})=>

                    <TouchableOpacity onPress={()=>{
                      navigation.navigate('ChiTietTinTuc',{
                        post: item,
                      })
                      }}>

                        <View  style={{flexDirection: 'row',paddingVertical:5}}>
                            <Image style={{width: 30 , height:30 }}  source={require('../android/app/src/asset/img/newsIcon.png')}/>
                            <Text style={{paddingVertical:5,paddingHorizontal:5}}> - {item.title}</Text>
                          </View>
                      </TouchableOpacity>
                    } 
                    keyExtractor={(item,index) => `${index}`}
                  />
                
               
              </View>

              <FlatList
                data={Category}
                renderItem={({item})=>
                    <View style={styles.wrapper}>
                          <CateListItem category={item} navigation={navigation} />
                    </View>
                } 
                keyExtractor={(item,index) => `${index}`}
                numColumns={4}
              />
            </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent:'center',
    paddingVertical:5,
    paddingHorizontal:5
  },
  wrapper:{
    paddingHorizontal:8,
    paddingVertical:2,
  },
  titleTinTuc: {
    backgroundColor:'#de5931',
    borderTopRightRadius:15,
    width: (Dimensions.get('screen').width - 60) / 1.2,
  },
  textTitleTinTuc: {
    paddingHorizontal:10,
    paddingVertical:5,
    color:'white'
  },

  titleXemThem: {
    backgroundColor:'#3c8873',
    marginLeft:5
  },

  
});

export default ListCategory;
