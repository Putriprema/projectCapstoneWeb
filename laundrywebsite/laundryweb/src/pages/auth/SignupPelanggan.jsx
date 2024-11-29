import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import { useState } from 'react';
import vector from '../../assets/vector_pelanggan.png'
import { Link, useNavigate } from 'react-router-dom';

const axiosHandler = async (url, data) => await axios.post(url, data);

const errorMessageDisplay = (text) => (
    <p
        style={{
            color: 'red',
            fontSize: 12,
            marginTop: 0,
            paddingTop: 0,
            marginLeft: 5,
            marginBottom: 10,
            fontWeight: 'bold'
    }}>
        {text}
    </p>
);

function signuppelanggan() {
    const navigate = useNavigate();
  const [getNavbarValue, setNavbarValue] = useState("");

  const changeNavbarValue = () => {
      setNavbarValue("Profile");
  };

    const [isRegister, setRegister] = React.useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
            const value = {
                confPassword: data.confPassword,
                email: data.email,
                name: data.name,
                password: data.password,
                phoneNumber: data.phone,
                codeAffiliate: data.code,
            };

        const statement = `http://localhost:5555/api/v1/Register`;
        try {
            const { data } = await axiosHandler(statement, value);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: data,
            });
            reset();
            navigate("/login-pelanggan")
        }   catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data,
            });
        }
    };

  return (
    <>
      <Navbar navValue={getNavbarValue}/>
      <div style={{display: 'flex', fontFamily: 'Poppins'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '130vh', width: '50%'}}>
                    <form style={{width: '75%'}} onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <h2 style={{marginBottom: 110}}>Lengkapi Data Diri</h2>
                        </div>
                        <div className="mb-3">
                            <label style={{fontWeight: 500, marginBottom: 10}} id="name">
                            Nama Lengkap Pelanggan
                            </label>
                            <input
                                style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}}
                                type="text"
                                className="form-control"
                                placeholder="Nama Lengkap"
                                aria-describedby="name"
                                {...register("name", {
                                    required: {value: true, message: "Input field required!"}
                                })}
                            />
                        </div>
                        {errors.name && errors.name.message
                            ? errorMessageDisplay(errors.name.message)
                            : null}
                        <div className="mb-3 mt-2">
                            <label style={{fontWeight: 500, marginBottom: 10}} id="email">
                                Email
                            </label>
                            <input
                                style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}}
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                aria-describedby="email"
                                {...register("email", {
                                    required: {value: true, message: "Input field required!"}
                                })}
                            />
                        </div>
                        {errors.email && errors.email.message
                            ? errorMessageDisplay(errors.email.message)
                            : null}
                        <div className="mb-3 mt-2">
                            <label style={{fontWeight: 500, marginBottom: 10}} id="phone">
                                No. Telepon
                            </label>
                            <input
                                style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}}
                                type="number"
                                className="form-control"
                                placeholder="No. Telepon"
                                aria-describedby="phone"
                                {...register("phone", {
                                    required: {value: true, message: "Input field required!"}
                                })}
                            />
                        </div>
                        {errors.phone && errors.phone.message
                            ? errorMessageDisplay(errors.phone.message)
                            : null}
                        <div>
                            <label style={{fontWeight: 500, marginBottom: 10}} id="password">
                                Buat Kata Sandi
                            </label>
                            <input
                                style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey', marginBottom: 12}}
                                type="password"
                                className="form-control"
                                placeholder="Kata Sandi"
                                autoComplete='off'
                                aria-describedby="password"
                                {...register("password", {
                                    required: {value: true, message: "Input field required!"}
                                })}
                            />
                        </div>
                        {errors.password && errors.password.message
                            ? errorMessageDisplay(errors.password.message)
                            : null}
                                <div className="mb-3 mt-2">
                                    <label style={{fontWeight: 500, marginBottom: 10}} id="confPassword">
                                        Ulangi Kata Sandi
                                    </label>
                                    <input
                                        style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}}
                                        type="password"
                                        className="form-control"
                                        placeholder="Konfirmasi Kata Sandi"
                                        autoComplete='off'
                                        aria-describedby="confPassword"
                                        {...register("confPassword", {
                                            required: {value: true, message: "Input field required!"}
                                        })}
                                    />
                                </div>
                                    {errors.confPassword && errors.confPassword.message
                                        ? errorMessageDisplay(errors.confPassword.message)
                                        : null}
                                <div>
                                    <label style={{fontWeight: 500, marginBottom: 10}} id="code">
                                        Kode Affiliate (Jika Ada)
                                    </label>
                                    <input
                                        style={{border:'none', borderRadius: '10px', boxShadow: '1px 3px 4px grey'}}
                                        type="number"
                                        className="form-control"
                                        placeholder="Kode Affiliate"
                                        aria-describedby="code"
                                        {...register("code")}
                                    />
                                </div>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <div style={{marginTop: '8px'}}>
                                        <input type="checkbox" style={{margin: 5}}/>
                                        <label style={{fontWeight: 500}}>Saya setuju dengan syarat Dan Ketentuan serta kebijakan privasi</label>
                                    </div>
                                </div>
                            </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: 20,
                                flexDirection: 'column',
                                alignContent: 'center'
                            }}
                        >
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
                                    <button className='btn btn-primary' type="submit" style={{borderRadius: '13px', boxShadow: '1px 3px 4px grey', width: '120px', marginBottom: '10px'}}>
                                        Daftar
                                    </button>
                                    <div style={{textAlign: 'center'}}>
                                    <p>Sudah Punya Akun?
                                    <Link to="/login-pelanggan"><button style={{color: 'black', textDecoration: 'none' }} type="button" className="btn btn-link" >
                                        Masuk
                                    </button></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', height: '130vh', background: '#D9EAF4' }} >
          <img src={vector} alt="image" />
        </div>
            </div>
      <Footer />
    </>
  );
};

export default signuppelanggan;