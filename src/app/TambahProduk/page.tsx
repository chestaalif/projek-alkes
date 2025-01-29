"use client";
import { FunctionComponent, useCallback } from 'react';
import Link from 'next/link';
import styles from '../_components/TambahProduk.module.css';
import Image from 'next/image';
import tambah from '@/assets/tambahproduk/748113 1.png'
import search from '@/assets/tambahproduk/54481 1.png'
import sampah from '@/assets/tambahproduk/3976961 1.png'
import kanan from '@/assets/tambahproduk/271228 1.png'
import kiri from '@/assets/tambahproduk/271220 1.png'
import profiladmin from '@/assets/dashboard/iniadmin.png'
import icon1 from '@/assets/tambahproduk/10573603 1.png';
import icon2 from '@/assets/tambahproduk/3976961 1.png';
import icon5 from '@/assets/tambahproduk/101671512198820 1.png';
import icon6 from '@/assets/tambahproduk/WhatsApp Image 2025-01-09 at 19.43.45_73b01c53 1.png';
import icon7 from '@/assets/tambahproduk/WhatsApp_Image_2025-01-09_at_11.11.49_def170b3-removebg-preview 2.png';
import screenshot2 from '@/assets/tambahproduk/Screenshot 2025-01-13 112534 1.png';
import screenshot1 from '@/assets/tambahproduk/Screenshot 2025-01-13 111445 2.png';

const TambahProduk:FunctionComponent = () => {
  	return (
    		<div className={styles.tambahProduk}>
      			<div className={styles.tambahProdukChild} />
      			<div className={styles.tambahProdukItem} />
      			<b className={styles.alkesCom}>ALKES .COM</b>
      			<Image className={styles.icon} alt="" src={profiladmin} />
      			<div className={styles.iniadmin}>iniadmin</div>
				<Link href="/Dashboard">
      			<div className={styles.dashboard}>Dashboard</div>
				</Link>
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.tambahProduk1}>Tambah Produk</div>
      			</div>
      			<div className={styles.informasiProduk}>Informasi Produk</div>
      			<div className={styles.tambahProdukInner} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.tambahProduk2}>Tambah Produk</div>
      			<Image className={styles.icon1} alt="" src={tambah} />
      			<Image className={styles.icon2} alt="" src={kanan} />
      			<Image className={styles.icon3} alt="" src={kiri} />
      			<div className={styles.rectangleGroup}>
        				<div className={styles.groupItem} />
        				<div className={styles.div}>1</div>
        				<div className={styles.div1}>2</div>
        				<div className={styles.div2}>3</div>
      			</div>
      			<div className={styles.lineDiv} />
      			<div className={styles.tambahProdukChild1} />
      			<Image className={styles.icon4} alt="" src={search} />
      			<div className={styles.pencarianProdukmu}>Pencarian Produkmu</div>
      			<div className={styles.tambahProdukChild2} />
      			<div className={styles.tambahProdukChild3} />
      			<div className={styles.produkstokHabis}>Produk/stok Habis</div>
      			<div className={styles.kertasUsgSony}>kertas usg sony</div>
      			<div className={styles.tambahProdukChild4} />
      			<div className={styles.groupParent}>
        				<div className={styles.rectangleContainer}>
          					<div className={styles.groupInner} />
          					<Image className={styles.screenshot202501131114452} alt="" src={screenshot1} />
        				</div>
        				<div className={styles.tensimeterManual}>tensimeter manual</div>
      			</div>
      			<div className={styles.groupDiv}>
        				<div className={styles.groupInner} />
        				<div className={styles.tensimeterManual}>Masker neo</div>
      			</div>
				<Link href="/Orderan">
      			<div className={styles.orderan}>Orderan</div>
				</Link>
      			<div className={styles.tambahProdukChild5} />
      			<div className={styles.editProduk}>edit produk</div>
      			<Image className={styles.icon5} alt="" src={icon1} />
      			<div className={styles.alatCek3In1NescoParent}>
        				<div className={styles.alatCek3}>alat cek 3 in 1 nesco</div>
        				<div className={styles.groupChild2} />
        				<div className={styles.gambarProduk}>Gambar Produk</div>
        				<div className={styles.namaProduk}>Nama Produk</div>
        				<div className={styles.kursiRodaGea}>kursi roda gea</div>
        				<div className={styles.hargaProduk}>Harga Produk</div>
        				<div className={styles.aksi}>Aksi</div>
        				<div className={styles.stok}>Stok</div>
        				<div className={styles.rp100000}>Rp.100.000</div>
        				<div className={styles.groupChild3} />
        				<div className={styles.div3}>8</div>
        				<Image className={styles.icon6} alt="" src={icon2} />
        				<div className={styles.groupChild4} />
        				<Image className={styles.groupIcon} alt="" src={sampah}/>
        				<div className={styles.rectangleWrapper}>
          					<div className={styles.groupInner} />
        				</div>
        				<div className={styles.tensimeterManual1}>tensimeter manual</div>
        				<div className={styles.rp65000}>Rp.65.000</div>
        				<div className={styles.div4}>15</div>
        				<div className={styles.maskerNeo1}>masker neo</div>
        				<div className={styles.rectangleParent1}>
          					<div className={styles.groupInner} />
          					<div className={styles.rp10000}>Rp.10.000</div>
        				</div>
        				<div className={styles.rp129000}>Rp.129.000</div>
        				<div className={styles.div5}>148</div>
        				<Image className={styles.groupChild7} alt="" src={sampah}/>
        				<div className={styles.div6}>2</div>
        				<Image className={styles.groupChild8} alt="" src={sampah} />
        				<Image className={styles.groupChild9} alt="" src={sampah}/>
        				<div className={styles.rectangleFrame}>
          					<div className={styles.groupInner} />
        				</div>
        				<div className={styles.kertasUsgSony1}>kertas usg sony</div>
        				<div className={styles.rp650001}>Rp.65.000</div>
        				<div className={styles.div7}>15</div>
        				<Image className={styles.icon7} alt="" src={icon5} />
        				<Image className={styles.whatsappImage20250109At1} alt="" src={icon6} />
					<Image className={styles.whatsappImage20250109At1Icon} alt="" src={icon7} />
					<Image className={styles.screenshot2025011311144521} alt="" src={screenshot1} />
        				<Image className={styles.screenshot202501131125341} alt="" src={screenshot2} />
      			</div>
      			<Image className={styles.icon8} alt="" src={icon5} />
      			<Image className={styles.whatsappImage20250109At11} alt="" src={icon6} />
    		</div>);
};

export default TambahProduk;
