import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Alert,
  createTheme,
  ThemeProvider
} from "@mui/material";
import { UserPlus } from 'lucide-react';
import { Link } from "react-router-dom";
import { register } from '@/redux/slices/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const theme = createTheme({
  palette: {
    primary: {
      main: '#16a34a',
    },
    secondary: {
      main: '#22c55e',
    },
  },
});

const RegisterModal = ({ isMobile = false }) => {
  const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateFields = () => {
    let valid = true;

    if (!email) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!username) {
      setUsernameError(true);
      valid = false;
    } else {
      setUsernameError(false);
    }

    if (!password) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      dispatch(register({ email, username, password }))
        .unwrap()
        .then(() => {
          setOpenModal(false);
          // After successful registration, redirect to login
          navigate("/email_verify");
        })
        .catch((err) => {
          console.log(err);
          console.error("Registration failed:", err);
        });
    }
  };

  const handleRegister = () => {
    setOpenModal(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleRegister}
        className={`px-6 py-2 rounded-full font-semibold transition duration-300 bg-white text-green-600 border border-green-600 hover:bg-green-50 ${
          isMobile ? "w-full justify-center" : ""
        } flex items-center`}
      >
        <UserPlus className="inline-block mr-2" size={isMobile ? 24 : 20} />
        Register
      </motion.button>
      
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: '#f0fdf4',
            borderRadius: '0.5rem',
          },
        }}
      >
        <DialogTitle style={{ color: '#166534' }}>Register</DialogTitle>
        <DialogContent>
          {error && (
            <Alert severity="warning" style={{ marginBottom: '1rem' }}>
              {typeof error === 'string' ? error : 'Registration failed. Please try again.'}
            </Alert>
          )}
          <TextField
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
            placeholder="Your Email"
            error={emailError}
            helperText={emailError ? 'Email is required' : ''}
            InputLabelProps={{
              style: { color: '#166534' },
            }}
          />
          <TextField
            type="text"
            label="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            required
            placeholder="Your Username"
            error={usernameError}
            helperText={usernameError ? 'Username is required' : ''}
            InputLabelProps={{
              style: { color: '#166534' },
            }}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
            placeholder="Password"
            error={passwordError}
            helperText={passwordError ? 'Password is required' : ''}
            InputLabelProps={{
              style: { color: '#166534' },
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
        </DialogContent>
        <DialogActions style={{ padding: '1rem' }}>
          <Button 
            onClick={() => setOpenModal(false)} 
            color="secondary"
            style={{ color: '#166534' }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            color="primary" 
            disabled={loading}
            variant="contained"
            style={{ backgroundColor: '#16a34a', color: 'white' }}
          >
            {loading ? "Loading..." : "Register" }
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default RegisterModal;