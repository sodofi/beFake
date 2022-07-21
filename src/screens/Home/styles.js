import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    button: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        hight: 50,
        width: 50,
    },


    //POST
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
    nameText: {
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
    image: {
        height: 500,
        //aspectRatio: 1,
        borderRadius: 20,
        
        //flex: 1
    }

})

export default styles;