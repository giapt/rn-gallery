import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import Gallery from './src/components/Gallery/Gallery';

var images = [
  {
    "key": "598a678278fee204ee51cd2c",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Cornish_cream_tea_2.jpg",                    
  },
  {   
    "key": "598a678278fee204ee51cd2d",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Lactarius_indigo_48568.jpg",    
  },
  {
    "key": "598a678278fee204ee51cd2e",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oysters_served_on_ice%2C_with_lemon_and_parsley.jpg",
  },
  {  
    "key": "598a678278fee204ee51cd2f",  
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/74/Yeolmukimchi_3.jpg",
  },
  {   
    "key": "598a678278fee204ee51cd2g",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg",   
  },
  {  
    "key": "598a678278fee204ee51cd2h",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Vegetable_Cart_in_Guntur.jpg",     
  },
  {
    "key": "598a678278fee204ee51cd2i",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Simple_somen.jpg",      
  },
  {
    "key": "598a678278fee204ee51cd2k",
    "imageUrl": "http://i.imgur.com/XP2BE7q.jpg",      
  },
  {
    "key": "598a678278fee204ee51cd2l",
    "imageUrl": "http://i.imgur.com/5nltiUd.jpg",      
  },
  {
    "key": "598a678278fee204ee51cd2m",
    "imageUrl": "http://i.imgur.com/6vOahbP.jpg",      
  },
  {
    "key": "598a678278fee204ee51cd3a",
    "imageUrl": "http://i.imgur.com/kj5VXtG.jpg",      
  },
  {
    "key": "598a678278fee204ee51cd3b",
    "imageUrl": "http://i.imgur.com/XP2BE7q.jpg",      
  },
  {
    "key": "598a678278fee204ee51cd3d",
    "imageUrl": "http://i.imgur.com/5nltiUd.jpg",      
  },
  {
    "key": "598a678278fee204ee51cd3c",
    "imageUrl": "http://i.imgur.com/6vOahbP.jpg",      
  },
  {
    "key": "598a678278fee204ee51cd3i",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Simple_somen.jpg",      
  },
];

const { width, height } = Dimensions.get('window');

const equalWidth =  (width / 3 ) 

class FlatListItem extends Component {
  checkAll(){
    this.refs['selector'].checkAll();
  }
    render() {          
        return (        
            <View style={{
                flex: 1,
                flexDirection:'column',                                
            }}>            
                <View style={{
                        flex: 1,
                        flexDirection:'row',
                        // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                        backgroundColor: 'mediumseagreen'
                }}>            
                    <Image 
                        source={{uri: this.props.item.imageUrl}}
                        style={{height: 150,  width : equalWidth}}
                    >

                    </Image>           
                </View>
                <View style={{
                    height: 1,
                    backgroundColor:'white'                            
                }}>
            
                </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        fontSize: 16,  
    }
});

export default class App extends Component {
  render() {
    return (
      <ImageSelector 
      data={images}
      />
    );
  }
}
