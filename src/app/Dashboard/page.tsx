import { FunctionComponent, useCallback } from 'react';
import styles from '../_components/Dashboard.module.css';
import Image from 'next/image';
import Link from 'next/link';

import iniadmin from '@/assets/dashboard/iniadmin.png';

import Stats1 from '@/assets/dashboard/Stats1.png';

import Stats2 from '@/assets/dashboard/Stats2.png';

import Stats3 from '@/assets/dashboard/Stats3.png';

import Stats4 from '@/assets/dashboard/Stats4.png';

import Profile from '@/assets/dashboard/profile.png';

import rectangle from '@/assets/tambahproduk/Rectangle 120.svg'
const Dashboard: FunctionComponent = () => {
  return (

    <div className={styles.dashboard}>
      <div className={styles.dashboardChild} />
      <div className={styles.dashboardItem} />
      <div className={styles.dashboardInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.dashboardChild1} />
      <div className={styles.dashboardChild2} />
      <b className={styles.alkesCom}>ALKES .COM</b>
      <div className={styles.menungguKonfirmasi}>Menunggu Konfirmasi</div>
      <div className={styles.totalPenjualan}>Total Penjualan</div>
      <div className={styles.div}>3</div>
      <div className={styles.pengiriman}>Pengiriman</div>
      <div className={styles.div1}>4</div>
      <Image className={styles.icon} alt="" src={iniadmin} />
      
      <div className={styles.iniadmin}>iniadmin</div>
      <Link href="/TambahProduk">
      <div className={styles.tambahProduk}>Tambah Produk</div>
      </Link>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.dashboard1}>Dashboard</div>
      </div>
      <div className={styles.totalPendapatanParent}>
        <div className={styles.totalPendapatan}>Total Pendapatan</div>
        <Image className={styles.groupItem} alt="" src={rectangle}/>
        <div className={styles.rp567500}>Rp.567.500</div>
      </div>
      <div className={styles.penjualanHariIni}>Penjualan hari ini</div>
      <div className={styles.div2}>12</div>
      <div className={styles.div3}>158</div>
      <div className={styles.dashboard2}>Dashboard</div>
      <div className={styles.dashboardChild3} />
      <div className={styles.dashboardChild4} />
      <div className={styles.dashboardChild5} />
      <div className={styles.dashboardChild6} />
      <div className={styles.dashboardChild7} />
      <div className={styles.ellipseParent}>
        <div className={styles.groupInner} />
        <Image className={styles.icon1} alt="" src={Stats1} />
      </div>
      <div className={styles.ellipseDiv} />
      <Image className={styles.icon2} alt="" src={Stats2} />
      <div className={styles.dashboardChild8} />
      <div className={styles.dashboardChild9} />
      <Image className={styles.icon3} alt="" src={Stats3} />
      <Image className={styles.icon4} alt="" src={Stats4} />
      <Link href="/Orderan">
      <div className={styles.orderan} >Orderan</div>
      </Link>
      <div className={styles.hariIni}>Hari ini</div>
      <div className={styles.mingguIni}>Minggu ini</div>
      <div className={styles.bulanIni}>Bulan ini</div>
      <div className={styles.tahunIni}>Tahun ini</div>
      <div className={styles.div4}>1</div>
      <div className={styles.div5}>3</div>
      <div className={styles.div6}>16</div>
      <div className={styles.div7}>69</div>
      <div className={styles.totalPenjualan1}>Total Penjualan</div>
      <div className={styles.dashboardChild10} />
      <div className={styles.dashboardChild11} />
      <div className={styles.dashboardChild12} />
      <div className={styles.dashboardChild13} />
      <div className={styles.rp85000}>Rp.85.000</div>
      <div className={styles.rp345000}>Rp.345.000</div>
      <div className={styles.rp987500}>Rp.987.500</div>
      <div className={styles.rp3540000}>Rp.3.540.000</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild1} />
        <div className={styles.penggunaBaru}>Pengguna Baru</div>
        <div className={styles.lineDiv} />
        <Image className={styles.images1Icon} alt="" src={Profile} />
        <div className={styles.mohammed}>
          <span>Mohammed</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <Image className={styles.images2Icon} alt="" src={Profile} />
        <Image className={styles.images3Icon} alt="" src={Profile} />
        <Image className={styles.images4Icon} alt="" src={Profile} />
        <Image className={styles.images5Icon} alt="" src={Profile} />
        <div className={styles.hamud}>hamud</div>
        <div className={styles.hamid}>
          <span>hamid</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <div className={styles.hamed}>
          <span>hamed</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <div className={styles.hamod}>
          <span>hamod</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <div className={styles.menitLalu}>13 menit lalu</div>
        <div className={styles.jamYangLalu}>1 jam yang lalu</div>
        <div className={styles.jamYangLalu1}>3 jam yang lalu</div>
        <div className={styles.jamYangLalu2}>5 jam yang lalu</div>
        <div className={styles.hariLalu}>1 hari lalu</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild2} />
        <div className={styles.kotaPenjualanPerforma}>Kota Penjualan Performa</div>
        <div className={styles.groupChild3} />
        <div className={styles.makassar}>Makassar</div>
        <div className={styles.jakarta}>Jakarta</div>
        <div className={styles.bandung}>
          <span>Bandung</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <div className={styles.surabaya}>
          <span>Surabaya</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <div className={styles.aceh}>
          <span>Aceh</span>
          <span className={styles.span}>{` `}</span>
        </div>
      </div>
      <div className={styles.dashboardChild14} />
      <div className={styles.jumlahUserYang}>Jumlah User Yang Telah Mendaftar</div>
      <div className={styles.user}>
        <p className={styles.p}>1.976</p>
        <p className={styles.user1}>/user</p>
      </div>
    </div>);
};

export default Dashboard;
