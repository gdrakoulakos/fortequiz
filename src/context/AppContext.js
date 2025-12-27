const { createContext, useContext, useState, useEffect } = require("react");
import allQuizzes from "../data/quizzesData.json";
import { useCookies } from "react-cookie";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [displayedQuestionIndex, setDisplayedQuestionIndex] = useState(0);
  const allQuizCategories = [
    ...new Set(allQuizzes.map((item) => item.category)),
  ];
  const [cookies, setCookie] = useCookies(["quizId"]);

  useEffect(() => {
    if (!selectedQuizId) {
      const cookieQuizId = cookies.quizId;
      if (cookieQuizId) {
        setSelectedQuizId(cookieQuizId);
      }
      return;
    }
    if (selectedQuizId) {
      const foundQuiz = allQuizzes.find((q) => q.id === selectedQuizId);

      setSelectedQuiz(foundQuiz);
      setCookie("quizId", selectedQuizId, { path: "/" });
    }
  }, [selectedQuizId]);

  return (
    <AppContext.Provider
      value={{
        allQuizzes,
        setSelectedQuizId,
        selectedQuiz,
        allQuizCategories,
        displayedQuestionIndex,
        setDisplayedQuestionIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const QuizContext = () => useContext(AppContext);
