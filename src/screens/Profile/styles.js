import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    topContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    bottomContainer: {
        margin: 15,
    },
    memoryContainer: {
        backgroundColor: '#1c1c1e',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        //flex: 1,
        height: 240,
    },
    button: {
        alignSelf: 'center',
        margin: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#8d8c92',
        borderRadius: 10
    },
    profileImage:{
        borderRadius: 100, width: 120, height: 120, margin: 10
    },
    image:{
        flex: 1/7,
        margin: 3,
        height: 70,
        borderRadius: 5,
    },
    titleText: {
        color: 'white'
    },
    subTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    },

    //EDIT PROFILE
    line: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#1c1c1e'
    },
    editsContainer: {
        padding: 10, 
        alignItems: 'center',
        flexDirection: 'row', 
    },
    textInput: {
        position: 'absolute',
        left: 100
    }
})

export default styles;