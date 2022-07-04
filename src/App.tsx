import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AdminComponent from './AdminComponent';
import './App.css'
import LoginPage from './Auth/components/LoginPage';
import ProtectedRoute from './Auth/components/ProtectedRoute';
import Category from './categories/components/Category';
import Client from './clients/components/Client';
import Member from './members/components/Member';
import Project from './projects/componets/Project';
import Reports from './reports/components/Reports';
import TestComponent from './TestComponent';
import TimeSheet from './timesheet/components/TimeSheet';
function App() {
  return (
    <>
    <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/timesheets" element={ 
          <ProtectedRoute>
              <TimeSheet/>
          </ProtectedRoute>
        }/>
        <Route path="/categories" element={
              <ProtectedRoute>
              <Category/>
            </ProtectedRoute>
        }/>
        <Route path="/clients" element={
              <ProtectedRoute>
              <Client/>
            </ProtectedRoute>
        }/>
        <Route path="/projects" element={
                  <ProtectedRoute>
                  <Project/>
                </ProtectedRoute>
        }/>
        <Route path="/members" element={
                <ProtectedRoute>
                <Member/>
              </ProtectedRoute>
        }/>
        <Route path="/reports" element={
              <ProtectedRoute>
              <Reports/>
            </ProtectedRoute>
        }/>
        <Route path="/admin" element={
              <ProtectedRoute>
             <AdminComponent/>
            </ProtectedRoute>
        }/>
         <Route path="/test" element={
              <ProtectedRoute>
             <TestComponent/>
            </ProtectedRoute>
        }/>
      </Routes>
      </>
  )
}


export default App;
