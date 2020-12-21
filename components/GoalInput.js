
import React ,{  useState} from 'react'
import { StyleSheet, TextInput,Modal, View ,Button   } from 'react-native'

export default function GoalInput(props){
    const [goal,setGoal]=useState("")

    const setGoalHandler=(data)=>{
      if(data.trim().length !== 0){
        setGoal(data)
     
      }
       }
    return (
        <Modal animationType="slide" visible={props.visible}>
            <View style={styles.form}>
                <View style={styles.input}>
                        <TextInput 
                            style={{paddingHorizontal:10}} 
                            value={props.goal} placeholder="enter your goal"
                            onChangeText={setGoalHandler}
                            />
                </View>
                <View style={styles.btn}><Button  onPress={()=>props.addGoalsHandler(goal)} title="ADD"  /></View>
            </View>

        </Modal>
    )
}
const styles=StyleSheet.create({
    
    form:{
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      flexWrap:"wrap",
      alignContent:"center"
      
      
      
    },
    input:{
      flexBasis:"70%",
      borderWidth:1,
      borderRadius:10,
      borderColor:"black",
      marginVertical:50,
      height:90
      
    }
    ,
    btn:{
      flexBasis:"50%",
      borderWidth:1,
      borderRadius:10,
      borderColor:"blue",
      overflow:"hidden",
      marginVertical:20,
      
  
    }

})