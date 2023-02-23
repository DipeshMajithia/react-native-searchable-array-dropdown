import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchDropdown from 'react-native-search-array-dropdown';
import Icon from './Arrow.jpg';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        <View style={styles.section1}>
          <Text style={styles.text}>Dropdown in this section</Text>
          <View style={styles.dropdownContainer}>
            <SearchDropdown
              setSelectedValue={setSelectedValue}
              data={['Apple', 'Dog', 'Cat', 'Ball', 'Fish', 'Hat']}
              initialTitle="Select Option"
              mainView={{backgroundColor: '#252D6E', width: '100%'}}
              titleStyle={{fontSize: 20, color: 'white'}}
              dropdownContainer={{
                backgroundColor: 'orange',
                alignSelf: 'center',
                width: '100%',
              }}
              dropdownItemContainer={{
                backgroundColor: '#D9D9D9',
                borderRadius: 10,
              }}
              dropdownItemText={{color: '#252D6E', fontSize: 20}}
              dropdownSelectedItemContainer={styles.fromStylesheet}
              dropdownSelectedItemText={{color: 'white', fontSize: 25}}
              imagePath={Icon}
              imageStyle={{backgroundColor: 'transparent', borderRadius: 20}}
              // touchOpacity={1}
              searchIcon={require('./Search2.jpg')}
              searchImageStyle={{
                backgroundColor: 'transparent',
                borderRadius: 20,
              }}
              searchContainer={{backgroundColor: '#D9D9D9', width: '100%'}}
              // // showSearch={false}
              searchPlaceholder="Search Here..."
            />
          </View>
          <Text style={styles.text}>
            Selected Value of dropdown is: {selectedValue}
          </Text>
        </View>
        <View style={styles.section2}>
          <Text style={styles.text}>Section 2</Text>
        </View>
        <View style={styles.section3}>
          <Text style={styles.text}>Section 3</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#D9D9D9',
  },
  section1: {
    backgroundColor: 'red',
    height: 'auto',
    minHeight: '28%',
    width: '100%',
  },
  section2: {
    backgroundColor: 'green',
    height: 'auto',
    minHeight: '28%',
    width: '100%',
  },
  section3: {
    backgroundColor: 'blue',
    height: 'auto',
    minHeight: '28%',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  dropdownContainer: {
    margin: 20,
  },
  fromStylesheet: {backgroundColor: 'skyblue', alignItems: 'flex-start'},
});
