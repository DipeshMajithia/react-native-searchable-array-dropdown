import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Dropdown from 'react-native-search-array-dropdown';
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Aadarsh', 'Vraj', 'Helly', 'Krupa', 'Niyanta', 'Nidhi', 'Heta']}
        initialTitle="Select Option"
        mainView={{backgroundColor: 'skyblue', width: 300}}
        titleStyle={{fontSize: 20, color: 'yellow'}}
        dropdownContainer={{
          backgroundColor: 'orange',
          alignSelf: 'center',
          width: 200,
        }}
        dropdownItemContainer={{
          backgroundColor: 'magenta',
          borderRadius: 30,
        }}
        dropdownItemText={{color: 'white', fontSize: 20}}
        dropdownSelectedItemContainer={styles.fromStylesheet}
        dropdownSelectedItemText={{color: 'white', fontSize: 20}}
        imagePath={Icon}
        imageStyle={{backgroundColor: 'pink', borderRadius: 20}}
        touchOpacity={0.8}
        searchIcon={require('./search2.png')}
        searchImageStyle={{backgroundColor: 'red', right: 110}}
        searchContainer={{backgroundColor: 'gold'}}
        showSearch={true}
        searchPlaceholder="Search Here..."
      />

      <Text style={{color: 'black', fontSize: 20, marginTop: 20}}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fromStylesheet: {backgroundColor: 'purple', justifyContent: 'center'},
});

export default App;
