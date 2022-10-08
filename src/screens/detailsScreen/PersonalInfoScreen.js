import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, StatusBar, ScrollView } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 5,
    borderColor: '#444',
    width: 300,
    borderRadius: 20,
  },
  scroll: {
    margin: 15
  },

});

class PersonalInfoScreen extends React.Component {

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');
  }
  handleimage = () => {
    this.props.navigation.navigate('ImageUpload');
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Heading}>This data will be displayed in your account profile for the security reasons.</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <Text>Name:</Text>
          <TextInput style={styles.input} placeholder='Enter The Name' />
          <Text>Phone Number:</Text>
          <TextInput style={styles.input} keyboardType='numeric' placeholder='Enter The Phone Number' />
          <Text>Gender:</Text>
          <TextInput style={styles.input} placeholder='Enter The Gender' />
          <Text>Date Of Birth:</Text>
          <TextInput style={styles.input} placeholder='Enter The Date Of Birth' />
          <Text>AddressLine 1:</Text>
          <TextInput style={styles.input} placeholder='Enter The AddressLine 1' />
          <Text>AddressLine 2:</Text>
          <TextInput style={styles.input} placeholder='Enter The AddressLine 2' />
          <Text>City:</Text>
          <TextInput style={styles.input} placeholder='Enter The City' />
          <Text>State:</Text>
          <TextInput style={styles.input} placeholder='Enter The State' />
          <Text>Pincode:</Text>
          <TextInput style={styles.input} placeholder='Enter The Pincode' />
          <Button style={styles.button} color='rgb(255,0,80)' title='Next' onPress={this.handleimage} />
        </ScrollView>
      </View>

    )
  }
}
export default PersonalInfoScreen;