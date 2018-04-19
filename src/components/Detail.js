import React, {Component} from 'react'

import {
 View,
 Text,
 StyleSheet,
 TouchableHighlight,
 TextInput,
 Dimensions,
 FlatList,
 ScrollView,
 Image,
 Alert,
 ImageBackground,
 TouchableOpacity,
 Modal
} from 'react-native'
import { connect } from 'react-redux';

const {width, height} = Dimensions.get('window')

import {
    updateListItem
} from "../actions";

import { Actions } from 'react-native-router-flux';


class Detail extends Component {
 constructor(props){
 super(props)
 this.state = {
    editVisible:false,
    id:this.props.selectedLibrary.id,
    title:this.props.selectedLibrary.title,
    description:this.props.selectedLibrary.description,
    editVisible:false
   }
 }

 setEditVisible(){
    this.setState({editVisible:true})
 }


updateList(){
     var data={
        id:this.state.id,
        title:this.state.title,
        description:this.state.description
 }
 this.props.updateListItem(data)
 Actions.pop()
 }

 showDetail(){
    if(this.state.editVisible==false){
        return(
          <ScrollView>
            <View style={{backgroundColor:"grey",justifyContent:"center",alignItems:"center"}}>
            
            <Text style={{fontSize:20,fontWeight:"bold",padding:20}}>{this.props.selectedLibrary.title}</Text>
            <Text style={{fontSize:12,fontWeight:"bold",padding:8}}>{this.props.selectedLibrary.description} </Text>

            <TouchableOpacity
             onPress = {
                  () => this.setEditVisible()
               }>
               <Text style={{fontSize:15,fontWeight:"bold",padding:20,backgroundColor:"#9a73ef"}}> Edit </Text>
            </TouchableOpacity>
            </View> 
            </ScrollView>
        )
    }
  
    else if(this.state.editVisible==true){
        return(
          <ScrollView>
            <View style = {styles.container}>
    
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               value={this.state.title}
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(value)=>{this.setState({title:value})}}/>
            
            <TextInput style = {styles.input}
            
               underlineColorAndroid = "transparent"
               value={this.state.description}
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(value)=>this.setState({description:value})}/>
               
              <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () =>this.updateList()
               }>
            <Text style = {styles.submitButtonText}> Update </Text>
            </TouchableOpacity>
           </View>
         </ScrollView>

        )
    }
}


 
 render(){
 return (
 <View style={{flex:1}}>
 {this.showDetail()}
 </View>
 )
 }
}

const styles = StyleSheet.create({
 container: {
 flex:1,
 backgroundColor: "grey",
 justifyContent: 'center',
 alignItems:"center"
 },
 input: {
     padding:10,
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width:width/1.3
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white',
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
 }
})

const mapStateToProps = state => {
    return { selectedLibrary: state.selectedLibrary };
  };

  export default connect(mapStateToProps,{updateListItem} )(Detail);

// export default connect(mapStateToProps,matchDispatchToProps)(Detail);


