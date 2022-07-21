/**
 * Post
 * Function: Creates Post component
 */

import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from "@react-navigation/native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Post = (props) => {

    const post = props.post;

    const isFocused = useIsFocused();
    const navigation = useNavigation();


    return (
        <View style={styles.postContainer}>
            <View style={styles.profileContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.pfp} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}} />
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                        <Text style={styles.headerText}>Full Name</Text>
                        <Text style={[styles.headerText, {color: '#8d8c92', fontWeight: '400'}]}>Location and Time</Text>
                    </View>
                </View>
                <Ionicons name={'ellipsis-horizontal'} size={20} color={'white'}/>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={{uri: post}}
                    style={styles.backImage}
                />
                <Image
                    source={{uri: post}}
                    style={styles.frontImage}
                />
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Template")}>
                        <Ionicons name={'chatbox'} size={30} color={'white'} style={{paddingVertical: 5}}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Template")}>
                        <Ionicons name={'happy'} size={30} color={'white'} style={{paddingVertical: 5}}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <TouchableOpacity style={{paddingTop: 10}} onPress={() => navigation.navigate("Template")}>
                <Text style={styles.headerText}>Caption</Text>
                <Text style={[styles.headerText, {color: '#8d8c92', fontWeight: '400'}]}>Add a comment... </Text>
            </TouchableOpacity>
                
        </View>
      );
}

export default Post;

