import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import CameraScreen from './components/Camera/CameraScreen';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import { AppLoading } from 'expo';

export default class App extends React.Component {

  state = {
    presses: 0
  }

  firstButtonOnClick = () => {
    this.setState({
      presses: this.state.presses + 1
    });
  }

  secondButtonOnClick = () => {
    this.setState({
      presses: this.state.presses + 1
    });
  }

  render() {
    return (
      true ? <CameraScreen/> :
      <View>
        <Text>Yo</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
