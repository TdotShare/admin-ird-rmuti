import axios from 'axios'
import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
//import Head from 'next/head'
//import Image from 'next/image'
import { workType } from '../data/work'
//import styles from '../styles/Home.module.css'
import Atmosphere from './src/components/atmosphere'
import Breadcrumb from './src/components/breadcrumb'
import Footer from './src/components/footer'
import Header from './src/components/header'
import Ourwork from './src/components/ourwork'
import Team from './src/components/team'

const Home: NextPage<workType> = (props) => {

  const router = useRouter();
  const { lang } = router.query


  useEffect(() => {
    if(!lang)return
    console.log(lang)
  }, [router.query]);


  return (
    <>
      <Header lang={lang ? lang.toString() : "th" } />
      <Breadcrumb lang={lang ? lang.toString() : "th" } />
      <Ourwork lang={lang ? lang.toString() : "th" } workdata={props} />
      <Team lang={lang ? lang.toString() : "th" } />
      <Atmosphere />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: {
      data: [
        { "id": 1, "title": "แผนกงานบริหารงานทั่วไป", "detail" : "งานสารบรรณระดับหน่วยงาน , งานรายงานประจำปี , งานบุคลากร , ..."  },
        { "id": 2, "title": "งานกองทุนสนับสนุนการวิจัย", "detail" : "งานเบิกจ่ายกองทุน , งานสรุปบัญชีกองทุน , ..."  },
        { "id": 3, "title": "งานแผนและงบประมาณ", "detail" : "งานแผนยุทธศาสตร์ , งานแผนกลยุทธ์ , งานประชุม , งานการเงิน , ..."  },
        { "id": 4, "title": "งานพัสดุและครุภัณฑ์", "detail" : "งานจัดซื้อ / จัดจ้าง , งานครุภัณฑ์ , งานพัสดุ , ..."  },
        { "id": 5, "title": "งานโสตและสารสนเทศ", "detail" : "งาน IT Support , งานประชาสัมพันธ์ , งานโสตทัศนูปกรณ์ , ..."  },
        { "id": 6, "title": "งานวารสารวิชาการ", "detail" : "งานวารสาร มทร.อีสาน , Research and publication clinic , ..."  },
        { "id": 7, "title": "ศูนย์เครื่องมือวิจัย มทร.อีสาน", "detail" : "งานเอกสาร-จัดทำข้อมูล , งานฝึกอบรมการใช้เครื่องมือ , งานทดสอบตัวอย่าง"  },
      ]
    }
  }
}

export default Home
