import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import LinearProgress from '@mui/material/LinearProgress';

import LandingPage from "./components/landing-page/LandingPage";
import AuthContainer from "./components/auth/AuthContainer";
import PagesContainer from "./components/pages/PagesContainer";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Eap from "./components/pages/eap/Eap";
import RelaxingActivities from "./components/pages/relaxing-activities/RelaxingActivities";
import DailyActivities from "./components/pages/daily-activities/DailyActivities";
import Blogs from "./components/pages/blogs/Blogs";
import Achievements from "./components/pages/achievements/Achievements";
import Leaderboard from "./components/pages/leaderboard/Leaderboard";
import Profile from "./components/pages/profile/Profile";
import Questionnaire from "./components/pages/questionnaire/Questionnaire";

import './App.css';

function App() {
  const loading = useSelector((store) => store.app.barLoading);

  return (
    <Suspense fallback={<div>Please wait while loading...</div>}>
      {loading ? <LinearProgress /> : ""}

      <div className="app">
        <HashRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>

            <Route path="/auth/login" element={<AuthContainer />}></Route>

            <Route path="/pages/" element={<PagesContainer />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="eap" element={<Eap />} />
              <Route path="relaxing-activities" element={<RelaxingActivities />} />
              <Route path="daily-activities" element={<DailyActivities />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="questionnaire" element={<Questionnaire />} />
            </Route>

            <Route path="*" element={<AuthContainer />} />
          </Routes>
        </HashRouter>
      </div>
    </Suspense>
  );
}

export default App;
