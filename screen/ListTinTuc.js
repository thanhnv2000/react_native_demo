
import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'

const ListTinTuc =  ({ navigation }) => {
     const [allTinTuc, setAllTinTuc] = useState([])
     const getListCate = () => {
          axios.get('https://hosteshoper.000webhostapp.com/api/post')
          .then(function (response) {
             setAllTinTuc(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      useEffect(getListCate, []);
  return (
            <View>
                <FlatList
                    data={allTinTuc}
                    renderItem={({item})=>
                    <TouchableOpacity onPress={()=>{
                         navigation.navigate('ChiTietTinTuc',{
                              post: item,
                            })
                      }}>
                              <View  style={{flexDirection: 'row',paddingVertical:5}}>
                                   <Image source={{
                                        uri: item.image,
                                        method: 'POST',
                                        headers: {
                                             Pragma: 'no-cache'
                                        },
                                        body: 'Your Body goes here'
                                        }} style={{width: 70 , height:70 }}  />
                                   <View style={{width:'80%',paddingLeft:5}}>  
                                        <Text style={{paddingVertical:2,fontSize:17,fontWeight:'bold'}}>{item.title}</Text>
                                   <Text>{(item.short_description).slice(0,50)+'...'}</Text>
                                   </View>
                              </View>
                      </TouchableOpacity>
                    } 
                    keyExtractor={(item,index) => `${index}`}
                />
                
            </View>
  
  );
};

export default ListTinTuc;
