
import React ,{useEffect, useState} from 'react'
import { StyleSheet, Text, View ,TouchableNativeFeedback,TouchableHighlight} from 'react-native'

export default function GoalInput(props){
    return (
        <TouchableNativeFeedback  onLongPress={props.deleteItem}>
            <View   style={styles.item}>
               <Text style={styles.itemText} >{props.value }</Text>
            </View>
        </TouchableNativeFeedback >
            

    )
}
const styles=StyleSheet.create({
    
    item:{
        backgroundColor:"#696969",
         marginBottom:"3%",
         width:"100%",
         height:40,
         padding:5,
         borderRadius:5,
         borderWidth:2,
         borderColor:"#696969",
       
         
          
      },
      itemText:{
        color:"white"
      }

})