import React ,{useEffect, useState} from 'react'
import { StyleSheet, TextInput,Text, View ,Button ,ScrollView,FlatList} from 'react-native'
import GoalInput from "./components/GoalInput"
import GoalItem from "./components/GoalItem"

export default function App(){
 
const [goals,setGoals]=useState([])
const [modal,setModal]=useState(false)

const addGoalsHandler=(goal)=>{
  setGoals((goals)=>[...goals, {id:Math.random().toString(),value:goal}])
  setModal(false)
   
}
const deleteItem=(id)=>{
    const updatedGoauls=  goals.filter(goal=>goal.id !==id)
    setGoals(updatedGoauls)
}
return (
  <View style={styles.screen}>
    <View style={styles.mainbtn} ><Button    title="ADD GOALS"   onPress={()=>setModal(true)}/></View>
    <GoalInput  visible={modal} addGoalsHandler={addGoalsHandler}  />
    <Text> add a goal and you can delete it by long press</Text>
    <FlatList 
      keyExtractor={(item,index)=>item.id}
      data={goals}
      renderItem={(itemData)=>(
           <GoalItem deleteItem={deleteItem.bind(this,itemData.item.id)}   value={itemData.item.value} />
             )}
      
    />
  </View>
  )
}
const styles=StyleSheet.create({
  screen:{
     marginHorizontal:"5%",
     marginVertical:"10%"
  }, 
  
  mainbtn:{
   
    borderColor:"blue",
    borderWidth:2,
    borderRadius:5,
    marginBottom:10
  } 
})