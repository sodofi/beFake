/**
 * Profile
 * Function: Loads user profile info and memories
 * TODO: Load user info
 * TODO: Add view all my memories screen***
 */

import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, Alert, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from "@react-navigation/native";
import GridImageView from 'react-native-grid-image-viewer';
import styles from '../Profile/styles';

const picsumImages = new Array(14).fill("http://placeimg.com/640/360/any");

const numColumns = 7;

function renderItem({ item }) {
  return (
    <Image
      source={{ uri: item }}
      style={styles.image}
    />
  );
}

const Profile = () => {
  const [images, setImages] = React.useState(picsumImages);

  const isFocused = useIsFocused();
  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.topContainer} onPress={() => navigation.navigate("EditProfile")}>
          <Image 
            style={styles.profileImage} 
            source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}} />
          <Text style={{fontSize: 28, fontWeight: '600', color: 'white'}}>John Doe</Text>
          <Text style={styles.subTitle}>@johndoe2</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={[styles.titleText, {fontSize: 22, fontWeight: '600'}]}>Your Memories</Text>
          <View style={styles.memoryContainer}>
            <Text style={styles.subTitle}>Last 14 days</Text>
            <FlatList 
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={images} 
              renderItem={renderItem} 
              numColumns={numColumns}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.subTitle}>View all my Memories</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }

  export default Profile;



  