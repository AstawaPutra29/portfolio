import Image from 'next/image' 
import {HeaderHomeSection} from './HeaderHomeSection'
import { FooterHomeSelection } from './FooterHomeSelection'

export default function Home() {
  const footers = [
    {
      icon: '/images/phone-call.png',
      key : 'call',
      information : '081666666666' 
    },
    {
      icon: '/images/instagram.png',
      key : 'ig',
      information : 'lucius298' 
    },
    {
      icon: '/images/mail.png',
      key : 'mail',
      information : 'astawara29@gmail.com' 
    },
    {
      icon: '/images/location.png',
      key : 'addres',
      information : 'Jalan Pratu Made Rambug Gang Kamboja No 10 Batubulan Gianyar' 
    }
  ]
  return (
    <>
    <HeaderHomeSection/>
    {/* banner */}
    <div id='home' className='flex justify-between px-20 bg-blue-50'>
      <div className='flex flex-col justify-center items-center '>
          <p>Hi, i&apos;m</p>
          <p className='text-2xl md:text-5xl'>Astawa Putra</p>
      </div>
      <Image src={'/images/ilustration.png'} width={400} height={400} alt='profile' className='rounded-full my-10'></Image>
    </div>
    {/* banner */}
    {/* about */}
    <div id='about' className='py-16'>
      <div className='flex flex-col justify-center px-10 py-3 md:py-52'>
          <h2 className='text-5xl text-center'>About</h2>
        <div className='text-center'>
          <p>Nama saya I Wayan Astawa Putra, biasa dipanggil Astawa. Saya berasal dari Karangasem, dan tinggal di Batubulan. Saya lahir di Denpasar, 29 Agustus 2006. Hobi saya yaitu menggambar.
          Saya dulu bersekolah di SDN 18 Pemecutan, lalu lanjut ke jenjang SMP yaitu SMP PGRI 5 Denpasar. Dan sekarang saya bersekolah di SMKN 1 Denpasar</p>
        </div>      
      </div>
      
    </div>
    {/* End about */}

    {/* Contact */}
    <div id='contact' className='bg-blue-50 px-5 py-7 md:py-52'>
      <h2 className='text-5xl '>Contact</h2>
        {footers.map((footer) => (
          <div key={footer.key} className='flex items-center gap-4 py-3'>
            <Image src={footer.icon} alt=''width={25} height={25}/>
            <p>{footer.information}</p>
          </div>
        ))}
    </div>
    {/* End Contact */}
    <FooterHomeSelection/>
    </>
  )
}
