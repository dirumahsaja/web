/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const IntroSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <IntroSection />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const IntroBlock = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              "Klik menu informasi untuk mengetahui layanan darurat / call center di daerahmu",
            image: `${baseUrl}img/emergency.png`,
            imageAlign: "left",
            title: "Status Darurat dimana-mana"
          }
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              "COVID-19 adalah penyakit baru yang gejalanya mirip dengan flu, disebabkan oleh virus yang bernama SARS-CoV-2. Banyak orang menyebut penyakit ini dengan nama corona/covid. " +
              "Meski gejala mirip dengan flu penyakit ini sangat berbeda. Hanya dalam waktu kurang dari 4 bulan virus ini telah menginfeksi ratusan ribu orang di seluruh dunia dan setiap hari ada orang yang meninggal karena penyakit ini",
            image: `${baseUrl}img/corona.png`,
            imageAlign: "right",
            title: "Apa sih COVID-19 itu?"
          }
        ]}
      </Block>
    );

    const ImportantThings = () => (
      <IntroBlock layout="threeColumn">
        {[
          {
            content:
              "Dengan tetap di rumah maka kita membantu menghambat penularan virus ke orang lain. Mempermudah kerja para tenaga kesehatan(dokter & perawat) menangani pasien yang telah tertular oleh virus, karena jumlah tenaga kesehatan sangat terbatas",
            image: `${baseUrl}img/stayathome.png`,
            imageAlign: "bottom",
            title: "Tetap di Rumah"
          },
          {
            content:
              "Jika harus keluar rumah, pastikan untuk jaga jarak dengan orang lain, kita tidak tahu siapa yang sudah tertular oleh virus, bahkan diri kita sendiri!",
            image: `${baseUrl}img/socialdistancing.png`,
            imageAlign: "bottom",
            title: "Jaga Jarak"
          },
          {
            content:
              "Terus ingatkan keluarga, saudara, tetangga, teman dekat, teman kerja untuk sebisa mungkin berada di rumah",
            image: `${baseUrl}img/broadcast.png`,
            imageAlign: "bottom",
            title: "Sebarkan"
          }
        ]}
      </IntroBlock>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <ImportantThings />
          <LearnHow />
          <TryOut />
        </div>
      </div>
    );
  }
}

module.exports = Index;
