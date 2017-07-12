import React from 'React';
import {Text,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Timer =(props)=>{



      return(

            <Text style={styles.timerText}>{props.time}</Text>

      )

}
  const styles = StyleSheet.create({
    timerText:{
      color:'black'

    }
  });
  Timer.propTypes = {
    time: PropTypes.number
  };

  export default Timer;
