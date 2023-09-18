import { TextField, Button, InputAdornment } from "@mui/material";
import './../App.css';
import { useNavigate } from "react-router-dom";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LockIcon from "@material-ui/icons/Lock";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import axios from "axios";
import { lazy, Suspense, createContext, useState, useEffect } from "react";

function Join() {
    let navigate = useNavigate();

    axios.get("http://localhost:8080/sign_up").then((res) => {
        console.log(res.data)
    })
        .catch(() => {
            console.log('실패함')
        })
    const [temp, SetTemp] = useState(true);

    const [id, setId] = useState("2");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [check_pw, setCehck_pw] = useState("");
    const [role, setRole] = useState("");
    const hasNotSameError = passwordEntered =>
    password != check_pw ? true : false;    

    const onSubmitHandler = (event) => {
    event.preventDefault(); // 아무 동작 안하고 버튼만 눌러도 리프레쉬 되는 것을 막는다

    if(password !== check_pw){
        return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }
    }
    useEffect(() => {
        console.log(id);
        console.log(password);
        console.log(name);
        console.log(number);
        console.log(role)
        sendUserData();
    }, [temp])
    return (
        <div className="join_wrap" style={{ backgroundColor: "rgb(209, 209, 214)" }}>

            <div className="joinWrap">
                <div className="join">
                    <p>Sign Up</p>
                    <div id="textFeild">
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <PermIdentityIcon />
                                    </InputAdornment>
                                ),
                            }}
                            label="ID"
                            required
                            name="id"
                            type="email"
                            autoComplete="id"
                            sx={{
                                width: { sm: 200, md: 350 },
                                "& .MuiInputBase-root": {
                                    height: 60
                                }
                            }}
                            autoFocus
                            onChange={(e) => {
                                setId(e.target.value);
                            }} />
                        &nbsp;&nbsp;
                        
                    </div>
                    <div id="textFeild">
                        <div>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                label="password"
                                type="password"
                                required
                                name="password"
                                autoComplete="current-password"
                                sx={{
                                    width: { sm: 200, md: 350 },
                                    "& .MuiInputBase-root": {
                                        height: 60
                                    }
                                }}
                                onChange={(e) => {
                                    setPassword(e.currentTarget.value);
                                }} />
                        </div>
                    </div>
                    <div id="textFeild">
                        <div>
                        <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                label="check_pw"
                                type="password"
                                required
                                name="setCehck_pw"
                                autoComplete="current-password"
                                sx={{
                                    width: { sm: 200, md: 350 },
                                    "& .MuiInputBase-root": {
                                        height: 60
                                    }
                                }}
                                onChange={(e) => {
                                    setCehck_pw(e.currentTarget.value);
                                }}
                                error={hasNotSameError('check_pw')} // 해당 텍스트필드에 error 핸들러 추가
                        helperText={
                            hasNotSameError('check_pw') ? "입력한 비밀번호와 일치하지 않습니다." : null
                        } // 에러일 경우에만 안내 문구 표시
                         />
                        </div>
                    </div>
                    <div id="textFeild">
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PermIdentityIcon />
                                    </InputAdornment>
                                ),
                            }}
                            label="Name"
                            required
                            name="name"
                            sx={{
                                width: { sm: 200, md: 350 },
                                "& .MuiInputBase-root": {
                                    height: 60
                                }
                            }}
                            onChange={(e) => {
                                setName(e.target.value);
                            }} />
                    </div>
                    <div id="textFeild">
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneAndroidIcon />
                                    </InputAdornment>
                                ),
                            }}
                            label="Phone Number"
                            required
                            name="pn"
                            sx={{
                                width: { sm: 200, md: 350 },
                                "& .MuiInputBase-root": {
                                    height: 60
                                }
                            }}
                            onChange={(e) => {
                                setNumber(e.target.value);
                            }} />
                    </div>
                    <div className="partWrap">
                        <input className="part" type="button" value="사용자" onClick={(e) => {
                            let typped = e.target.value;
                            setPart(typped);
                        }}></input>
                        <input className="part" type="button" value="상업자" onClick={(e) => {
                            let typped = e.target.value;
                            setPart(typped);
                        }}></input>
                    </div>

                    <Button onClick={() => { SetTemp(!temp) }} id="textFeild" className="btn" type="submit" Width variant="contained"><span>sign up</span></Button>

                </div>
                <div className="imgarea">
                    <div className="text">
                        <h2>제목</h2>
                        <span>환영합니다</span>
                    </div>
                </div>
            </div>
        </div>
    )
    function sendUserData() {
        return (
            axios.get('/join', {
                params: {
                    id: id,
                    name: name,
                    password: password,
                    number: number,
                }
            }).catch(function () {
                console.log('실패함')
            })
        )
    }
}

export default Join;