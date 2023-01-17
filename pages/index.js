import dynamic from "next/dynamic";
import { useEffect } from "react";
import { CodingSkills } from "../src/components/Skills";
import Testimonials from "../src/components/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});
const IndexOnePage = () => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Layout noHeader>
      <header className="header">
        <div className="head-top">
          {/* menu button */}

          {/* logo */}
          <div className="logo hover-masks-logo">
            <a href="dosya/Firat_dinc_CV.pdf">
              <span className="mask-lnk">
                Fırat <strong>Dinç</strong>
              </span>
              <span className="mask-lnk mask-lnk-hover">CV</span>
            </a>
          </div>
          {/* top menu */}
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <a href="#section-started">Anasayfa</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-about">Hakkımda</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-experience">Tecrübe</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-portfolio">Çalışmalarım</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-contacts">İletişim</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Wrapper */}
      <div className="wrapper">
        {/* Section Started */}
        <div className="section started" id="section-started">
          {/* background */}
          <div
            className="video-bg jarallax"
            style={{ backgroundImage: "url(images/back.png)" }}
          >
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
          {/* started content */}
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <h1 className="h-title">
                  Hoş Geldin Ben <strong>Fırat Dinç</strong> <br />
                  Ankarada Front-end Developer olarak çalışmaktayım
                  <br />
                </h1>
                <TypingAnimation extraClassName={"typed-subtitle"} />
                <span className="typed-subtitle" />
              </div>
            </div>
          </div>
          {/* mosue button */}
          <a href="#" className="mouse_btn" style={{ display: "none" }}>
            <span className="icon fas fa-chevron-down" />
          </a>
        </div>
        {/* Section About */}
        <div className="section about" id="section-about">
          {/* title */}
          <div className="title">
            <div className="title_inner">Hakkımda</div>
          </div>
          <div className="content content-box">
            {/* image */}
            <div className="image">
              <picture>
                {" "}
                <img src="images/firat_dinc.jpg" alt="" />
              </picture>
            </div>
            {/* desc */}
            <div className="desc">
              <p>
                Meslek lisesi bilişim bölümüyle atıldığım web yazılım ve tasarım
                sektörüne üniversitede almış olduğum eğitimlerle geliştirmeye
                devam ettim. 2016 yılında Matematik Bilgisayar bölümünden mezun
                oldum. Yazılımın aslında temel taşlarından bir tanesinin
                matematik olduğunu, algoritma yapısını kurabilmek için sayısal
                zekaya ihtiyaç olduğunu öğrendim. Eğitimime devam ederken
                freelance işler yapmaya başladım. İlk iş deneyimime 2017 yılının
                başlarında başladım. Web ve Grafik tasarımla başladığım iş
                sürecinde kendimi geliştirmeye devam ediyorum. Front End Web
                Developer haricinde Back End işlerine de yavaş yavaş adım atmış
                bulunmaktayım. Hedefim olan Full Stack Developer için emin
                adımlarla ilerliyorum. Gelişen teknolojileri elimdem geldiği
                kadarıyla takip ediyorum ve ona göre kendimi geliştirmeye
                çalışıyorum.
              </p>
              <div className="info-list">
                <ul>
                  <li>
                    <strong>Doğum Tarihi:</strong> 26/06/1993
                  </li>
                  <li>
                    <strong>Uyruk:</strong> Türkiye Cumhuriyeti
                  </li>
                  <li>
                    <strong>Freelance:</strong> Müsait
                  </li>
                  <li>
                    <strong>Konum:</strong> Etlik / Ankara
                  </li>
                  <li>
                    <strong>Telefon:</strong>{" "}
                    <a
                      style={{ textDecoration: "auto !important;" }}
                      href="tel: +905346376677"
                    >
                      +90 534 637 66 77
                    </a>
                  </li>
                  <li>
                    <strong>E-mail:</strong>{" "}
                    <a href="mailto:info@seniorjs.dev">info@seniorjs.dev</a>
                  </li>
                </ul>
              </div>
              <div className="bts">
                <a
                  href="dosya/Firat_dinc_CV.pdf"
                  className="btn hover-animated"
                >
                  <span className="circle" />
                  <span className="lnk">CV İndir</span>
                </a>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Service */}
        <div className="section service" id="section-services">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Genel Niteliklerim</div>
            </div>
            {/* service items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-code" />
                  </div>
                  <div className="name">Web Tasarım Ve Kodlama</div>
                  <div className="text">
                    Html, Css, Javascript - React - Next.js ile web kodlama
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-ad" />
                  </div>
                  <div className="name">Digital Pazarlama</div>
                  <div className="text">
                    Google Ads ve anahtar kelimeler ile pazarlama
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-server" />
                  </div>
                  <div className="name">Sunucu Sistemleri</div>
                  <div className="text">
                    Sunucu kurulumu ,mail kurulumu ve hosting domain takibi
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-camera" />
                  </div>
                  <div className="name">Sosyal Medya</div>
                  <div className="text">
                    Facebook, Instagram ve Twitter olmak üzere sosyal medya
                    çalışmaları
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-pencil-alt" />
                  </div>
                  <div className="name">Photoshop -Illustrator </div>
                  <div className="text">
                    Web sitelerinin içerik tasarımı, mockup çalışmaları ve
                    Vektörel, büyük boyutlu kaliteli tasarımlar
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Pricing */}

        {/* Section Resume */}
        <div className="section resume" id="section-experience">
          <div className="content">
            <div className="cols">
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">İş Deneyimim</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box active">
                    <div className="name">Frontend Web Developer</div>
                    <div>Guven Future</div>
                    <div className="date">Kasım 2021 - </div>

                    <div className="text">
                      <ul>
                        <li>
                          HTML5, CSS3 (LESS veya SASS), JavaScript/TypeScript,
                          Wordpress, Bootstrap ile Web tasarım geliştirilmesi
                        </li>
                        <br />
                        <li>React kütüphanesi ile web geliştirme</li>
                        <br />
                        <li>Next.js ile ön yüz tasarlama</li>
                        <br />
                        <li>PHP Laravel web site düzenlenmesi</li>
                        <br />
                        <li>Kullanıcı girişli üye ve başvuru sistemi yapımı</li>
                        <br />
                        <li>Javascript web sayfa çalışmaları</li>
                        <br />
                        <li>
                          Mobil uygulamanın web arayüz çalışmaları ve dinamik
                          sistemlerinin apiler ile entegrasyonu
                        </li>
                        <br />
                        <li>Bootstrap one page site hazırlama</li>
                        <br />
                        <li>MySQL veri tabanı takibi ve düzenlemeleri</li>
                        <br />
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item content-box active">
                    <div className="name">Web Developer</div>
                    <div>Tusdata</div>
                    <div className="date">Şubat 2019 - Kasım 2021</div>

                    <div className="text">
                      <ul>
                        <li>E - Ticaret site tasarlaması ve takip işlemleri</li>
                        <br />
                        <li>
                          HTML, CSS , JavaScript, PHP ve Wordpress ile Web
                          Tasarım Geliştirilmesi
                        </li>
                        <br />
                        <li>Front end Web Developer</li>
                        <br />
                        <li>Broşür tasarımı ve düzenlenme</li>
                        <br />
                        <li>
                          Photoshop, Illustrator, In Design, Premiere, After
                          Effect kullanımı
                        </li>
                        <br />
                        <li>Vektörel çalışmalar</li>
                        <br />
                        <li>
                          İstatistik ve analiz düzenlenmesi, veri tabanı analizi
                        </li>
                        <br />
                        <li>Reklam çalışmaları ve sosyal medya uzmanlığı</li>
                        <br />
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item content-box active">
                    <div className="name">Frontend Web Developer</div>
                    <div>NanoMagnetics Instruments</div>
                    <div className="date">Mart 2018 - Şubat 2019</div>

                    <div className="text">
                      <ul>
                        <li>Front end Web Developer</li>
                        <br />
                        <li>
                          HTML, CSS , PHP ve Wordpress ile web tasarım
                          geliştirilmesi
                        </li>
                        <br />
                        <li>Katalog ve broşür tasarlama</li>
                        <br />
                        <li>
                          Photoshop, Illustrator, In Design, Premiere, After
                          Effect kullanımı, Vektörel Çalışmalar
                        </li>
                        <br />
                        <li>Google adwords, analytics yönetimi</li>
                        <br />
                        <li>
                          Bilgisayar ve çevre birimlerinin kurulum,
                          konfigürasyon ve ayarları ,hata giderme işlemlerinin
                          sağlanması
                        </li>
                        <br />
                        <li>
                          Windows işletim sistemleri ve MS Office kurulumlarının
                          yapılması
                        </li>
                        <br />
                        <li>
                          Active Directory, Antivirüs Programları, Outlook
                          uygulamaları kurulum ve sorun gidertme{" "}
                        </li>
                        <br />
                        <li>
                          TCP/IP, LAN, WAN vb. kurulum işlemleri ve network
                          sorunlarını gidermek (Switch, Access Point){" "}
                        </li>
                        <br />
                        <li>
                          Sanal sunucular kurulum ve takip işleri
                          (Vmware,Hyper-V{" "}
                        </li>
                        <br />
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item content-box active">
                    <div className="name">Web And Social Media Designer</div>
                    <div>Küresel Grup</div>
                    <div className="date">Mayıs 2017 - Mart 2018</div>

                    <div className="text">
                      <ul>
                        <li>Front-end web developer</li>
                        <br />
                        <li>Sosyal medya uzmanlığı</li>
                        <br />
                        <li>
                          Facebook,Instagram ve Youtube Reklam Yöneticiliği
                        </li>
                        <br />
                        <li>Google Adwords, Analytics yönetimi</li>
                        <br />
                        <li>Grafik tasarım</li>
                        <br />
                        <li>Katalog ve broşür tasarlama</li>
                        <br />
                        <li>Photoshop, Illustrator, In Design kullanımı</li>
                        <br />
                        <li>Vektörel çalışmalar</li>
                        <br />
                        <li>Seo Optimizasyon</li>
                        <br />
                      </ul>
                    </div>
                  </div>
                  <div className="resume-item content-box active">
                    <div className="name">Web Developer - Stajyer</div>
                    <div>ESOGÜ Bilgi İşlem</div>
                    <div className="date">Haziran 2015 - Eylül 2015</div>

                    <div className="text">
                      <ul>
                        <li>
                          Eskişehir Osmanganzi Üniversitesi Bilgi İşlem Daire
                          Başkanlığı - ASP.NET ile Web Tasarım
                        </li>
                        <br />
                        <li>Asp .net core ile sıfırdan web sitesi tasarımı</li>
                        <br />
                        <li>Web sitesi üzerinde veritabanı yönetimi</li>
                        <br />
                        <li>
                          E - Ticaret alt yapısı ile ürün satışı paneli yapımı{" "}
                        </li>
                        <br />
                        <li>Adobe Dreamweaver ve Photoshop kullanımı</li>
                        <br />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Eğitim Hayatım</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box">
                    <div className="name">
                      Eskişehir Osmangazi Üniversitesi <br /> Matematik
                      Bilgisayar
                    </div>
                    <div className="date">2012 - 2016</div>
                    <div className="text">
                      {" "}
                      <br />
                      2012 yılında Eskişehir Osmangazi Üniversitesinde Matematik
                      Bilgisayar bölümüne başladım. Lisans eğitimim boyunca C++
                      , C# , Java , Matlab , Php , Html, Css , Mysql , Java ,
                      Android Studio, Donanım , Veri Yapıları ve Algoritmalar ,
                      Veri Madenciliği ve Güvenliği eğitimleri aldım. Üniversite
                      boyunca freelance işler yaptım. Eğitim sürecimde çeşitli
                      seminerlere ve kurslara katılıp bir çoğunda yönetim
                      ekibinde rol aldım. Tez projemi java kullanım rehberini
                      yaparak tamamladım. 2016 yılında mezun oldum.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="name">
                      Keçiören Anadolu Teknik Lisesi <br />
                      Bilişim Teknolojileri
                    </div>
                    <div className="date">2007 - 2011</div>

                    <div className="text">
                      <br />
                      2007 yılında başlamış olduğum Anadolu Teknik Lisesinde
                      Bilişim alanında eğitimler gördüm. Html, css , mysql
                      alanlarını Adobe programları (Dreamweaver, Illustrator,
                      Photoshop,Flash Professional) yardımıyla kullanarak
                      yazılıma dökmeyi ve web sitesi çıkartmayı öğrendim. Ekstra
                      olarak algoritma geliştirme, veri tabanı yönetimi ve
                      programlama dersleri de aldım. 2011 yılında mezun oldum
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md"></div>
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <br />
                  <br />
                  <div className="title_inner">Seminerler ve Kurslar</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box">
                    <div className="name">BLOCKCHAIN 101</div>
                    <div className="text">
                      AKBANK ve E-Bursum işbirliği ile düzenenlenen Blockchain
                      ve yazılımsal geliştirmeler adlı etkinlik
                      <br />
                      <br />* Yapılan etkinliğin katılım belgesi mevcuttur.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="name">
                      Boğaziçi DataCamp 2020 Veri Bilimi Zirvesi
                    </div>
                    <div className="text">
                      Compec - Boğaziçi Üniversitesi Bilişim Kulübü
                      <br />
                      <br />* Yapılan etkinliğin katılım belgesi mevcuttur.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="name">ETZ 2017</div>
                    <div className="text">
                      Fatih Projesi Eğitim Teknolojileri Zirvesi
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="name">FİNANS AKADEMİ 14</div>
                    <div className="text">
                      ESOGÜ MATEMATİK BİLGİSAYAR kulübünün yönetim kurulu
                      ekibinde bulunduğum sürede düzenlemiş olduğum etkinlik - 4
                      <br /> <br />
                      (Firmalar : Oracle, Merkez Bankası, SDK )<br />
                      <br />* Bu kulüpte yapılan bir çok etkinliğin katılım
                      belgeleri mevcuttur.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="name">OYUNA GELDİK</div>
                    <div className="text">
                      ESOGÜ MATEMATİK BİLGİSAYAR kulübünün yönetim kurulu
                      ekibinde bulunduğum sürede düzenlemiş olduğum etkinlik - 3
                      <br /> <br />
                      (Firmalar : Apple, Markoyun, Mobile Manager )<br />
                      <br />* Bu kulüpte yapılan bir çok etkinliğin katılım
                      belgeleri mevcuttur.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="name">KARİYER ÇANTANI DOLDUR</div>
                    <div className="text">
                      ESOGÜ MATEMATİK BİLGİSAYAR kulübünün yönetim kurulu
                      ekibinde bulunduğum sürede düzenlemiş olduğum etkinlik - 2
                      <br /> <br />
                      (Katılımcılar : Hakan Mengüç, İlyas Teker, Fırat Çakır,
                      Mert Sarıca)
                      <br />
                      <br />* Bu kulüpte yapılan bir çok etkinliğin katılım
                      belgeleri mevcuttur.
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="name">BİLİŞİM ve KARİYER 2012</div>
                    <div className="text">
                      ESOGÜ MATEMATİK BİLGİSAYAR kulübünün yönetim kurulu
                      ekibinde bulunduğum sürede düzenlemiş olduğum etkinlik - 1
                      <br /> <br />
                      (Firmalar : Microsoft, BRIGHTWELL, IPROSPECT, ASELSAN,
                      Finansbank)
                      <br />
                      <br />* Bu kulüpte yapılan bir çok etkinliğin katılım
                      belgeleri mevcuttur.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Design Skills */}

        {/* <div className="section skills" id="section-skills">
          <div className="content">
         
            <div className="title">
              <div className="title_inner">Design Skills</div>
            </div>
      
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">Web Design</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "80%" }}>
                      <span className="percent">80%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Illustrations</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Photoshop</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "95%" }}>
                      <span className="percent">95%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Graphic Design</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "85%" }}>
                      <span className="percent">85%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* Section Languages Skills */}

        {/*  <div className="section skills" id="section-skills-lang">
          <div className="content">
           
            <div className="title">
              <div className="title_inner">Languages Skills</div>
            </div>
          
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">German</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Italian</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "55%" }}>
                      <span className="percent">55%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">French</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }}>
                      <span className="percent">85%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* Section Coding Skills */}
        <CodingSkills />

        {/* Section Testimonials */}
        {/* <Testimonials />*/}
        {/* Section Clients */}

        {/* Section Custom Text */}
        {/* <div className="section custom-text" id="section-custom-text">
          <div className="content">
            <div className="title">
              <div className="title_inner">Custom Text</div>
            </div>

            <div className="content-box">
              <div className="single-post-text">
                <p>
                  Now there is more fashion. There is no so-called trends. Now
                  chase after anything not necessary — nor for fashionable color
                  nor the shape, nor for style. Think about the content that you
                  want to invest in a created object, and only then will form.
                  The thing is your spirit. A spirit unlike forms hard copy.
                </p>
                <p>
                  Here choose yourself like that, without any looking back, do
                  your personal, home, small fashion, and all will be well.
                </p>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>*/}

        <div className="section works" id="section-portfolio">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Portfolyo </div>
            </div>
            <ItemIsotope />
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Info */}
        <div className="section contacts" id="section-contacts">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">İletişim</div>
            </div>
            {/* contacts items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-phone" />
                  </div>
                  <div className="name">Telefon</div>
                  <div className="text">
                    <a
                      style={{ textDecoration: "auto !important;" }}
                      href="tel: +905346376677"
                    >
                      +90 534 637 66 77
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="name">Email</div>
                  <div className="text">
                    <a href="mailto:info@seniorjs.dev">info@seniorjs.dev</a>
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="name">Adres</div>
                  <div className="text">Etlik / Ankara</div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Form */}
        <div className="section contacts" id="section-contacts-form">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">İletişim Formu</div>
            </div>
            {/* form */}
            <div className="contact_form content-box">
              <form id="cform" method="post">
                <div className="group-val">
                  <input type="text" name="name" placeholder="İsim Soyisim" />
                </div>
                <div className="group-val">
                  <input type="email" name="email" placeholder="Email Adresi" />
                </div>
                <div className="group-val ct-gr">
                  <textarea
                    name="message"
                    placeholder="Mesaj"
                    defaultValue={""}
                  />
                </div>
                <div className="group-bts">
                  <button type="submit" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">Gönder</span>
                  </button>
                </div>
              </form>
              <div className="alert-success">
                <p>Thanks, your message is sent successfully.</p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
        {/* Section Started */}
      </div>
    </Layout>
  );
};
export default IndexOnePage;
