"use client";
import { FunctionComponent, useCallback } from 'react';
import Link from 'next/link';
import styles from '../_components/Orderan.module.css';
import Image from 'next/image';
import tambah from '@/assets/tambahproduk/748113 1.png'
import search from '@/assets/tambahproduk/54481 1.png'
import sampah from '@/assets/tambahproduk/3976961 1.png'
import kanan from '@/assets/tambahproduk/271228 1.png'
import kiri from '@/assets/tambahproduk/271220 1.png'
import profiladmin from '@/assets/dashboard/iniadmin.png'
import merah from '@/assets/orderan/14035711 1.png'
import hijau from '@/assets/orderan/14035769 1.png'
import hijau2 from '@/assets/orderan/14035769 2.png'
import biru from '@/assets/orderan/6162025 1.png'
import orange from '@/assets/orderan/16396073 1.png'


const Orderan:FunctionComponent = () => {
  	return (
    
			<div className={styles.orderan} style={{overflowX: 'auto'}}>    
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.alkesComParent}>
          					<b className={styles.alkesCom}>ALKES .COM</b>
          					<Image className={styles.icon} alt="" src={profiladmin} />
          					<div className={styles.iniadmin}>iniadmin</div>
          					<div className={styles.tambahProduk}>Tambah Produk</div>
          					<div className={styles.rectangleGroup}>
            						<div className={styles.groupItem} />
            						<div className={styles.dashboard}>Dashboard</div>
          					</div>
          					<div className={styles.orderan1}>Orderan</div>
        				</div>
      			</div>
      			<div className={styles.rectangleContainer}>
        				<div className={styles.groupInner} />
        				<div className={styles.menungguKonfirmasi}>Menunggu Konfirmasi</div>
        				<div className={styles.div}>3</div>
      			</div>
      			<div className={styles.groupDiv}>
        				<div className={styles.rectangleDiv} />
        				<div className={styles.pengiriman}>Pengiriman</div>
        				<div className={styles.div1}>4</div>
      			</div>
      			<div className={styles.orderanChild} />
      			<div className={styles.rectangleParent1}>
        				<div className={styles.groupChild1} />
        				<div className={styles.totalPendapatan}>Total Pendapatan</div>
        				<div className={styles.rp567500}>Rp.567.500</div>
      			</div>
      			<div className={styles.rectangleParent2}>
        				<div className={styles.groupChild2} />
        				<div className={styles.dashboard}>Penjualan hari ini</div>
        				<div className={styles.div2}>12</div>
      			</div>
      			<div className={styles.totalPenjualanParent}>
        				<div className={styles.totalPenjualan}>Total Penjualan</div>
        				<div className={styles.groupChild2} />
        				<div className={styles.div3}>158</div>
      			</div>
      			<div className={styles.orderanItem} />
      			<div className={styles.orderanInner} />
      			<div className={styles.menungguKonfirmasi1}>Menunggu Konfirmasi</div>
      			<div className={styles.produk}>Produk</div>
      			<div className={styles.harga}>Harga</div>
      			<div className={styles.namaCustomer}>Nama Customer</div>
      			<div className={styles.termometer}>Termometer</div>
      			<div className={styles.juny2024}>24 juny 2024</div>
      			<div className={styles.mrLexxan}>Mr lexxan</div>
      			<div className={styles.rp100000}>Rp.100.000</div>
      			<div className={styles.tabungOksigen}>Tabung oksigen</div>
      			<div className={styles.januari1945}>1 januari 1945</div>
      			<div className={styles.micaw}>micaw</div>
      			<div className={styles.rp750000}>Rp.750.000</div>
      			<div className={styles.suntik}>Suntik</div>
      			<div className={styles.januari2020}>16 januari 2020</div>
      			<div className={styles.onana}>onana</div>
      			<div className={styles.date}>Date</div>
      			<div className={styles.masker}>Masker</div>
      			<div className={styles.agustus2021}>6 agustus 2021</div>
      			<div className={styles.rafael}>{`rafael `}</div>
      			<div className={styles.rp20000}>Rp.20.000</div>
      			<div className={styles.rp193000}>Rp.193.000</div>
      			<div className={styles.alamat}>Alamat</div>
      			<div className={styles.perumahanCleoBlokContainer}>
        				<p className={styles.perumahanCleoBlok}>Perumahan cleo blok c/3 makassar,sulsel,</p>
        				<p className={styles.perumahanCleoBlok}>indonesia</p>
      			</div>
      			<div className={styles.perumahanCleoBlokContainer1}>
        				<p className={styles.perumahanCleoBlok}>Perumahan cleo blok c/3 makassar,sulsel,</p>
        				<p className={styles.perumahanCleoBlok}>indonesia</p>
      			</div>
      			<div className={styles.perumahanCleoBlokContainer2}>
        				<p className={styles.perumahanCleoBlok}>Perumahan cleo blok c/3 makassar,sulsel,</p>
        				<p className={styles.perumahanCleoBlok}>indonesia</p>
      			</div>
      			<div className={styles.perumahanCleoBlokContainer3}>
        				<p className={styles.perumahanCleoBlok}>Perumahan cleo blok c/3 makassar,sulsel,</p>
        				<p className={styles.perumahanCleoBlok}>indonesia</p>
      			</div>
      			<div className={styles.rectangleParent3}>
        				<div className={styles.groupChild4} />
        				<div className={styles.konfirmasi}>KONFIRMASI</div>
      			</div>
      			<div className={styles.rectangleParent4}>
        				<div className={styles.groupChild4} />
        				<div className={styles.konfirmasi}>KONFIRMASI</div>
      			</div>
      			<div className={styles.rectangleParent5}>
        				<div className={styles.groupChild4} />
        				<div className={styles.konfirmasi}>KONFIRMASI</div>
      			</div>
      			<div className={styles.rectangleParent6}>
        				<div className={styles.groupChild4} />
        				<div className={styles.konfirmasi}>KONFIRMASI</div>
      			</div>
      			<div className={styles.aksi}>Aksi</div>
      			<div className={styles.dashboard1}>Dashboard</div>
      			<div className={styles.stokProduk}>Stok Produk</div>
      			<div className={styles.tersedia}>Tersedia</div>
      			<div className={styles.kosong}>Kosong</div>
      			<div className={styles.tersedia1}>Tersedia</div>
      			<div className={styles.tersedia2}>Tersedia</div>
      			<div className={styles.orderanChild1} />
      			<div className={styles.orderan2}>Orderan</div>
      			<div className={styles.produk1}>Produk</div>
      			<div className={styles.harga1}>Harga</div>
      			<div className={styles.namaCustomer1}>Nama Customer</div>
      			<div className={styles.status}>Status</div>
      			<div className={styles.termometer1}>Termometer</div>
      			<div className={styles.juny20241}>24 juny 2024</div>
      			<div className={styles.mrLexxan1}>Mr lexxan</div>
      			<Image className={styles.icon1} alt="" src={hijau} />
      			<Image className={styles.icon2} alt="" src={merah} />
      			<Image className={styles.icon3} alt="" src={orange} />
      			<div className={styles.pengiriman1}>Pengiriman</div>
      			<div className={styles.rp1000001}>Rp.100.000</div>
      			<div className={styles.tabungOksigen1}>Tabung oksigen</div>
      			<div className={styles.januari19451}>1 januari 1945</div>
      			<div className={styles.micaw1}>micaw</div>
      			<div className={styles.disiapkan}>disiapkan</div>
      			<div className={styles.rp7500001}>Rp.750.000</div>
      			<div className={styles.suntik1}>Suntik</div>
      			<div className={styles.januari20201}>16 januari 2020</div>
      			<div className={styles.onana1}>onana</div>
      			<div className={styles.dibatalkan}>Dibatalkan</div>
      			<div className={styles.date1}>Date</div>
      			<div className={styles.masker1}>Masker</div>
      			<div className={styles.agustus20211}>6 agustus 2021</div>
      			<div className={styles.rafael1}>{`rafael `}</div>
      			<div className={styles.pengiriman2}>Pengiriman</div>
      			<Image className={styles.icon4} alt="" src={hijau2} />
      			<div className={styles.rp200001}>Rp.20.000</div>
      			<div className={styles.rp1930001}>Rp.193.000</div>
      			<div className={styles.alamat1}>Alamat</div>
      			<div className={styles.perumahanCleoBlokContainer4}>
        				<p className={styles.perumahanCleoBlok}>Perumahan cleo blok c/3 makassar,sulsel,</p>
        				<p className={styles.perumahanCleoBlok}>indonesia</p>
      			</div>
      			<div className={styles.perumahanCleoBlokContainer5}>
        				<p className={styles.perumahanCleoBlok}>Perumahan cleo blok c/3 makassar,sulsel,</p>
        				<p className={styles.perumahanCleoBlok}>indonesia</p>
      			</div>
      			<div className={styles.perumahanCleoBlokContainer6}>
        				<p className={styles.perumahanCleoBlok}>Perumahan cleo blok c/3 makassar,sulsel,</p>
        				<p className={styles.perumahanCleoBlok}>indonesia</p>
      			</div>
      			<div className={styles.perumahanCleoBlokContainer7}>
        				<p className={styles.perumahanCleoBlok}>Perumahan cleo blok c/3 makassar,sulsel,</p>
        				<p className={styles.perumahanCleoBlok}>indonesia</p>
      			</div>
      			<div className={styles.metodePembayaran}>Metod Pembayaran</div>
      			<div className={styles.cod}>Cod</div>
      			<div className={styles.cod1}>Cod</div>
      			<div className={styles.cod2}>Cod</div>
      			<div className={styles.cod3}>Cod</div>
      			<div className={styles.masker2}>Masker</div>
      			<div className={styles.agustus20212}>6 agustus 2021</div>
      			<div className={styles.rioSamdan}>rio samdan</div>
      			<div className={styles.sampaiDiTujuan}>Sampai di tujuan</div>
      			<Image className={styles.icon5} alt="" src={biru} />
      			<div className={styles.rp1930002}>Rp.193.000</div>
      			<div className={styles.perumahanCleoBlokContainer8}>
        				<p className={styles.perumahanCleoBlok}>Perumahan cleo blok c/3 makassar,sulsel,</p>
        				<p className={styles.perumahanCleoBlok}>indonesia</p>
      			</div>
      			<div className={styles.cod4}>Cod</div>
      			<div className={styles.aksi1}>Aksi</div>
      			<div className={styles.orderanChild2} />
    		</div>
            );
};

export default Orderan;
