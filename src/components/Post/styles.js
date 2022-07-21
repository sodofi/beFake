import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window').width;

const styles = StyleSheet.create({
    postContainer:{
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white'
    },
    pfp: {
        height: 30,
        width: 30,
        marginBottom: 10,
        borderRadius: 100
    },
    imageContainer: {
        flex: 1,
        height: 500,
    },
    backImage: {
        height: 500,
        borderRadius: 20,
    },
    frontImage: {
        height: 140,
        width: 100,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',
        position: 'absolute',
        top: 15,
        left: 15
    },
    iconContainer: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        flexDirection: 'column',
    }


})

export default styles;