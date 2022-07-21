/**
 * Home
 * Function: Loads posts in chronilogical order of people you follow and opens RN camera
 * TODO: Load posts from AWS
 * TODO: Add camera to create new post
 * TODO: Style camera button
 */
import React from 'react';
import {View, Text, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from "@react-navigation/native";

import Ionicons from 'react-native-vector-icons/Ionicons';

import Post from '../../components/Post';

import styles from '../Home/styles';

const picsumImages = new Array(3).fill("http://placeimg.com/640/360/any");

function renderItem({ item }) {
    return (
        <View style={styles.postContainer}>
            <Post post={item}/>
        </View>
      
    );
  }

const Home = () => {
    const [images, setImages] = React.useState(picsumImages);

    const isFocused = useIsFocused();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList 
              data={images} 
              renderItem={renderItem}
            />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Template")}>
            <Ionicons name={'add-circle'} size={50} color={'black'}/>
        </TouchableOpacity>
        </View>
      );
}

export default Home;

