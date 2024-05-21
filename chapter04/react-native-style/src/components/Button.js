import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// 4.3.1 스타일드 컴포넌트(styled + 백틱)
const ButtonContainer = styled.TouchableOpacity`
    background-color: ${props =>
        props.title === 'Hanbit' ? '#3498db' : '#9b59b6'};
    border-radius: 15px;
    padding: 15px 40px;
    margin: 10px 0px;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`;

const Button = props => {
    return (
        <ButtonContainer title={props.title}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};

export default Button;

// // react-native의 StyleSheet 방식
// const styles = StyleSheet.create(
//     {
//         container: {
//             backgroundColor: '#9b59b6',
//             borderRadius: 15,
//             paddingVertical: 15, // paddingTop + paddingBottom
//             paddingHorizontal: 40, // paddingLeft + paddingRight
//             marginVertical: 10,
//             justifyContent: 'center'
//         },
//         title: {
//             fontSize: 20,
//             fontWeight: 600,
//             color: '#fff'
//         }
//     }
// );

// const Button = props => {
//     return (
//         <TouchableOpacity style={[styles.container, {backgroundColor: props.title === 'Hanbit' ? '#3498db' : '#9b59b6'}]}>
//             <Text style={styles.title}>{props.title}</Text>
//         </TouchableOpacity>
//     );
// };

// export default Button;
