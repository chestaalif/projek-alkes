"use client"
import { FunctionComponent } from 'react';
import styles from '@/app/_components/TambahProdukkedua.module.css';
import Link from 'next/link';
import Image from 'next/image';
import sampah from '@/assets/tambahproduk/3976961 1.png'
import kertasusg from '@/assets/editproduk/ketasusg.png'
import kursiroda from '@/assets/editproduk/kursiroda.png'
import maskerneo from '@/assets/editproduk/maskerneo.png'
import tensi from '@/assets/editproduk/tensimanual.png'
import alatcek from '@/assets/editproduk/cekinnesco.png'
import kamera from '@/assets/orderan/1687775 1.png'
import kanan from '@/assets/tambahproduk/271228 1.png'
import kiri from '@/assets/tambahproduk/271220 1.png'
import search from '@/assets/tambahproduk/54481 1.png'

const TambahProdukpagedua:FunctionComponent = () => {
  	return (
    		<div className={styles.tambahProduk}>
      			<div className={styles.tambahProdukChild} />
      			<div className={styles.tambahProduk1}>Tambah Produk</div>
      			<div className={styles.tambahProdukItem} />
      			<Image className={styles.icon} alt="" src={kanan} />
      			<Image className={styles.icon1} alt="" src={kiri} />
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.div}>1</div>
        				<div className={styles.div1}>2</div>
        				<div className={styles.div2}>3</div>
      			</div>
      			<div className={styles.tambahProdukInner} />
      			<div className={styles.rectangleDiv} />
      			<Image className={styles.icon2} alt="" src={search} />
      			<input type='text' placeholder='Pencarian Produkmu' className={styles.pencarianProdukmu}/>
      			<div className={styles.tambahProdukChild1} />
      			<div className={styles.tambahProdukChild2} />
      			<div className={styles.tambahProduk2}>TAMBAH PRODUK</div>
      			<div className={styles.namaProduk}>Nama Produk</div>
      			<div className={styles.lineDiv} />
      			<div className={styles.hargaProduk}>Harga Produk</div>
      			<div className={styles.tambahProdukChild3} />
      			<div className={styles.stokYangTersedia}>Stok Yang Tersedia Sekarang</div>
      			<div className={styles.tambahProdukChild4} />
      			<div className={styles.tambahProdukChild5} />
      			<Image className={styles.icon3} alt="" src={kamera} />
      			<div className={styles.tambahkanFotoProduk}>Tambahkan Foto Produk</div>
      			<div className={styles.tambahProdukChild6} />
                <Link href="/TambahProduk">
      			<div className={styles.konfirmasi}>KONFIRMASI</div>
                </Link>
      			<div className={styles.tambahProdukChild7} />
                <Link href="/TambahProduk">
      			<div className={styles.batalkan}>BATALKAN</div>
                </Link>
      			<div className={styles.alatCek3}>alat cek 3 in 1 nesco</div>
      			<div className={styles.kursiRodaGea}>kursi roda gea</div>
      			<div className={styles.rectangleGroup}>
        				<div className={styles.groupItem} />
        				<div className={styles.gambarProduk}>Gambar Produk</div>
        				<div className={styles.namaProduk1}>Nama Produk</div>
        				<div className={styles.hargaProduk1}>Harga Produk</div>
        				<div className={styles.aksi}>Aksi</div>
        				<div className={styles.stok}>Stok</div>
      			</div>
      			<div className={styles.rp100000}>Rp.100.000</div>
      			<div className={styles.tambahProdukChild8} />
      			<div className={styles.div3}>8</div>
      			<Image className={styles.icon4} alt="" src={sampah} />
      			<div className={styles.tambahProdukChild9} />
      			<Image className={styles.groupIcon} alt="" src={sampah} />
      			<div className={styles.groupDiv}>
        				<div className={styles.groupInner} />
      			</div>
      			<div className={styles.tensimeterManual}>tensimeter manual</div>
      			<div className={styles.rp65000}>Rp.65.000</div>
      			<div className={styles.div4}>15</div>
      			<div className={styles.maskerNeo}>masker neo</div>
      			<div className={styles.rectangleContainer}>
        				<div className={styles.groupInner} />
        				<div className={styles.rp10000}>Rp.10.000</div>
      			</div>
      			<div className={styles.rp129000}>Rp.129.000</div>
      			<div className={styles.div5}>148</div>
      			<Image className={styles.tambahProdukChild10} alt="" src={sampah} />
      			<div className={styles.div6}>2</div>
      			<Image className={styles.tambahProdukChild11} alt="" src={sampah} />
      			<Image className={styles.tambahProdukChild12} alt="" src={sampah} />
      			<div className={styles.tambahProdukInner1}>
        				<div className={styles.groupInner} />
      			</div>
      			<div className={styles.kertasUsgSony}>kertas usg sony</div>
      			<div className={styles.rp650001}>Rp.65.000</div>
      			<div className={styles.div7}>15</div>
      			<Image className={styles.icon5} alt="" src={kertasusg} />
      			<Image className={styles.whatsappImage20250109At1} alt="" src={maskerneo} />
      			<Image className={styles.whatsappImage20250109At1Icon} alt="" src={kursiroda} />
      			<Image className={styles.screenshot202501131114452} alt="" src={tensi} />
      			<Image className={styles.screenshot202501131125341} alt="" src={alatcek} />
    		</div>);
};

export default TambahProdukpagedua;
