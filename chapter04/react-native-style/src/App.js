import React from 'react';
import { View } from 'react-native';
import { viewStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';
import ShadowBox from './components/ShadowBox';
import styled from 'styled-components/native';
import Button from './components/Button';
import Props from './components/Age';
import Ages from './components/Age';
import Names from './components/Name';

const prop = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const App = () => {
  return (
    <View
      style={{
        flex: 1
      }}>
      <Ages age={20} />
      <Names name="haileyhailey" />
    </View>
    
  );
};

export default App;

// const Container = styled.View`
//     flex: 1;
//     background-color: #ffffff;
//     align-items: center;
//     justify-content: center;
// `;

// const App = () => {
//     return (
//         <Container>
//             <Button title="Hanbit" />
//             <Button title="React Native" />
//         </Container>
//     );
// };

// export default App;


// 4.2.3. 그림자
// const App = () => {
//     return (
//         <View style={viewStyles.container}>
//             <ShadowBox />
//         </View>
//     );
// };

// export default App;



// 4.2.1. flex와 범위
// const App = () => {
//   return (
//     <View style={viewStyles.container}>
//       <Header />
//       <Contents />
//       <Footer />
//     </View>
//   );
// };

// export default App;

/*
// 4.1.4. 외부 스타일 이용하기, 여러 개의 스타일 적용
import React from 'react';
import { View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <Text style={[textStyles.text, { color: 'green' }]}>
        Inline Styling - Text
      </Text>
      <Text style={[textStyles.text, textStyles.error]}>
        Inline Styling - Error
      </Text>
    </View>
  );
};

export default App;
*/

/*
// 4.1.1. 인라인 스타일링
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: '600',
          color: 'black',
        }}
      >
        Inline Styling - Text
      </Text>
      <Text
        style={{
          padding: 10,
          fontSize: 26,
          fontWeight: '400',
          color: 'red',
        }}
      >
        Inline Styling - Error
      </Text>
    </View>
  );
};

export default App;
*/