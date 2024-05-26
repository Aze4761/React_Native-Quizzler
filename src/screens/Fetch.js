import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider} from 'react-native-paper';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Fetch = ({ navigation,route }) => {
    const [questions, setQuestions] = useState();
    const [ques, setQuest] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [wrong,setWrong] = useState(0);
    const [color1, setColor1] = useState("#00B4D8");
    const [color2, setColor2] = useState("#00B4D8");
    const [color3, setColor3] = useState("#00B4D8");
    const [color4, setColor4] = useState("#00B4D8");
    const [isLoadiing,setIsLoading] = useState(false);
    const getQuiz = async () => {
        setIsLoading(true)
        const url = 'https://opentdb.com/api.php?amount=10&category='+route.params.paramkey+'&difficulty='+route.params.paramKey+'&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json()
        console.log(data.results[0])
        setQuestions(data.results)
        setOptions(generateOptionsAndShuffle(data.results[0]))
        setIsLoading(false)
    };

    useEffect(() => {
        getQuiz();

    }, []);

    const handleNext = () => {
        if(ques !== 9 ){
        setTimeout(() => {
        setColor1("#00B4D8")
        setColor2('#00B4D8')
        setColor3("#00B4D8")
        setColor4("#00B4D8")    
        setQuest(ques + 1)
        setOptions(generateOptionsAndShuffle(questions[ques + 1]))
    }, 500);
        }
    }

    const generateOptionsAndShuffle = (_question) => {
        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)
        return options
    }
    const handleSelectoption = (_option) => {
        if (_option === questions[ques].correct_answer) {
            setColor1("#56E39F")
            setScore(score + 1)
            console.log(score)
        }
        else {
            setColor1('#DD1C1A')
            setWrong(wrong +1)
            console.log(score)
        }
    }
    const handleSelectoption2 = (_option) => {
        if (_option === questions[ques].correct_answer) {
            setColor2("#56E39F")
            setScore(score + 1)
            console.log(score)
        }
        else {
            setColor2('#DD1C1A')
            setWrong(wrong +1)
            console.log(score)
        }
    }
    const handleSelectoption3 = (_option) => {
        if (_option === questions[ques].correct_answer) {
            setColor3("#56E39F")
            setScore(score + 1)
            console.log(score)
        }
        else {
            setColor3('#DD1C1A')
            setWrong(wrong +1)
            console.log(score)
        }
    }
    const handleSelectoption4 = (_option) => {
        if (_option === questions[ques].correct_answer) {
            setColor4("#56E39F")
            setScore(score + 1)
            console.log(score)
        }
        else {
            setColor4('#DD1C1A')
            setWrong(wrong +1)
            console.log(score)
        }
    }

    const handleShowResult = () => {
        navigation.navigate('Result', { paramKey: score,paramky: wrong })
    }

    const handlePrev = () => {
        setColor1("#00B4D8")
        setColor2('#00B4D8')
        setColor3("#00B4D8")
        setColor4("#00B4D8")  
        setQuest(ques - 1)
        setOptions(generateOptionsAndShuffle(questions[ques - 1]))
    }
    
    return (

        <View style={styles.container}>
            {isLoadiing ? <View style={{marginTop:400}}><ActivityIndicator color="#00B4D8"  size="large"/></View>:questions && (
                <View style={styles.parent}>
                    <View style={styles.top}>
                        <View style={styles.question}>
                            <Text style={{ fontSize: 20 }} >Q. {decodeURIComponent(questions[ques].question)}</Text>
                        </View>
                        <Divider />
                        <View style={styles.optioncont}>
                            <TouchableOpacity style={{
                                padding: 12,
                                marginVertical: 3,
                                backgroundColor: color1,
                                borderRadius: 12
                            }} onPress={() => { handleSelectoption(options[0]); handleNext() }}>
                                <Text style={styles.option}>{decodeURIComponent(options[0])} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                padding: 12,
                                marginVertical: 3,
                                backgroundColor: color2,
                                borderRadius: 12
                            }} onPress={() => { handleSelectoption2(options[1]); handleNext() }}>
                                <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                padding: 12,
                                marginVertical: 3,
                                backgroundColor: color3,
                                borderRadius: 12
                            }} onPress={() => { handleSelectoption3(options[2]); handleNext() }}>
                                <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                padding: 12,
                                marginVertical: 3,
                                backgroundColor: color4,
                                borderRadius: 12
                            }} onPress={() => { handleSelectoption4(options[3]); handleNext() }}>
                                <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.bottombar}>
                            {/* <TouchableOpacity style={styles.bottombarbtn} onPress={() => handlePrev()}>
                                <Text>Prev</Text>
                            </TouchableOpacity>*/}
                            {ques !== 9 && <TouchableOpacity style={styles.bottombarbtn} onPress={() => handleNext()}>
                                <Text>SKIP</Text>
                            </TouchableOpacity>}
                            {ques === 9 && <TouchableOpacity style={styles.bottombarbtn} onPress={() => handleShowResult()}>
                                <Text>Show Result</Text>
                            </TouchableOpacity>}
                        </View>
                    </View>
                </View>
            )}
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',
        paddingHorizontal: 20
    },
    top: { marginVertical: 16 },
    question: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottombar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        top: 120,
    },
    button: {
        width: '20%',
        padding: 16,
        backgroundColor: '#00B4D8',
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: '30'
    },
    option: {
        fontSize: 18,
        color: 'white'
    },
    optionbtn: {
        padding: 12,
        marginVertical: 3,
        backgroundColor: "#00B4D8",
        borderRadius: 12
    },
    bottombarbtn: {
        backgroundColor: "#00B4D8",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 15
    },
    optioncont:{
        top:10
    }

});

export default Fetch