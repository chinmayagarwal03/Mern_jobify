import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Landing, Error, Register, ProtectedRoute} from './pages'
import {AllJobs,
Profile,
SharedLayout,
Stats, 
AddJob} from './pages/dashboard'

function App() {
  return ( 
    <BrowserRouter> 
      <Routes>
        <Route path = "/" element = {
          <ProtectedRoute>
           <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Stats />} />
          <Route path = "/all-jobs" element = {<AllJobs/>}/>
          <Route path = "/add-job" element = {<AddJob/>}/>
          <Route path = "/profile" element = {<Profile/>}/>
        </Route>
        <Route path = "/register" element={<div><Register/></div>}/>
        <Route path = "/landing" element={<Landing />}/>
        <Route path = "*" element={<div><Error/></div>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
