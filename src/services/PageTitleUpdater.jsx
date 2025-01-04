import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const updateTitle = () => {
      switch (location.pathname) {
        case '/':
          document.title = 'Admin Dashboard - AptiCrack';
          break;
        case '/admin/login':
          document.title = 'Login';
          break;
        case '/admin/manage-questions':
          document.title = 'Manage Questions';
          break;
        case '/admin/manage-questions/add':
          document.title = 'Add Question';
          break;
        case '/admin/manage-questions/edit/:id':
          document.title = 'Edit Question';
          break;
        case '/admin/manage-exams':
          document.title = 'Manage Exams';
          break;
        case '/admin/manage-exams/add':
          document.title = 'Add Exam';
          break;
        default:
          document.title = 'My App';
          break;
      }
    };

    updateTitle();
  }, [location]);

  return null;
};

export default PageTitleUpdater;