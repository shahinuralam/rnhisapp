import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import SearchBar from 'react-native-search-bar';

export default class chatScreen extends Component {
  state = {
    collapsed1: true,
    collapsed2: true,
    search: '',
  };
  toggleExpanded1 = () => {
    this.setState({collapsed1: !this.state.collapsed1});
  };
  toggleExpanded2 = () => {
    this.setState({collapsed2: !this.state.collapsed2});
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={search => {
            this.setState({search: search});
          }}
          onSearchButtonPress={search => {
            this.setState({search: search});
          }}
          onCancelButtonPress={search => {
            this.setState({search: search});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 2,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'grey',
    padding: 1,
    flex: 0.3,
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 2,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 1,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 1,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
