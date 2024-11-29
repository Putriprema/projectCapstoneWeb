/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import informasi2 from '../assets/informasi2.png'; 

const Artikel2 = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="font-bold text-2x2" style={{ color: 'black', marginLeft: '5%', marginTop: '5%' }}>
        6 Cara Mencuci Pakaian Cepat dan Mudah
        </h1>
        <h1 style={{ fontSize: '16pt', color: 'black', marginLeft: '5%', marginTop: '2%' }}>
          08 November 2023
        </h1>
        <img
          src={informasi2}
          alt="sepatu"
          className="text-center flex justify-center items-center"
          style={{ width: '60%', height: 'auto', margin: '0 auto', display: 'block', borderRadius:'20px', marginTop:'5%' }}/>
          <div className='mx-auto max-w-screen-2xl' style={{ textAlign: 'justify', marginTop:'5%', fontSize:'14pt'}}>
              <p>Mencuci pakaian dengan menggunakan mesin cuci memang sangat praktis, mudah dan juga efisien. Namun, ada beberapa pakaian yang tidak bisa dicuci dengan menggunakan mesin cuci, atau ada juga beberapa momen atau situasi dimana kita tidak bisa mencuci baju dengan mesin cuci, contohnya saat sedang bepergian.
                    Lalu, bagaimana sih cara mencuci pakaian yang benar tanpa menggunakan mesin cuci? Tenang Moms! Berikut beberapa panduan cara mencuci pakaian dengan tangan yang efektif dan bersih.</p>
              <h1 style={{marginTop:'2%', fontSize:'20pt'}}>Siapkan ember, isi dengan air</h1>
              <p>Hal pertama yang perlu dilakukan untuk mencuci pakaian tanpa mesin cuci adalah dengan menyiapkan ember, kemudian isi dengan air. Menyiapkan ember berisikan air merupakan langkah utama yang akan memudahkan proses mencuci pakaian. 
                 Jika sedang bepergian dan tidak menemukan ember, misalnya seperti sedang traveling atau liburan, Moms bisa menggunakan wastafel kok. Isi wastafel dengan air hingga penuh sebagai pengganti ember. </p>
              <h1 style={{marginTop:'2%',  fontSize:'20pt'}}>Tuangkan detergen secukupnya ke dalam ember</h1>
              <p>Setelah ember, wastafel atau wadah yang digunakan sudah terisi air dengan penuh, selanjutnya tuangkan detergen ke dalam wadah yang sudah terisi air. Penggunaan detergen untuk dituangkan ke dalam ember dapat disesuaikan dengan takaran yang dianjurkan pada kemasan produk. 
                 Jika bepergian dalam waktu yang lama, pastikan untuk selalu membawa detergen cair sachet agar lebih praktis dan tidak mudah tumpah. Salah satu rekomendasi produk yang bisa digunakan adalah SoKlin Liquid. Moms bisa mengoleskan SoKlin Liquid langsung pada noda membandel. Caranya, cukup oleskan SoKlin Liquid pada noda pakaian dan diamkan sebentar dan formula detergen akan meresap untuk mengangkat kotoran membandel tersebut.</p>
              <h1 style={{marginTop:'2%',  fontSize:'20pt'}}>Rendam pakaian kotor selama 15-30 menit</h1>
              <p>Merendam pakaian kotor merupakan cara mencuci baju yang bersih dengan tangan. Proses ini bisa membantu mengangkat kotoran yang menempel pada baju kotor. Jika ada noda membandel, Moms bisa merendam pakaian dengan air hangat untuk memudahkan membersihkannya.</p>
              <h1 style={{marginTop:'2%',  fontSize:'20pt'}}>Kucek pakaian dengan tangan</h1>
              <p>Setelah pakaian sudah direndam, kotoran akan lebih mudah terangkat dan tentunya memudahkan kita dalam proses selanjutnya, yaitu mengucek pakaian. Mengucek pakaian adalah tahapan yang penting dalam cara mencuci pakaian yang benar tanpa mesin cuci. Kucek seluruh bagian pakaian hingga dirasa pakaian sudah cukup bersih. Jangan lupa untuk mengecek seluruh sisinya, terutama bagian belakang leher, lengan, sikut dan juga bagian lutut. 
                Penting juga diperhatikan untuk mengucek pakaian dengan perlahan, beberapa pakaian mudah melar jika dikucek terlalu kencang.</p>
                <h1 style={{marginTop:'2%',  fontSize:'20pt'}}>Bilas pakaian dengan air</h1>
                <p>Setelah dikucek dan pakaian sudah terlihat cukup bersih, kosongkan air, kemudian isi kembali dengan air bersih. Moms bisa menggunakan air bersih ini untuk membilas pakaian untuk menghilangkan busanya. Kosongan dan isi kembali air beberapa kali hingga dirasa pakaian sudah cukup bersih, busa juga sudah hilang dan tidak ada residu detergen yang masih menempel.
                    Sebagai rekomendasi, Moms bisa coba menggunakan SoKlin detergen cair Violet Blossom. SoKlin detergen cair ini juga ramah lingkungan karena menggunakan surfaktan yang mudah terurai. SoKlin detergen cair Violet Blossom ini memiliki wangi parfum kelas dunia, selain itu juga bisa membunuh bakteri pada pakaian, wangi tahan lama, dan juga lembut serta tidak panas di tangan.
                    Nah, itu dia cara mencuci pakaian yang benar tanpa mesin cuci. Walaupun dicuci secara manual pakai tangan, baju kita bisa tetap bersih kok dengan langkah-langkah di atas kok, Moms!</p>
          
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel2;
