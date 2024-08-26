import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link, Navigate, } from "react-router-dom";
import './App.css'
import { MovieList } from './MovieList';
import { AddMovie } from './AddMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './MovieDetails';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { Login } from './Login';
import { EditMovie } from './EditMovie';

function App() {

  const navigate = useNavigate();
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: '100vh', borderRadius: '0%' }} elevation={4}>
        <div className='App'>
          <AppBar position="static">
            <Toolbar>
              <Button onClick={() => navigate("/")} color="inherit">Home</Button>
              <Button onClick={() => navigate("/movies")} color="inherit">Movies</Button>
              <Button onClick={() => navigate("/movies/add")} color="inherit">Add Movies</Button>
              <Button
                sx={{ marginLeft: "auto" }}
                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                onClick={() => setMode(mode == 'light' ? 'dark' : 'light')}
                color="inherit">{mode == 'light' ? 'dark' : 'light'}mode</Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            {/* <Route path="/films" element={<Navigate replace to="/movies" />} /> */}
            <Route path="/movies"
              element={<MovieList />} />
            <Route
              path="/movies/add"
              element={<AddMovie />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider >
  );
}
export default App;
