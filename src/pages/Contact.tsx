import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact:React.FC = () => {
  return (
    <div className='h-screen'>
      
      <div className='flex flex-col  h-full   items-center my-10'>
        <div>
          <h1 className='text-3xl font-semibold'>Contact me</h1>
        </div>
        <div className='grid    lg:grid-cols-4   sm:grid-cols-2    my-10 gap-3'>
          <div className='border p-10 w-80 flex flex-col justify-center items-center  bg-blue-400 '>
            <FaMapMarkerAlt size={34} />
            <p className='text-center text-2xl'>Location</p>
            <p>Ümraniye-İstanbul-Türkiye</p>
          </div>
          <div className='border p-10 w-80 flex flex-col justify-center items-center bg-pink-200'>
            <FaEnvelope size={34} />
            <p className='text-center text-2xl'>E-mail</p>
            <p>celebisalih277@gmail.com</p>
          </div>
          <div className='border p-10 w-80 flex flex-col justify-center items-center bg-red-400'>
            <FaLinkedin size={34} />
            <p className='text-center text-2xl'>Linkedin</p>
            <a href="https://www.linkedin.com/in/salih-%C3%A7elebi-653079227/" target="_blank" rel="noopener noreferrer">
              linkden.com/in/salihcelebi
            </a>
          </div>
          <div className='border p-10 w-80 flex flex-col justify-center items-center bg-yellow-600'>
            <FaGithub size={34} />
            <p className='text-center text-2xl'>Github</p>
            <a href="https://github.com/salihcelebi96" target="_blank" rel="noopener noreferrer">
              https://github.com/salihcelebi96
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
