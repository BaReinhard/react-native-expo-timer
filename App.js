import React from 'React';
import {StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';
let startInterval;
export class App extends React.Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      minutes:0,
      seconds:0,
      milliseconds: 0,
      started:false
    };
    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
  }
  startTime(){
    let newThis = this;
    function starting(){
        if(newThis.state.seconds===59 && newThis.state.milliseconds===9){
          newThis.setState({seconds:0,minutes:newThis.state.minutes+1,milliseconds:0});
        }else if(newThis.state.milliseconds<9){
          newThis.setState({milliseconds:(newThis.state.milliseconds+1),started:true});
        }else{

          newThis.setState({seconds:newThis.state.seconds+1,milliseconds:0,started:true});
        }

    }
    startInterval = setInterval(starting,100);



  }
  stopTime(){
    clearInterval(startInterval);
    this.setState({started:false});

  }
  clearTime(){
    this.setState({
      minutes:0,
      seconds:0,
      milliseconds:0
    });
  }
    render(){
      if(!this.state.started && this.state.milliseconds !== 0){
        return(
          <View style={styles.container}>
            <Text style={styles.timerTitle}>{`${this.state.minutes<=9?'0'+this.state.minutes.toString():this.state.minutes}:${this.state.seconds<=9?'0'+this.state.seconds.toString():this.state.seconds}.${this.state.milliseconds.toString()+'00'}`}</Text>
            <View style{styles.ButtonContainer}>
              <TouchableHighlight
                style={[styles.button,styles.startButton]}
                onPress={this.startTime.bind(this)}
              >
                <Text style={[styles.buttonText,styles.startText]}>Resume</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.button,styles.clearButton]}
                onPress={this.clearTime.bind(this)}
              >
                <Text style={[styles.buttonText,styles.clearText]}>Clear</Text>
              </TouchableHighlight>
            </View>
          </View>
        )
      }else if(!this.state.started){
        return(<View style={styles.container}>
          <Text style={styles.timerTitle}>{`${this.state.minutes<=9?'0'+this.state.minutes.toString():this.state.minutes}:${this.state.seconds<=9?'0'+this.state.seconds.toString():this.state.seconds}.${this.state.milliseconds.toString()+'00'}`}</Text>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={[styles.button,styles.startButton]}
              onPress={this.startTime.bind(this)}
            >
              <Text style={[styles.buttonText,styles.startText]}>Start</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
      }else{
        return(
          <View style={styles.container}>
            <Text style={styles.timerTitle}>{`${this.state.minutes<=9?'0'+this.state.minutes.toString():this.state.minutes}:${this.state.seconds<=9?'0'+this.state.seconds.toString():this.state.seconds}.${this.state.milliseconds.toString()+'00'}`}</Text>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={[styles.button,styles.stopButton]}
                onPress={this.stopTime.bind(this)}
              >
                <Text style={[styles.buttonText,styles.stopText]}>Stop</Text>
              </TouchableHighlight>
            </View>

          </View>
        )
      }

    }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignItems: 'center',
    },
    buttonContainer:{
      flex:1,
      flexDirection: 'row'
    },
    timerTitle:{
      fontSize:30,
      fontWeight:'300'
    },
    button:{
      marginTop:20,
      padding:20,
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#f3f3f3'

    },
    stopButton:{
    },
    startButton:{
    },
    clearButton:{

    },
    buttonText:{
      fontSize:20,
      fontWeight:'200'
    },
    startText:{
      color:'green'
    },
    stopText:{
      color:'red'
    },
    clearText:{
      color:'blue'
    }
  });
  App.propTypes = {
    time: PropTypes.number
  };
export default App;
