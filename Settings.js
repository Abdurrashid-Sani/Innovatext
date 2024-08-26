import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ProgressBarAndroid,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const courses = {
  WebDevelopment: [
    {
      question: "What does HTML stand for?",
      answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Mark Language"],
      correct: 0,
      explanation: "HTML stands for Hyper Text Markup Language.",
      hint: "It's the standard markup language for creating web pages.",
    },
  ],
  MobileDevelopment: [
    {
      question: "Which platform does Android use?",
      answers: ["iOS", "Windows", "Linux", "Java"],
      correct: 3,
      explanation: "Android development is primarily done in Java.",
      hint: "It's a widely used programming language.",
    },
  ],
  DataScience: [
    {
      question: "Which programming language is popular for data analysis?",
      answers: ["Java", "Python", "C++", "Swift"],
      correct: 1,
      explanation: "Python is widely used for data analysis due to its simplicity and powerful libraries.",
      hint: "It's a language known for its readability.",
    },
  ],
  MachineLearning: [
    {
      question: "What is a neural network?",
      answers: ["A type of database", "A computer network", "A set of algorithms", "A type of programming language"],
      correct: 2,
      explanation: "A neural network is a set of algorithms modeled after the human brain.",
      hint: "It's inspired by the human brain.",
    },
  ],
  Cybersecurity: [
    {
      question: "What is the primary goal of cybersecurity?",
      answers: ["Developing software", "Protecting information", "Designing websites", "Analyzing data"],
      correct: 1,
      explanation: "The primary goal of cybersecurity is to protect information from unauthorized access.",
      hint: "It's about security.",
    },
  ],
  CloudComputing: [
    {
      question: "Which service model provides virtualized computing resources over the internet?",
      answers: ["SaaS", "PaaS", "IaaS", "DaaS"],
      correct: 2,
      explanation: "IaaS provides virtualized computing resources over the internet.",
      hint: "It's Infrastructure as a Service.",
    },
  ],
  Blockchain: [
    {
      question: "What is blockchain primarily used for?",
      answers: ["Data analysis", "Cryptocurrency transactions", "Web development", "Mobile applications"],
      correct: 1,
      explanation: "Blockchain is primarily used for cryptocurrency transactions.",
      hint: "It's related to Bitcoin.",
    },
  ],
  ArtificialIntelligence: [
    {
      question: "Which field is considered a subfield of AI?",
      answers: ["Web Development", "Machine Learning", "Cybersecurity", "Cloud Computing"],
      correct: 1,
      explanation: "Machine Learning is considered a subfield of AI.",
      hint: "It's a type of learning.",
    },
  ],
  IoT: [
    {
      question: "What does IoT stand for?",
      answers: ["Internet of Tools", "Internet of Technology", "Internet of Things", "Internet of Transport"],
      correct: 2,
      explanation: "IoT stands for Internet of Things.",
      hint: "It's about connecting devices.",
    },
  ],
  DevOps: [
    {
      question: "What is the main goal of DevOps?",
      answers: ["Speed up software delivery", "Improve cybersecurity", "Enhance web development", "Boost data analysis"],
      correct: 0,
      explanation: "The main goal of DevOps is to speed up software delivery.",
      hint: "It's about delivery speed.",
    },
  ],
  Marketing: [
    {
      question: "What is the primary objective of marketing?",
      answers: ["Developing products", "Managing finances", "Creating brand awareness", "Improving operations"],
      correct: 2,
      explanation: "The primary objective of marketing is to create brand awareness.",
      hint: "It's about promoting a brand.",
    },
  ],
  Finance: [
    {
      question: "What is the purpose of financial management?",
      answers: ["Create products", "Manage money", "Develop software", "Improve customer service"],
      correct: 1,
      explanation: "The purpose of financial management is to manage money.",
      hint: "It's about money.",
    },
  ],
  Operations: [
    {
      question: "What is operations management focused on?",
      answers: ["Marketing", "Production processes", "Sales", "Legal issues"],
      correct: 1,
      explanation: "Operations management is focused on production processes.",
      hint: "It's about producing goods.",
    },
  ],
  HumanResources: [
    {
      question: "What is the role of human resources?",
      answers: ["Financial planning", "Managing employees", "Developing products", "Improving IT infrastructure"],
      correct: 1,
      explanation: "The role of human resources is to manage employees.",
      hint: "It's about people.",
    },
  ],
  Strategy: [
    {
      question: "What is business strategy?",
      answers: ["A marketing plan", "A financial report", "A long-term plan", "An operational task"],
      correct: 2,
      explanation: "Business strategy is a long-term plan.",
      hint: "It's about planning for the future.",
    },
  ],
  Sales: [
    {
      question: "What is the main objective of sales?",
      answers: ["Developing products", "Generating revenue", "Managing employees", "Improving operations"],
      correct: 1,
      explanation: "The main objective of sales is to generate revenue.",
      hint: "It's about making money.",
    },
  ],
  CustomerService: [
    {
      question: "What is the goal of customer service?",
      answers: ["Developing products", "Improving employee satisfaction", "Enhancing customer satisfaction", "Managing finances"],
      correct: 2,
      explanation: "The goal of customer service is to enhance customer satisfaction.",
      hint: "It's about the customers.",
    },
  ],
  Innovation: [
    {
      question: "What does innovation focus on?",
      answers: ["Improving existing products", "Developing new products", "Marketing strategies", "Financial planning"],
      correct: 1,
      explanation: "Innovation focuses on developing new products.",
      hint: "It's about creating something new.",
    },
  ],
  BusinessPlanning: [
    {
      question: "What is a business plan?",
      answers: ["A financial statement", "A marketing strategy", "A roadmap for your business", "An organizational chart"],
      correct: 2,
      explanation: "A business plan outlines the goals, strategies, and financial forecasts of your business.",
      hint: "It's a document that helps you plan your business.",
    },
  ],
  MarketResearch: [
    {
      question: "What is the first step in market research?",
      answers: ["Collecting data", "Analyzing data", "Defining the objective", "Presenting findings"],
      correct: 2,
      explanation: "The first step in market research is defining the objective.",
      hint: "It's about understanding what you want to achieve.",
    },
  ],
  LegalStructures: [
    {
      question: "What is a legal structure in business?",
      answers: ["A business plan", "A marketing strategy", "An organizational form", "A financial statement"],
      correct: 2,
      explanation: "A legal structure defines the organizational form of a business.",
      hint: "It's about the legal form.",
    },
  ],
  Funding: [
    {
      question: "What is the primary source of funding for startups?",
      answers: ["Bank loans", "Venture capital", "Personal savings", "Crowdfunding"],
      correct: 2,
      explanation: "Personal savings is a common primary source of funding for startups.",
      hint: "It's about personal finance.",
    },
  ],
  GrowthStrategies: [
    {
      question: "What is a growth strategy?",
      answers: ["A financial plan", "A marketing tactic", "A plan to increase business size", "An operational guideline"],
      correct: 2,
      explanation: "A growth strategy is a plan to increase the size and revenue of a business.",
      hint: "It's about expanding.",
    },
  ],
  ExitStrategies: [
    {
      question: "What is an exit strategy?",
      answers: ["A financial plan", "A marketing strategy", "A plan to sell a business", "An operational guideline"],
      correct: 2,
      explanation: "An exit strategy is a plan to sell a business or take it public.",
      hint: "It's about exiting the business.",
    },
  ],
};

const QuizApp = () => {
  const [course, setCourse] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (course) {
      setQuestions(courses[course]);
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore(0);
    }
  }, [course]);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setCourse(null);
    setQuestions([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
  };

  const renderCourseSelection = () => (
    <ScrollView contentContainerStyle={styles.courseSelectionContainer}>
      <Text style={styles.courseSelectionTitle}>Select a Course</Text>
      {Object.keys(courses).map((courseKey) => (
        <TouchableOpacity
          key={courseKey}
          style={styles.courseButton}
          onPress={() => setCourse(courseKey)}
        >
          <Text style={styles.courseButtonText}>{courseKey.replace(/([A-Z])/g, ' $1').trim()}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderQuiz = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerAction} onPress={restartQuiz}>
          <FeatherIcon name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{course.replace(/([A-Z])/g, ' $1').trim()}</Text>
        <TouchableOpacity style={styles.headerAction} onPress={restartQuiz}>
          <FeatherIcon name="x" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <ProgressBarAndroid
        style={styles.progressBar}
        styleAttr="Horizontal"
        indeterminate={false}
        progress={(currentQuestion + 1) / questions.length}
      />
      <Text style={styles.timer}>
        {currentQuestion + 1}/{questions.length}
      </Text>
      <View style={styles.content}>
        {questions[currentQuestion] ? (
          <>
            <Text style={styles.question}>{questions[currentQuestion].question}</Text>
            <View style={styles.answers}>
              {questions[currentQuestion].answers.map((answer, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.answerButton,
                    selectedAnswer === index && styles.selectedAnswer,
                  ]}
                  onPress={() => handleAnswer(index)}
                  disabled={showExplanation}
                >
                  <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {showExplanation && (
              <Text style={styles.explanation}>
                {questions[currentQuestion].explanation}
              </Text>
            )}
            {showExplanation && currentQuestion < questions.length - 1 && (
              <TouchableOpacity style={styles.navButton} onPress={nextQuestion}>
                <Text style={styles.navButtonText}>Next</Text>
              </TouchableOpacity>
            )}
            {showExplanation && currentQuestion === questions.length - 1 && (
              <View>
                <Text style={styles.score}>
                  Your score: {score}/{questions.length}
                </Text>
                <TouchableOpacity style={styles.retakeButton} onPress={restartQuiz}>
                  <Text style={styles.retakeButtonText}>Retake Quiz</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {!course ? renderCourseSelection() : renderQuiz()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    flexBasis: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#0C065AF8',
    paddingVertical: 10,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  progressBar: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  timer: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0C065AF8',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 16,
  },
  section: {
    paddingVertical: 12,
    marginBottom: 20,
  },
  question: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0C065AF8',
    textAlign: 'center',
    marginBottom: 20,
  },
  hintButton: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  hintText: {
    fontSize: 16,
    color: '#FFA500',
  },
  answers: {
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 10,
  },
  selectedAnswer: {
    backgroundColor: '#e0e0e0',
  },
  answerText: {
    fontSize: 16,
    color: '#0C065AF8',
  },
  explanation: {
    fontSize: 16,
    color: '#0C065AF8',
    textAlign: 'center',
    marginTop: 10,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#0C065AF8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  score: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0C065AF8',
    textAlign: 'center',
    marginTop: 20,
  },
  shareButton: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  retakeButton: {
    backgroundColor: '#0C065AF8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  retakeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  courseSelectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  courseSelectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0C065AF8',
    textAlign: 'center',
    marginBottom: 20,
  },
  courseButton: {
    backgroundColor: '#0C065AF8',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  courseButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default QuizApp;
