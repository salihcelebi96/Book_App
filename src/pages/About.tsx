import React from 'react';
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

const CareerCard: React.FC = () => {
  return (
    <div className='my-5'>
      <div className="text-center mt-5 text-2xl">
        Yönetim Kurulu
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 justify-center">
        <div className="m-4 w-[500px]">
          <img src={team1} alt="Gizem Çoban" />
          <div className='flex flex-col items-center gap-1 mt-2'>
            <p>Gizem Çoban</p>
            <p>Yönetim Kurulu Üyesi</p>
            <p className='word-spacing-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas varius, sapien vel rhoncus convallis, mi tortor scelerisque lectus,
              et tincidunt justo quam eget justo. Fusce dignissim auctor sem, et bibendum mi.
              Vivamus id urna at orci condimentum facilisis. Nulla euismod risus vitae consectetur eleifend.
              Aliquam erat volutpat. Sed luctus convallis sem. Phasellus at lacus nec eros imperdiet luctus.
              icies aliquet. Etiam eu neque at libero scelerisque facilisis a sed arcu.
            </p>
          </div>
        </div>
        <div className="m-4 w-[500px]">
          <img src={team3} alt="Ahmet Çoban" />
          <div className='flex flex-col items-center gap-1 mt-2'>
            <p>Ahmet Çoban</p>
            <p>Yönetim Kurulu Başkanı</p>
            <p className='word-spacing-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas varius, sapien vel rhoncus convallis, mi tortor scelerisque lectus,
              et tincidunt justo quam eget justo. Fusce dignissim auctor sem, et bibendum mi.
              Vivamus id urna at orci condimentum facilisis. Nulla euismod risus vitae consectetur eleifend.
              Aliquam erat volutpat. Sed luctus convallis sem. Phasellus at lacus nec eros imperdiet luctus.
              icies aliquet. Etiam eu neque at libero scelerisque facilisis a sed arcu.
            </p>
          </div>
        </div>
        <div className="m-4 w-[500px]">
          <img src={team2} alt="Veli Çoban" />
          <div className='flex flex-col items-center gap-1 mt-2'>
            <p>Veli Çoban</p>
            <p>Yönetim Kurulu Üyesi</p>
            <p className='word-spacing-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas varius, sapien vel rhoncus convallis, mi tortor scelerisque lectus,
              et tincidunt justo quam eget justo. Fusce dignissim auctor sem, et bibendum mi.
              Vivamus id urna at orci condimentum facilisis. Nulla euismod risus vitae consectetur eleifend.
              Aliquam erat volutpat. Sed luctus convallis sem. Phasellus at lacus nec eros imperdiet luctus.
              icies aliquet. Etiam eu neque at libero scelerisque facilisis a sed arcu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
