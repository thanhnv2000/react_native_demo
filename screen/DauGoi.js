
import React ,{ useState }from 'react';

import { View, Text, Image } from 'react-native'
import {Rating, AirbnbRating , CheckBox, Tooltip } from 'react-native-elements'
const DauGoi =  () => {
  function ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  return (
            <View>
             <Text>Trang dau gois</Text>
           
          <CheckBox
            title='Click Here'
            checked
          />
         <AirbnbRating
                count={11}
                reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                defaultRating={11}
                size={20}
            />  

              <Rating
                showRating
                onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10 }}
              />

              <Rating
                type='heart'
                ratingCount={3}
                imageSize={60}
                showRating
                onFinishRating={ratingCompleted}
              />
          <Tooltip popover={<Text>Info here</Text>}>
              <Text>Press me</Text>
            </Tooltip>
            </View>

  
  );
};

export default DauGoi;
