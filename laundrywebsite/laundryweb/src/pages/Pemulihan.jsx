import Navbar from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const Pemulihan = () => {
 
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center pt-40 pb-20'>
        <Card style={{width: '50rem', height: '60vh', background: '#D9EAF4', border: 'none', boxShadow: '0px -3px 4px grey', paddingTop: '80px'}}>
          <Card.Body>
            <Card.Title><h2>Pemulihan Akun</h2></Card.Title>
            <Card.Text className='px-32 pt-4'>
              Masukkan email akun Anda yang sudah terdaftar kemudian ikuti langkah pada email yang Kami kirimkan.
            </Card.Text>
            <div style={{display: 'flex', flexDirection: 'column', width: '80%', paddingLeft: '20%', paddingBottom: '40px', paddingTop: '20px'}}>
              <label className='flex justify-start'>Masukkan Email Anda</label>
              <input style={{border:'1px solid', borderRadius: '10px', height: '40px'}} type="email" placeholder="  Email" />
            </div>
            <Link to='/Newpass'>
              <Button
                style={{ borderRadius: '20px', width: '20%' }}
                variant="primary"
              >
                Kirimkan
              </Button>
            </Link>
            <Card.Text className='pt-4'>Kembali ke <Link style={{color: 'black', textDecoration: 'none'}} to='./Newpass'><span>Beranda</span></Link></Card.Text>
          </Card.Body>
        </Card>
      </div>
     
      <div className='pt-20'>
        <Footer />
      </div>
    </>
  );
}

export default Pemulihan;
