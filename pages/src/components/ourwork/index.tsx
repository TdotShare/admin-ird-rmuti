import type { NextPage } from 'next'
import { titleConfig } from '../../../../config/title'

const Ourwork: NextPage = () => {
    return (
        <section className="whats-included">
            <div className="whats-included__shape">
                <img src="/template/images/whats-included/bg-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section__title">
                            {/* <h3>การทำงาน</h3> */}
                            <h2>งานของเรา</h2>
                            <p>
                                งานของฝ่าย {titleConfig.NameFull} มีดังนี้
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="whats-included__item wow fadeInUp" data-wow-delay=".2s">
                            <div className="whats-included__item__icon">
                                <img className="bg-shape" src="/template/images/whats-included/bg-icon.png" alt="img" />
                                <img className="svg-icon" src="/template/images/whats-included/3.svg" alt="img" />
                            </div>
                            <div className="whats-included__item__text">
                                <h2 className="whats-included__item__title">แผนกงานบริหารงานทั่วไป</h2>
                                <p className="whats-included__item__desc">
                                งานสารบรรณระดับหน่วยงาน , งานรายงานประจำปี , งานบุคลากร , งานเลขานุการ , ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="whats-included__item wow fadeInUp" data-wow-delay=".2s">
                            <div className="whats-included__item__icon">
                                <img className="bg-shape" src="/template/images/whats-included/bg-icon.png" alt="img" />
                                <img className="svg-icon" src="/template/images/whats-included/3.svg" alt="img" />
                            </div>
                            <div className="whats-included__item__text">
                                <h2 className="whats-included__item__title">งานกองทุนสนับสนุนการวิจัย</h2>
                                <p className="whats-included__item__desc">
                                    งานเบิกจ่ายกองทุน , งานสรุปบัญชีกองทุน , ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="whats-included__item wow fadeInUp" data-wow-delay=".2s">
                            <div className="whats-included__item__icon">
                                <img className="bg-shape" src="/template/images/whats-included/bg-icon.png" alt="img" />
                                <img className="svg-icon" src="/template/images/whats-included/3.svg" alt="img" />
                            </div>
                            <div className="whats-included__item__text">
                                <h2 className="whats-included__item__title">งานแผนและงบประมาณ</h2>
                                <p className="whats-included__item__desc">
                                    งานแผนยุทธศาสตร์ , งานแผนกลยุทธ์ , งานประชุม , งานการเงิน , ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="whats-included__item wow fadeInUp" data-wow-delay=".2s">
                            <div className="whats-included__item__icon">
                                <img className="bg-shape" src="/template/images/whats-included/bg-icon.png" alt="img" />
                                <img className="svg-icon" src="/template/images/whats-included/3.svg" alt="img" />
                            </div>
                            <div className="whats-included__item__text">
                                <h2 className="whats-included__item__title">งานพัสดุและครุภัณฑ์</h2>
                                <p className="whats-included__item__desc">
                                    งานจัดซื้อ / จัดจ้าง , งานครุภัณฑ์ , งานพัสดุ , ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="whats-included__item wow fadeInUp" data-wow-delay=".2s">
                            <div className="whats-included__item__icon">
                                <img className="bg-shape" src="/template/images/whats-included/bg-icon.png" alt="img" />
                                <img className="svg-icon" src="/template/images/whats-included/3.svg" alt="img" />
                            </div>
                            <div className="whats-included__item__text">
                                <h2 className="whats-included__item__title">งานโสตและสารสนเทศ</h2>
                                <p className="whats-included__item__desc">
                                    งาน IT Support , งานประชาสัมพันธ์ , งานโสตทัศนูปกรณ์ , ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="whats-included__item wow fadeInUp" data-wow-delay=".2s">
                            <div className="whats-included__item__icon">
                                <img className="bg-shape" src="/template/images/whats-included/bg-icon.png" alt="img" />
                                <img className="svg-icon" src="/template/images/whats-included/3.svg" alt="img" />
                            </div>
                            <div className="whats-included__item__text">
                                <h2 className="whats-included__item__title">งานวารสารวิชาการ</h2>
                                <p className="whats-included__item__desc">
                                    งานวารสาร มทร.อีสาน , Research and publication clinic , ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="whats-included__item wow fadeInUp" data-wow-delay=".2s">
                            <div className="whats-included__item__icon">
                                <img className="bg-shape" src="/template/images/whats-included/bg-icon.png" alt="img" />
                                <img className="svg-icon" src="/template/images/whats-included/3.svg" alt="img" />
                            </div>
                            <div className="whats-included__item__text">
                                <h2 className="whats-included__item__title">ศูนย์เครื่องมือวิจัย มทร.อีสาน</h2>
                                <p className="whats-included__item__desc">
                                    งานเอกสาร-จัดทำข้อมูล , งานฝึกอบรมการใช้เครื่องมือ , งานทดสอบตัวอย่าง
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Ourwork