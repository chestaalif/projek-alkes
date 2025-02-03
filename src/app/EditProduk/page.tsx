"use client";
import { FunctionComponent } from 'react';
import styles from '@/app/_components/EditProduk.module.css';
import Link from 'next/link';
import Image from 'next/image';
import sampah from '@/assets/tambahproduk/3976961 1.png'
import  kursiroda from '@/assets/tambahproduk/10573603 1.png';
import tensi from '@/assets/tambahproduk/3976961 1.png';
import alatcek from '@/assets/tambahproduk/101671512198820 1.png';
import maskerneo from '@/assets/tambahproduk/WhatsApp Image 2025-01-09 at 19.43.45_73b01c53 1.png';
import kertasusg from '@/assets/tambahproduk/WhatsApp_Image_2025-01-09_at_11.11.49_def170b3-removebg-preview 2.png';
import kamera from '@/assets/orderan/1687775 1.png';

const EditProduk:FunctionComponent = () => {
  	return (
    		<div className={styles.editProduk}>
      			<div className={styles.editProdukChild} />
      			<div className={styles.editProduk1}>Edit Produk</div>
      			<div className={styles.editProdukItem} />
      			<div className={styles.editProdukInner} />
				  <Link href="/TambahProduk">
      			<div className={styles.konfirmasi}>KONFIRMASI</div>
				  </Link>
      			<div className={styles.rectangleDiv} />
				<Link href="/TambahProduk">
      			<div className={styles.batalkan}>BATALKAN</div>
				</Link>
      			<div className={styles.alatCek3In1NescoParent}>
        				<div className={styles.alatCek3}>alat cek 3 in 1 nesco</div>
        				<div className={styles.groupChild} />n
        				<div className={styles.gambarProduk}>Gambar Produk</div>
        				<div className={styles.namaProduk}>Nama Produk</div>
        				<div className={styles.kursiRodaGea}>kursi roda gea</div>
        				<div className={styles.hargaProduk}>Harga Produk</div>
        				<div className={styles.aksi}>Aksi</div>
        				<div className={styles.stok}>Stok</div>
        				<div className={styles.rp100000}>Rp.100.000</div>
        				<div className={styles.groupItem} />
        				<div className={styles.div}>8</div>
        				<Image className={styles.icon} alt="" src={sampah} />
        				<div className={styles.groupInner} />
        				<Image className={styles.groupIcon} alt="" src={sampah} />
        				<div className={styles.rectangleWrapper}>
          					<div className={styles.groupChild1} />
        				</div>
        				<div className={styles.tensimeterManual}>tensimeter manual</div>
        				<div className={styles.rp65000}>Rp.65.000</div>
        				<div className={styles.div1}>15</div>
        				<div className={styles.maskerNeo}>masker neo</div>
        				<div className={styles.rectangleParent}>
          					<div className={styles.groupChild1} />
          					<div className={styles.rp10000}>Rp.10.000</div>
        				</div>
        				<div className={styles.rp129000}>Rp.129.000</div>
        				<div className={styles.div2}>148</div>
        				<Image className={styles.groupChild3} alt="" src={sampah} />
        				<div className={styles.div3}>2</div>
        				<Image className={styles.groupChild4} alt="" src={sampah} />
        				<Image className={styles.groupChild5} alt="" src={sampah} />
        				<div className={styles.rectangleContainer}>
          					<div className={styles.groupChild1} />
        				</div>
        				<div className={styles.kertasUsgSony}>kertas usg sony</div>
        				<div className={styles.rp650001}>Rp.65.000</div>
        				<div className={styles.div4}>15</div>
        				<Image className={styles.icon1} alt="" src={kertasusg} />
        				<Image className={styles.icon2} alt="" src="1687775 1.png" />
        				<Image className={styles.whatsappImage20250109At1} alt="" src={maskerneo} />
        				<Image className={styles.whatsappImage20250109At1Icon} alt="" src="WhatsApp_Image_2025-01-09_at_11.11.49_def170b3-removebg-preview 2.png" />
        				<Image className={styles.icon3} alt="" src="1687775 1.png" />
        				<Image className={styles.screenshot202501131114452} alt="" src="Screenshot 2025-01-13 111445 2.png" />
        				<Image className={styles.icon4} alt="" src="1687775 1.png" />
        				<Image className={styles.icon5} alt="" src="1687775 2.png" />
        				<Image className={styles.screenshot202501131125341} alt="" src="Screenshot 2025-01-13 112534 1.png" />
        				<Image className={styles.icon6} alt="" src="1687775 1.png" />
      			</div>
    		</div>);
};

export default EditProduk;
