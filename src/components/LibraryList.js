import React, { Component } from 'react';
import { FlatList ,StyleSheet,View,TouchableWithoutFeedback,Text,ScrollView} from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import {
    repoSelected
} from "../actions";


class LibraryList extends Component {
componentWillMount() {
 }

newPushContent(item){
      this.props.repoSelected(item)
      Actions.detail()
}

_renderItem(item){
    return (
        <TouchableWithoutFeedback onPress={() => this.newPushContent(item)}>
        <View style={{backgroundColor:"grey",borderBottomColor:"black"}}> 
           <Text style={{color:"black"}}>{item.title}</Text>
            <Text style={{color:"black"}}>{item.description}</Text>
            <View style={{height:1,color:"black"}}/>
            </View>
        </TouchableWithoutFeedback>
    )
}
 
  render() {

     return (
  <View style={styles.container}>
  <ScrollView>
  <FlatList 
  vertical
  style={{marginHorizontal: 5}}
  data={this.props.libraries}
  renderItem={({item})=>this._renderItem(item)}
 />
 </ScrollView>
  </View>
     
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries,
    updatedList :state.updatedList};
};

export default connect(mapStateToProps,
    {
    repoSelected
    })(LibraryList);

const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor: "grey"
    }
   })