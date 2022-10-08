import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, Modal, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  Title: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold'
  },
  BillAmount: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'rgb(255,0,68)',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    margin: 10,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 20
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  counter: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    padding: 10,
  },
  counterText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18
  },
  counterTextOperator: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    marginVertical: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "rgb(255,0,68)",
  },
  buttonClose: {
    backgroundColor: "rgb(255,0,68)",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  payimg: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
    marginVertical: 30
  }

});

class ProductItemScreen extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');
  }

  handleItemList = () => {
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
          <View>
            <Image source={require('../../assets/Images/Fruits.jpg')}
              resizeMode="contain" style={styles.img} />
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Text style={styles.productName}>StrawBerry</Text>
            <Text>Rs 200/Kg</Text>
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => { alert('Sub') }}>
                <Text style={styles.counterTextOperator}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.counter}>
                <Text style={styles.counterText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { alert('Add') }}>
                <Text style={styles.counterTextOperator}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </ScrollView>
    );
  };

  handleBillAmount = () => {
    return (
      <View>
        <Text style={styles.BillAmount}>Total Items Added : </Text>
        <Text style={styles.BillAmount}>Total Amount To Be Paid : </Text>
      </View>
    );
  };

  handleModalButton = () => {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Please Select The Payment Mode :</Text>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/icons/google-pay.png')}
                  resizeMode="contain"
                  style={styles.payimg}
                />
                <Image source={require('../../assets/icons/paytm.png')}
                  resizeMode="contain"
                  style={styles.payimg}
                />
                <Image source={require('../../assets/icons/visa.png')}
                  resizeMode="contain"
                  style={styles.payimg}
                />
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Pay Now</Text>
        </Pressable>
      </View>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.Title}> FRUITS</Text>
        {this.handleItemList()}
        {this.handleBillAmount()}
        {this.handleModalButton()}
      </View>
    )
  }
}
export default ProductItemScreen;