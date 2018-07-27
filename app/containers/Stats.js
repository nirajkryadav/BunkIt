import React, { Component } from 'react';
 
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
 
var Device_Width = Dimensions.get('window').width ;
 
export default class Stats extends Component {
 
 
 render() {
 
   return (
 
      <View style={styles.MainContainer}>
        <View style={{flex: 1,alignItems:'center'}}>
          <View style={{flexDirection: 'row',justifyContent:'space-between',paddingTop: 20}}>
            <Text style={{color: '#7BC46E',paddingRight: 40,fontSize: 20}}>TimeTable</Text>
            <Text style={{color: '#7BC46E',paddingRight: 40,fontSize: 20}}>Home</Text>
            <Text style={{color: '#7BC46E',fontSize: 20}}>Calender</Text>
          </View>
          <Text style={{marginTop: 30}}> Day and Date</Text>
          <View style={{flexDirection: 'row',paddingTop: 5}}>
              <View style={styles.cell}/>
              <View style={styles.cell}/>
              <View style={styles.cell}/>
              <View style={styles.cell}/>
              <View style={styles.cell}/>
              <View style={styles.cell}/>
              <View style={styles.cell}/>
          </View>
                    <View style={styles.line}></View>

          <Text style={{color: '#7BC46E',paddingTop: 50,alignItems:'center'}}> Staticstics</Text>
          <View style={styles.line}></View>
        </View>
        <View style={[styles.test,{flex: 2}]}>
          <ScrollView 
              horizontal = { true } 
              showsHorizontalScrollIndicator = {true}
              pagingEnabled = { true } >
 
                <View style = { styles.FirstBlockStyle }>
                
                  <View style= {styles.TotalCard}>
                    <Text style= {styles.Text}>Total Classes You Can Bunk</Text>
                    <Text style={{fontSize: 100,color:'#E6E5E5',textAlign: 'center' }}>167</Text>
                  </View>
                </View>
   
      
                <View style = { styles.SecondBlockStyle }>
                  
                  <View style= {styles.centCard}>
                    <Text style= {styles.Text}>Total Attendance till day</Text>
                    <Text style={{fontSize: 100,color:'#E6E5E5',textAlign: 'center' }}>67%</Text>
                  </View>
 
                </View>
 
      
                <View style = { styles.ThirdBlockStyle }>
                  
                    <View style= {styles.subCard}>
                    <Text style= {{fontSize : 25,color: '#E6E5E5',textAlign : 'center',paddingTop: 30}}>Subjectwise Attendance</Text>
                    <Text style={{fontSize: 100,color:'#E6E5E5',textAlign: 'center' }}>67%</Text>
                  </View>

                </View>
          
          </ScrollView>
        </View>
 
      </View>
 
        
   );
 }
}
 
const styles = StyleSheet.create({
 
  MainContainer :{
 
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
 
  },
 
  FirstBlockStyle:{
 
    justifyContent: 'center',
    flexDirection: 'row',
    width: Device_Width ,
    height: 400
 
  },
 
  SecondBlockStyle:{
    
    justifyContent: 'center',
    flexDirection: 'row',
    width: Device_Width 
    
  },
 
  ThirdBlockStyle:{
    
    justifyContent: 'center',
    flexDirection: 'row',
    width: Device_Width 
    
  },
  TotalCard: {
    width:350, 
    height: 350,
    borderRadius: 10,
    borderColor: '#d6d7da',
    backgroundColor: '#F47D5D',
    borderWidth: 1,
    marginTop: 20
  },
  
  centCard: {
    width:350, 
    height: 350,
    borderRadius: 10,
    borderColor: '#d6d7da',
    backgroundColor: '#68CDF1',
    borderWidth: 1,
    marginTop: 20
  },
  subCard: {
    width:350, 
    height: 350,
    borderRadius: 10,
    borderColor: '#d6d7da',
    backgroundColor: '#7BC46E',
    borderWidth: 1,
    marginTop: 20
  },
  cell: {
    width:40, 
    height: 30, 
    borderRadius: 10,
    borderColor: '#d6d7da',
    marginBottom: 5,
    borderWidth: 1,
    marginRight: 10
  },
  Text:{
    fontSize: 30,
    fontWeight:"normal",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    color: '#E6E5E5'
  },
  TextStyle:{
 
    fontSize : 25,
    color: '#fff',
    textAlign : 'center',
    fontWeight: 'bold'
  },
  line:{
    height: 1.5,
    width: '100%',
    backgroundColor: '#00ff00',
    marginTop: 20
  },
 
});