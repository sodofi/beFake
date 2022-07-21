/**
 * Edit Profile
 * Function: Load in user info and save new user info after edited
 * TODO: Load in user info from AWS
 * TODO: Pass user info when Save is hit
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Image, Dimensions, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from "expo-image-picker";
import styles from './styles'

const { width } = Dimensions.get('window');

const EditProfile = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const [imageUri, setImageUri] = useState('');

    let openImagePickerAsync = async () => {
        
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync(); 
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required. Please go to settings and change permission.');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync({allowsEditing: true})
        if (pickerResult.cancelled === true) {
            return;
        }
        const newPic = pickerResult.uri;
        setImageUri(newPic)
        console.log(newPic)
    };

  return(
      <SafeAreaView style={styles.container}>
        {/* Photo */}
        <TouchableOpacity style={styles.topContainer} onPress={openImagePickerAsync}>
            <Image 
                style={styles.profileImage} 
                source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}} />
            <Text style={{paddingTop: 10, paddingBottom: 25, color: 'white'}}>Change photo</Text>
        </TouchableOpacity>

        <View style={styles.line}/>

        {/* Name */}
        <View style={styles.editsContainer}>
            <Text style={styles.subTitle}>Full Name</Text>
            <TextInput
                value={name}
                onChangeText={name => {setName(name); console.log(name)}}
                numberOfLines={5}
                placeholder={'Full Name'}
                style={[styles.textInput, {color: '#E4E4E6'}]}
                placeholderTextColor='#8d8c92'
            />
        </View>

        <View style={styles.line}/>

        {/* Username */}
        <View style={styles.editsContainer}>
            <Text style={styles.subTitle}>Username</Text>
            <TextInput
                value={username}
                onChangeText={username => {setUsername(username); console.log(username)}}
                numberOfLines={5}
                placeholder={'Username'}
                style={[styles.textInput, {color: '#E4E4E6'}]}
                placeholderTextColor='#8d8c92'
            />
        </View>

        <View style={styles.line}/>

        {/* Bio */}
       
        <View style={styles.editsContainer}>
            <Text style={styles.subTitle}>Bio</Text>
            <TextInput
                value={bio}
                onChangeText={bio => {setBio(bio); console.log(bio)}}
                numberOfLines={5}
                placeholder={'Bio'}
                style={[styles.textInput, {color: '#E4E4E6'}]}
                placeholderTextColor='#8d8c92'
            />
        </View>

        <View style={styles.line}/>

        {/* Location */}
        <View style={styles.editsContainer}>
            <Text style={styles.subTitle}>Location</Text>
            <TextInput
                value={location}
                onChangeText={location => {setLocation(location); console.log(location)}}
                numberOfLines={5}
                placeholder={'Location'}
                style={[styles.textInput, {color: '#E4E4E6'}]}
                placeholderTextColor='#8d8c92'
            />
        </View>

        <View style={styles.line}/>



      </SafeAreaView>
  )
}

export default EditProfile;

  