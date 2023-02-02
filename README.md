# react-native-customizable-array-dropdown

This library will take array as input and create a dropdown based on it.
More details and properties below:

Properties:

|Property|Type|Default|Description|
|-------|-------|-------|-------|
|setSelectedValue (Required)  | Function | null  | Returns the selected value  |
|data (Required)  | array | ['Demo1','Demo2','Demo3','Laptop','Aeroplane','Mode']  | Array of values you want in your dropdown.  |
| initialTitle                  | String         | --Select--                  | Placeholder                                                |
| mainView                      | ViewStyle      | defaultStyle                | To change the view of main container                       |
| titleStyle                    | ViewStyle      | defaultStyle                | To change the style of title(Option Selected)              |
| dropdownContainer             | ViewStyle      | defaultStyle                | To change the style of dropdown container                  |
| dropdownItemContainer         | ViewStyle      | defaultStyle                | To change the style of individual dropdown item container  |
| dropdownItemText              | ViewStyle      | defaultStyle                | To change the style of dropdown text (i.e. Options)        |
| dropdownSelectedItemContainer | ViewStyle      | defaultStyle                | To change the style of option container which is selected. |
| dropdownSelectedItemText      | ViewStyle      | defaultStyle                | To change the style of text which is currently selected    |
| imagePath                     | imported image/Image Path | 'down-arrow.png'            | To change the icon of the dropdown                         |
| imageStyle                    | ViewStyle      | defaultStyle                | To change the style of image                               |
| touchOpacity                  | integer        | 0.7                         | To change touch opacity of component                       |
| searchIcon                  | imported image/Image Path        | 'search.png'                        | To change the icon of the search Icon                       |
| searchImageStyle                  | Image Style        | defaultStyle                      | To change the style of search Icon                       |
| searchContainer                  | TextInput Style        |defaultStyle                       | To change the style of search container                       |
| showSearch                  | Boolean        | true                        | Show/Hide search bar                       |
| searchPlaceholder                  | String        | Search                       | Search Placeholder                       |



1. setSelectedValue (\*Required)

code:

```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        // Property Code //
        setSelectedValue={setSelectedValue} />
        );

}
export default App;
```

2. data (\*Required)

code:

```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}

        // Property Code //
        data={['Aadarsh', 'Vraj', 'Helly', 'Krupa', 'Niyanta', 'Nidhi', 'Heta']}

        );

}
export default App;
```

3. initialTitle (Optional)

code:

```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}

        // Property Code //
        initialTitle="Select Option"
      />
        );

}
export default App;
```

![Output For initialTitle](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/title.png)

4. mainView (Optional)

code:

```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"

        // Property Code //
        mainView={{backgroundColor: 'skyblue', width: 300}}

      />
        );

}
export default App;
```

![Output For mainView](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/mainView.png)

5. titleStyle (Optional)

code:

```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"
        mainView={{backgroundColor: 'skyblue', width: 300}}

        // Property Code //
        titleStyle={{fontSize: 20, color: 'yellow'}}


      />
        );

}
export default App;
```

![Output For titleStyle](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/titleStyle.png)

6. dropdownContainer (Optional)

code:

```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"
        mainView={{backgroundColor: 'skyblue', width: 300}}
        titleStyle={{fontSize: 20, color: 'yellow'}}

        // Property Code //
        dropdownContainer={{
          backgroundColor: 'orange',
          alignSelf: 'center',
          width: 200,
        }}

      />
        );

}
export default App;
```

![Output For dropdownContainer](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/dropdownContainer.png)

7. dropdownItemContainer (Optional)

code:

```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
        initialTitle="Select Option"
        mainView={{backgroundColor: 'skyblue', width: 300}}
        titleStyle={{fontSize: 20, color: 'yellow'}}
        dropdownContainer={{
          backgroundColor: 'orange',
          alignSelf: 'center',
          width: 200,
        }}

        // Property Code //
        dropdownItemContainer={{
          backgroundColor: 'magenta',
          borderRadius: 30,
        }}
      />
        );

}
export default App;
```

![Output For dropdownItemContainer](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/dropdownItemContainer.png)

8. dropdownItemText (Optional)

code:

```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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

        // Property Code //
        dropdownItemText={{color: 'white', fontSize: 20}}

      />
        );

}
export default App;
```

![Output For dropdownItemText](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/dropdownItemText.png)

9. dropdownSelectedItemContainer (Optional)

code:

```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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

        // Property Code //
        dropdownSelectedItemContainer={styles.fromStylesheet}

      />
        );

}
export default App;


const styles = StyleSheet.create({
  fromStylesheet: {backgroundColor: 'purple', justifyContent: 'center'},
});
```

![Output For dropdownSelectedItemContainer](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/dropdownSelectedItemContainer.png)

10. dropdownSelectedItemText (Optional)

code:

```
function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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

        // Property Code //
        dropdownSelectedItemText={{color: 'white', fontSize: 20}}

      />
        );

}
export default App;
```

![Output For dropdownSelectedItemText](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/dropdownSelectedItemText.png)

11. imagePath (Optional)

code:

```

import Icon from './caret-down.png';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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

        // Property Code //
        imagePath={Icon}

      />
        );

}
export default App;
```

![Output For imagePath](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/ImagePath.png)

12. imageStyle (Optional)

code:

```

import Icon from './caret-down.png';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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

        // Property Code //
        imageStyle={{backgroundColor: 'pink', borderRadius: 20}}


      />
        );

}
export default App;
```

![Output For imageStyle](https://github.com/DipeshMajithia/react-native-array-dropdown/blob/main/screenshot/imageStyle.png)

13. touchOpacity (Optional)

code:

```

import Icon from './caret-down.png';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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

        // Property code //
        touchOpacity={0.8}


      />
        );

}
export default App;
```

14. searchIcon (Optional)

code:

```

import Icon from './caret-down.png';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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
        // Property code //
        
        searchIcon={require('./search2.png')}



      />
        );

}
export default App;
```


15. searchImageStyle (Optional)

code:

```

import Icon from './caret-down.png';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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

        // Property code //
        
        searchImageStyle={{backgroundColor: 'red', right: 110}}



      />
        );

}
export default App;
```

16. searchContainer (Optional)

code:

```

import Icon from './caret-down.png';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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
    
        // Property code //
        searchContainer={{backgroundColor: 'gold'}}

    


      />
        );

}
export default App;
```

17. showSearch (Optional)

code:

```

import Icon from './caret-down.png';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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

        // Property code //
        showSearch={false}

    


      />
        );

}
export default App;
```

17. searchPlaceholder (Optional)

code:

```

import Icon from './caret-down.png';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  return (
      <Dropdown
        setSelectedValue={setSelectedValue}
        data={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']}
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
        // Property code //
        
        searchPlaceholder="Search Here..."

    


      />
        );

}
export default App;
```
