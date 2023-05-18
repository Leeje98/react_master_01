import styled from "styled-components"


interface ContainerProps{  // styled components 에 전달
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`

interface CircleProps {  // 컴포넌트에 전달
    bgColor: string;
}

function Circle({bgColor}:CircleProps){
              // bgColor의 타입은 Circle의 object이다
              // CircleProps안에 bgColor가 존재한다
    return <Container bgColor={bgColor} />
}

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) =>
 `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

 sayHello({name: "nico", age: 12})
//  sayHello({name: "hi", age: 12, hello:1})
 sayHello({name: "hi", age: 12})


export default Circle;