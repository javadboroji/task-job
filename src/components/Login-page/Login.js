import React, { useState, useContext } from 'react'
import { Button, TextField, Stack, Alert, AlertTitle } from '@mui/material'
import { Container, Col, Row } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { newContext } from '../Context/Context'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from "react-router-dom";

import './index.css'

function Login() {
    const { userLogin, setUserLogin } = useContext(newContext)
    const [passwordType, setPasswordType] = useState("password")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();

    const [alertLoin, setAlertLoin] = useState(false)

    const passwoerTypeHandler = () => {
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password")
    }

    const loginHandle = () => {
        const user = JSON.parse(localStorage.getItem('user'))
       if(user){
        if(user.email === email && user.password === password){
            setUserLogin(true)
          return navigate("/")
        } else{
            setUserLogin(false) ;
            setAlertLoin(true)
          
        } 
    }
    }
    return (
        <Container>
            {
               alertLoin && (
                    <Stack sx={{ width: '100%' }} spacing={2}> <Alert variant="filled" onClose={() => { setAlertLoin(false) }} severity="error"><AlertTitle>Warning</AlertTitle> incrrect emil or password </Alert></Stack>)
            }
            <Row className='d-flex flex-column justify-content-center align-items-center form-bg-wite'>
                <Col lg={6} md={6} sm={12}><div className='register '>
                    <div className='register-header'>
                        <Button variant="outlined"><Link to='/register' className='none-text-dec'>Register</Link></Button>
                    </div>
                    <div className=' register-main'>
                        <form>

                            <TextField id="outlined-email"
                                label="email"
                                variant="outlined"
                                fullWidth
                                type='email'
                                sx={{ mt: 3 }}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <div className='password-inp-box'>
                                <TextField
                                    id="outlined-pas"
                                    label="password"
                                    variant="outlined"
                                    fullWidth
                                    type={passwordType}
                                    sx={{ mt: 3 }}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <Button className="btn-eye ii" sx={{ mt: 2, px: 8 }}> <RemoveRedEyeIcon onClick={passwoerTypeHandler} /></Button>

                            </div>
                            <Button variant="contained" sx={{ mt: 2, px: 8 }} size="large" color="success" onClick={loginHandle}>Login</Button>
                        </form>
                    </div>

                </div></Col>

            </Row>
        </Container>

    )
}

export default Login