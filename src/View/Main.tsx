import React, { FC } from 'react'
import { ButtonProps, Dimensions, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { SoundType } from '../../types';
import { AppController } from '../Controller/AppController';

interface Props extends ButtonProps {
    title: SoundType
    bg: "red" | "yellow" | "orange" | "green" | "blue" | "dodgerblue" | "purple";
}

const { width, height } = Dimensions.get('screen');

const appController = new AppController();


const Button: FC<Props> = (props) => (
    <TouchableOpacity onPressOut={() => appController.resetSound(props.title)} onPressIn={() => appController.playSound(props.title)} style={{ width: width / 1.05, alignItems: 'center', borderRadius: 10, justifyContent: 'center', alignSelf: 'center', aspectRatio: 16 / 4.5, backgroundColor: props.bg }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", }}>{props.title}</Text>
    </TouchableOpacity>
)

const Main = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#222" }}>
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                <Button title='A' bg="purple" />
                <Button title='B' bg="blue" />
                <Button title='C' bg="dodgerblue" />
                <Button title='D' bg="green" />
                <Button title='E' bg="yellow" />
                <Button title='F' bg="orange" />
                <Button title='G' bg="red" />
            </View>
        </SafeAreaView>
    )
}

export default Main;