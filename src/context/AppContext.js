const { createContext, useContext, useState, useEffect } = require("react");
import allQuizzes from "../data/quizzesData.json";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const allQuizCategories = [
    ...new Set(allQuizzes.map((item) => item.category)),
  ];

  useEffect(() => {
    if (selectedQuizId) {
      const foundQuiz = allQuizzes.find((q) => q.id === selectedQuizId);

      setSelectedQuiz(foundQuiz);
    }
  }, [selectedQuizId]);

  return (
    <AppContext.Provider
      value={{
        allQuizzes,
        setSelectedQuizId,
        selectedQuiz,
        allQuizCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const QuizContext = () => useContext(AppContext);
