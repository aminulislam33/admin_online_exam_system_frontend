import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { QuestionProvider } from "./context/QuestionContext";
import AdminDashboard from "./pages/AdminDashboard";
import ManageQuestions from "./pages/ManageQuestions";
import ManageExams from "./pages/ManageExams";
import CreateQuestion from "./pages/CreateQuestion";
import EditQuestion from "./pages/EditQuestion";
import CreateExam from "./pages/CreateExams";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <QuestionProvider>
        <Router>
            <Navbar />
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/manage-questions" element={<ManageQuestions />}/>
                <Route path="/admin/manage-questions/add" element={<CreateQuestion />}/>
                <Route path="/admin/manage-questions/edit/:id" element={<EditQuestion />}/>
                <Route path="/admin/manage-exams" element={<ManageExams />} />
                <Route path="/admin/manage-exams/add" element={<CreateExam />} />
              </Routes>
            <Footer />
        </Router>
      </QuestionProvider>
    </AuthProvider>
  );
}

export default App;