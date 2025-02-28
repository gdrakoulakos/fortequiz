const { createContext, useContext, useState } = require("react");
import notationAndStructure from "../data/quizQuestions/theory/notationAndStructure";
import chordsAndHarmony from "../data/quizQuestions/theory/chordsAndHarmony";


const allQuizData = {
    notationAndStructure: notationAndStructure,
    chordsAndHarmony: chordsAndHarmony
}

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [category, setCategory] = useState("");

    const quizData = allQuizData[category];


  return <AppContext.Provider value={{category, setCategory, quizData}}>{children}</AppContext.Provider>;
};

export const QuizContext = () => useContext(AppContext);








// const { setCategory } = QuizzContext();

// onClick = () => setCategory('mousikh')







// const { questions } = QuizzContext();

// console.log(questions);
