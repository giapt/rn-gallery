import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Gallery extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected: []
        }
        this.select = this.select.bind(this);
    }

    select(i) {
        let arr = this.state.selected;
        if (arr.indexOf(i) > -1){
            arr.splice(arr.indexOf(i), 1);
            this.setState({
                selected: arr
            });
        } else {
            arr.push(i);
            this.setState({
                selected: arr
            })
        }
    }

    // selectAll(){
    //     let arr = []
    //     this.images.map((val, i)=>arr.push(i));
    //     this.setState({
    //         selected: arr
    //     })
    // }

    cancel(){
        this.setState({
            selected: []
        })
    }

    renderImg(){
        let imgComponent = [];
        this.images.map((val, i) => {
            if(this.state.selected.indexOf(i) > -1){
                imgComponent.push(
                    <TouchableOpacity key={i} onPress={() => this.select(i)}>
                        <View style = {styles.imageList}>
                            <Image source={val} style={styles.selectedImg} resizeMode="cover"/>
                            <View style={styles.iconSelected}>
                                <Icon name="check-circle"/>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            } else {
                imgComponent.push(
                    <TouchableOpacity key={i} onPress={() => this.select(i)}>
                        <View style = {styles.imageList}>
                            <Image source={val} style={styles.img} resizeMode="cover"/>
                        </View>
                    </TouchableOpacity>
                )
            }            
        });
        return imgComponent;
    }

    render(){
        if(this.props.data) this.images = this.props.data;
        else this.images = [];
        return(
            <View style = {styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.cancel()}>
                        <Text style={{flex: 2, lineHeight: 50, textAlign: "center", color: "#F5F6F7"}}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={{flex: 6, lineHeight: 50, textAlign: "center", color: "#F5F6F7"}}>
                        {this.state.selected.length == 0 ? 'Select image' : this.state.selected.length+' images have been selected'}
                    </Text>
                    <TouchableOpacity onPress={()=>this.selectAll()}>
                        <Text style={{flex: 2, lineHeight: 50, textAlign: "center", color: "#F5F6F7"}}>Select All</Text>
                    </TouchableOpacity>  
                </View>
                <ScrollView>
                    <View style = {styles.imageContainer}>{this.renderImg()}</View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F7',
    },
    header:{
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: '#f5ad38',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white'
    },
    imageList: {
        padding: 2,
        width: Dimensions.get('window').width/3,
        height: Dimensions.get('window').width/3
    },
    img: {
        width:'100%',
        height: '100%'
    },
    selectedImg:{
        width: '100%',
        height: '100%',
        opacity: 0.5
    },
    iconSelected: {
        position: 'absolute',
        right: 5,
        top: 5
    }
});