import React, { useState } from 'react'
import { Button, TextField, Stack, Alert, AlertTitle } from '@mui/material'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './index.css'

function Register() {
    const [passwordType, setPasswordType] = useState("password")

    const [alertregister, setAlertregister] = useState(false)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const passwoerTypeHandler = () => {
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password")
    }
    const handlerRegister = () => {
        localStorage.setItem('user', JSON.stringify({ email, name, password }))

        if (name && email && password) { setAlertregister(!alertregister) }
    }
    return (
        <Container>
            {alertregister && (<Stack sx={{ width: '100%' }} spacing={2}> <Alert variant="filled" onClose={() => { setAlertregister(false) }} severity="success"><AlertTitle>Success</AlertTitle> Register Success!</Alert></Stack>)
            }
            <Row className='d-flex flex-column justify-content-center align-items-center form-bg-wite'>
                <Col lg={6} md={6} sm={12}><div className='register '>
                    <div className='register-header'>
                        <Button variant="outlined"><Link to='/login' className='none-text-dec'>Login</Link></Button>
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
                            <TextField id="outlined-name"
                                label="name"
                                variant="outlined"
                                fullWidth
                                type='text'
                                sx={{ mt: 3 }}
                                value={name}
                                onChange={e => setName(e.target.value)}
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
                                <Button className="btn-eye " sx={{ mt: 2, px: 8 }}> <RemoveRedEyeIcon onClick={passwoerTypeHandler} /></Button>

                            </div>
                            <Button variant="contained" sx={{ mt: 2, px: 8 }} size="large" color="success" onClick={handlerRegister}>Register</Button>
                        </form>
                    </div>

                </div></Col>

            </Row>
        </Container>

    )
}

export default Register