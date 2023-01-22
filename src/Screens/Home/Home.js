import React from "react";
import Nav from "react-bootstrap/Nav";
import MultiItemCarousel from "../../Components/Carousels/MultiItemCarousel";
import MultiItemSideCarousel from "../../Components/Carousels/MultiItemSideCarousel";
import hero from "../../Images/hero.png";
import thumbnail01 from "../../Images/mov_bbb.mp4";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import Card from "react-bootstrap/Card";
import man from "../../Images/man.png";
import woman from "../../Images/woman.png";
import unlimited from "../../Images/unlimited.png";
import MultiItemCarouselscene from "../../Components/Carousels/MultiItemCarouselscene";
import IMG1 from "../../Images/IMG4.png";
import IMG2 from "../../Images/IMG5.png";
import IMG3 from "../../Images/IMG6.png";
import check from "../../Images/check.png";
import hero2 from "../../Images/home-bg.png";
import logoi1 from "../../logos/logo.png";
import logoi2 from "../../logos/logo2.png";
import logoi3 from "../../logos/logo3.png";
import logoi4 from "../../logos/logo4.png";
import logoi5 from "../../logos/logo5.png";
import logoi6 from "../../logos/logo6.png";
import icon1 from "../../Images/one-icon.png";
import icon2 from "../../Images/videoicon.png";
import icon3 from "../../Images/mp3.png";

import "./Home.css";
import "../../App.css";
import "./responsive.css";
import Layout from "../../Layouts/Layout";
import VideoThumbnail from "react-thumbnail-player";

const Home = () => {
  const data1 = [
    "Audio Optimization",
    "Color Correction",
    "Unlimited Revisions",
    "Clips pulled for social media",
    "Thumbnail Creation for YouTube",
    "Intro & Outros added",
    "Lower thirds animations & transitions",
    "Captions",
  ];
  const data2 = [
    " Audio Cleaning & Removing mistakes & filler words(ums, ahs) ",
    "Voice balancing for even playback",
    "Removal of unwanted sound or background noise",
    "Intro & Outros added",
    "Segments & sponsored messages",
    "Consistent sounding podcast for good listening experience",
  ];
  const data3 = [
    "Launch Plan & Podcast Goals Consultation",
    "Equipment Selection & Recording Consultation",
    " Stunning Cover Artwork Created",
    "Podcast Host Setup",
    "4 Episodes Professionally Edited",
    "Show Notes with Resource Links & Timestamps",
    "Professional Show Intro with Music",
    "Video or Audio Episode Trailer",
    "Social Media Promotional Assets",
  ];
  const logos = [logoi1, logoi2, logoi3, logoi4, logoi5, logoi6];
  return (
    <Layout>
      <div className="home">
        <div className="home-section1 ">
          <div id="titlebar" className="container text-center">
            <h1>
              Unlimited
              <br />
              Podcast{" "}
              <span className="theme-primary-color shadowColor"> Editing</span>
            </h1>
            <p>
              We're your podcast editing partner!
              <br />
              Record more and let us handle the rest. Get ready to save time
              <br />
              and grow your show!
            </p>
          </div>
          <div>
            <Nav className="justify-content-center main-button">
              <Nav.Link
                className="getStartedButton theme-primary text-white"
                href="#getstarted"
              >
                GET STARTED
              </Nav.Link>
            </Nav>
          </div>

          <div>
            <div className="first-section text-center animate-div">
              <div className="animate">
                <img src={hero2} alt="hero" />
              </div>
              <div style={{ zIndex: "3" }}>
                <img src={hero} alt="hero" />
              </div>
            </div>
          </div>
          <div className="home-logos text-center">
            {logos.map((item) => {
              return (
                <div className="Logo-img">
                  <img src={item} />
                </div>
              );
            })}{" "}
          </div>

          <div className="second-section">
            <div className="container text-center getstart ">
              <p id="selectbtn" className="getstart-heading  ">
                <b>SELECT A PRODUCT TO</b>
                <span className="theme-primary-color">GET STARTED</span>
              </p>
            </div>

            <section id="services-slider-sec">
              <div className="container">
                <MultiItemCarousel />
              </div>
            </section>

            <section id="trusted-sec">
              <div className="container-fluid">
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "-23px",
                    marginLeft: "-30px",
                  }}
                >
                  {/* <div className="col-md-1"></div> */}
                  <div className="col-md-5 geton">
                    <div id="geton" className="trst-txt-div spacing">
                      <p>
                        <span className="theme-primary-color">30</span> Day
                        Satisfaction Guarantee
                      </p>
                      <h3>
                        Get On-Demand Episode Editing For a Flat Monthly Rate
                      </h3>
                      <p className="gap">
                        Instantly hire a team of{" "}
                        <span className="theme-primary-color">
                          professional editors, writers, designers
                        </span>{" "}
                        for your podcast. The #1 place for your podcasting
                        needs. Unlimited orders and revisions. Pay monthly and
                        cancel anytime.
                      </p>
                      <p>
                        No Contracts. Just{" "}
                        <span className="theme-primary-color">
                          Fast Service.
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* <div className="col-md-1"></div> */}

                  <div className="carousel2 col-md-5 spacing">
                    <MultiItemSideCarousel />
                  </div>
                </div>
              </div>
            </section>
            <section id="mdmobdiv" className="about-us1 text-center ">
              <div className="container hera-What-cont">
                <div className="row ">
                  <div id="vidtextmob" className="txt-div">
                    <h4 className="text-center">1,000+ satisfied parents</h4>
                    <h2 className="text-center">
                      Hear What Our Families <br /> Say{" "}
                      <span className="theme-primary-color">About Us</span>
                    </h2>
                    <p className="text-center">
                      Our editors will ensure your episodes sound professional.
                      Audio cleaning, multitrack syncing, EQ, voice balancing,
                      noise reduction are just some of the important &amp;
                      necessary techniques for a good listening experience. We
                      want your podcast to sound as good as the best podcasters
                      out there.
                    </p>
                  </div>

                  <div className=" trio-img d-flex text-center">
                    <section
                      className="d-flex videomb-div"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      
                      <video
                        id="videomb-div1"
                        style={{
                          position: "relative",
                          width: "30%",
                          marginLeft: "3%",
                          borderRadius: "5%",
                        }}
                        height="650px"
                        loop
                        autoPlay="true"
                        muted="false"
                        preload="none"
                        poster="http://video-js.zencoder.com/oceans-clip.jpg"
                        data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'
                      >
                        <source
                          src="https://media.videoask.com/transcoded/5e4d3796-3e3e-4538-a0a6-7f49888f6bc5/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjVlNGQzNzk2LTNlM2UtNDUzOC1hMGE2LTdmNDk4ODhmNmJjNSIsImV4cCI6MTY3Mzc5NDE2N30.hzXLr8eQ5p1tRW0cShAf_U9ECivb6DwxM5TlGCiepRcON_KVX_177KniBTUHaprSwYwAMoFfLXTUBI8dUwNDrRu9wacbirAeN-OOR6BxX0XIyrBw9v5d0I2u1ocUO5Ddt3nM4bm9MD4b9EGsCuMdSkxShTWop-wTi4JT8qqziXpTt7WTcFWzk9PNofBSBJnOIAo7FIHfYUJTILS7aWcNWmwsw2Um1eYRYqrdHegoN2IwhgycrtDvyhZ-vpYqo5wYlJngX3Ab2NBcwOvLuht03P5vjSbaPKpOVMomLrXVLhVaphQWPkF4J1NHFxqtv4HsSaSkuVQlH3VNeQI-Spdx8mptPZ-vrDSZhpfN8pok_m_REMUYGgjE6zz942kmAK7y5V2tCSy8owpEkOXZFvAsARA2QwSdVydLKgOUnvIJcfmFFVFnWbmtczS3gsmXPJExIg9CCUefHwGi7ea5c19yNhWhOH0Q8NghwKoyBKhT3dQOOX6KDQah41b4JNtf4a91c-Mg4rInaJHa5gxBFkj-cXibovRLUIMd4AQ6IUyaYOHfOGPhMhrI_ZtJ3hsqg3LdtEpBdwlJ1X4Q8qVwZCdIrR8TkRzGrVSeUY_rXUAjVoNueJJkbqRlc4gmsdpj8NmLMAAyslByuKDBGsEcVwinBMVE_cuYYIqz-vzgOyaY13c"
                          type="video/mp4"
                        />
                      </video>
                      <div className="hoverbtn"></div>
                      
                      <video
                        id="videomb-div1"
                        style={{
                          width: "30%",
                          marginLeft: "3%",
                          borderRadius: "5%",
                        }}
                        height="650px"
                        loop
                        autoPlay="true"
                        muted="false"
                        preload="none"
                        poster="http://video-js.zencoder.com/oceans-clip.jpg"
                        data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'
                      >
                        <source
                          src="https://media.videoask.com/transcoded/9d218fd7-33a9-42b8-926c-39cc25fd9f7f/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjlkMjE4ZmQ3LTMzYTktNDJiOC05MjZjLTM5Y2MyNWZkOWY3ZiIsImV4cCI6MTY3Mzc3ODI4MH0.Y51GZXc19RzRsN6_gxdsG0losWOniQMRtH_lYboCfmaZZTgMwUXSKB98yhOYkZGKdrYOYtYmGmyzmwC6MdVmJR80O-pt5ggT3v4V4widWSxwNXXwyYu7S1Z4LwkU0SluzO2vVtR9qnyfAtfaZZSsUmiXDWiV28HngRXP_0le2x0tA5_VUacZqtYpD_pyEI1hPgRmu1H1B0sLcWBSkvrqZQGgijns2wZottV416oamDQkM91pSHTafVxsuMDldXGWMJsdz0wuT5TGSXlY_ybh9SuuNQsCCmkxuY8U1DJGx-G5JlBdBm2fGYzJ5wHmfPBtLrm7XMkCVoOXMAFhpJmL-KMwNHWNJOZp0-BLrwyDT7_diM4LeKdhWfp5G3VueqMMwD5ScSWj8B_XZYMev1pMcpwt-o8c3u-MijdMZJTqil4Eik9C6_84EqD53RQA-7I37eeBH-3G3Yc985YgKpdmhEekakJSjygS_xjnFrRLa46wbvQLIpeV4QxYXQ7aLW1S7tNPXjbeXJgWNG3NhcriY5ZUhqbUglrfYc8HtUOrrIzRRXB5S-FVprk87EYiPlNudCQ7-PZ-EEYv2_gF6SLKA_jH0U8T7b0nduffZiXtMradwtI2gpqK0QJ_6UiVloRKelC-3kvguQFMq_edZfQSnvMJvJ7QiFf-u3XK61Y4yjw"
                          type="video/mp4"
                        />
                      </video>
                      <div className="hoverbtn1"></div>
                      

                      <video
                        id="videomb-div1"
                        style={{
                          width: "30%",
                          marginLeft: "3%",
                          borderRadius: "5%",
                        }}
                        height="650px"
                        loop
                        autoPlay="true"
                        muted="false"
                        preload="none"
                        poster="http://video-js.zencoder.com/oceans-clip.jpg"
                        data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'
                      >
                        <source
                          src="https://media.videoask.com/transcoded/df9a5719-2d6e-4474-b31e-9357f63bf5f5/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImRmOWE1NzE5LTJkNmUtNDQ3NC1iMzFlLTkzNTdmNjNiZjVmNSIsImV4cCI6MTY3Mzc5MDQ5NH0.Id7Jwepk0PxPFVg5Tk6XQEQkrRu5mlRBKhIt7J7PqXIrRkmQ6XfJQnNmdKMllql5NrgL5EsOOV-72pNcWfc0yMonyIdYGuWxP2my_fSZLMSCV1oKGSCaq6a_5NmZci4N4xV2gY1kOrgS6hoX4s5vtzDA4aZYt3DrRwcJU1MHZlXWeCw-3s3PNS1VYbyFM3sD7qTgUzAB0FX13HcfWeUPjNuWVJrisAHXSFNYTxZA4B2ncftXIVtWV4vYsS6cV0gkyYO0SFA_m8dMNGj8XdSaw4BdHEEKOjHui2sggi4qhpCjNx6vJt7y7FWPGa1RUjb4ymhEcCZQAStxxhklFcm_17rkVzxE-3k6LqdEadprLzQdjKpaAAcE2sjXZyJ6YqtNVVGUakbfkfRCnqdOfDlkNig5tJuLhEmBUuXv3IADvNdjsqqvqbpSEGDHDvrh3RATnvrQ1HL8zBx2l8hdJOy9Q6XtDXNVsChi2_IwcXk366NvkfLKw9aGlQwm5L71SI_41LLTiB1izxjNv6tzOETNnpSnmiksBOBq05Xihub945bG39VkfBO-FcLiDgAntqr_X9ozMtOSoA3liysQY3iwPvzpo_qwg8x59vFksL6PTu0g1M1VP1rUBZOGtGlx0Qb2Wn8BWVlspRias1oE86ojMOJb3QGBJFvpLRQj5-LBjY8"
                          type="video/mp4"
                        />
                      </video>
                      <div className="hoverbtn2"></div>
                      {/* <div
                        id="videomb-div1"
                        style={{
                          transform: "scale(0.9, 1.7)",
                          marginTop: "150px",

                          marginLeft: "-29%",
                        }}
                      >
                        <VideoThumbnail
                          title=""
                          message=""
                          videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
                          width={600}
                          height={120}
                        />
                      </div> */}
                      {/* <div
                        id="videomb-div2"
                        style={{
                          transform: "scale(0.9, 1.7)",
                          marginTop: "150px",
                          // marginLeft: "-130px",
                        }}
                      >
                        <VideoThumbnail
                          title=""
                          message=""
                          videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
                          width={600}
                          height={120}
                        />
                      </div> */}
                      {/* <div
                        id="videomb-div2"
                        style={{
                          transform: "scale(0.9, 1.7)",
                          marginTop: "150px",
                          // marginLeft: "-130px",
                        }}
                      >
                        <VideoThumbnail
                          title=""
                          message=""
                          videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
                          width={600}
                          height={120}
                        />
                      </div> */}
                    </section>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="home-section2">
          <div className=" container ">
            <div className=" row">
              <div className="txt-div2">
                <h4 className="text-center theme-primary-color">Process</h4>
                <h2 className="text-center">
                  How Does It Work{" "}
                  <span className="theme-primary-color">?</span>
                </h2>
              </div>
            </div>

            <div className="cards-container">
              <div className="container d-flex sec-cards1">
                <Card className="sec2card first-card">
                  <Card.Body className="card-content">
                    <div className=" imageStyle ">
                      <img src={icon1} />
                    </div>
                    <Card.Title className="title">
                      Record & send us
                      <br /> your files
                    </Card.Title>
                    <Card.Text className="text">
                      Make a request & send us your footage, audio & editing
                      instruct
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="sec2card second-card">
                  <Card.Body className="card-content">
                    <div className=" imageStyle ">
                      <img src={icon2} />
                    </div>
                    <Card.Title className="title">
                      Your editor works on <br /> your request
                    </Card.Title>
                    <Card.Text className="text">
                      Make a request & send us your footage, audio & editing
                      instruct
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="sec2card third-card">
                  <div className=" imageStyle ">
                    <img src={icon3} style={{ marginTop: "10px" }} />
                  </div>
                  <Card.Body className="card-content">
                    <Card.Title className="title">
                      Get your episode back
                      <br />
                      in 2-3 days
                    </Card.Title>
                    <Card.Text className="text">
                      Make a request & send us your footage, audio & editing
                      instruct
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className="sec-card2"></div>
            </div>
          </div>
          <div className="container-fluid  professional_hire2">
            <div className="row col-md-10">
              <div className="col-md-6 hiretext" style={{ marginRight: "-150px" }}>
                <div className=" trst-txt-div2 spacing">
                  <p>
                    <span className="theme-primary-color">professional</span>
                  </p>

                  <h3>
                    Hire Your <br />{" "}
                    <span className="theme-primary-color"> Professional </span>{" "}
                    <br /> Editor Today{" "}
                  </h3>

                  <div className="rowcheck">
                    <img src={check} className="check" />
                    <div className="rowcheckparaH">
                      <p className="gap2">Your Personal Editr</p>
                      <p>
                        Get assigned your own professional editor who's
                        dedicated to knowing you & your PODCAST.
                      </p>
                    </div>
                  </div>
                  <div className="rowcheck">
                    <img src={check} className="check2" />
                    <div className="rowcheckparaH">
                      <p className="gap2">Your Personal Editor</p>
                      <p>
                        Our editors will handle the technical side of your audio
                        or video podcasts, optimizing it for your hosting
                        platforms. We'll even do the uploading for you!
                      </p>
                    </div>
                  </div>

                  <div style={{ marginTop: "-30px" }}>
                    <Nav className=" main-button">
                      <Nav.Link
                        className="getStartedButton theme-primary text-white"
                        href="#getstarted"
                      >
                        GET STARTED
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <div className="carousel2 justify-content-start col-md-1 man-img spacing">
                <img src={man} alt="man" />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "-270px", transform: "scale(0.7)" }}>
            <div className="container">
              <div className=" cardheading txt-div">
                <h4 className="text-center">
                  {" "}
                  <span className="theme-primary-color text-center">
                    Our Pricing
                  </span>
                </h4>
                <h2 className="text-center">
                  Services To Make Your Podcast Look And Sound Amazing
                </h2>
              </div>
              <div className="d-flex sec-cards">
                <div className="col-md-4 pkg-card  card_height">
                  <div className="card-content1">
                    <div className="title">
                      <h3 className="">
                        <b>
                          Video Podcast
                          <br />
                          Editing
                        </b>
                      </h3>
                    </div>
                    <div className="text">
                      <p>
                        Enhance your Riverside.fm or Zoom recordings into slick
                        video podcasts
                      </p>
                      <hr />
                      <ul>
                        {data1.map((item) => {
                          return (
                            <div className="rowcheck1 " id="cardpara">
                              <img src={check} className="check1" />
                              <p>{item}</p>
                            </div>
                          );
                        })}
                      </ul>
                      <div className="paddingBtn">
                        <Nav className="justify-content-center main-button ">
                          <Nav.Link
                            className="getStartedButton theme-primary text-white"
                            href="#getstarted"
                          >
                            GET STARTED
                          </Nav.Link>
                        </Nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 pkg-card card_height1">
                  <div className="card-content1">
                    <div className="title">
                      <h3>
                        <b>
                          Audio Podcast
                          <br /> Editing
                        </b>
                      </h3>
                    </div>
                    <div className="text">
                      <p>
                        Professional audio editing, cleaning & mixing for any
                        podcast style.
                      </p>
                      <hr />
                      <ul>
                        <ul>
                          {data2.map((item) => {
                            return (
                              <div id="cardpara" className="rowcheck5">
                                <img src={check} className="check1" />
                                <p>{item}</p>
                              </div>
                            );
                          })}
                        </ul>
                      </ul>
                      <Nav className="justify-content-center main-button">
                        <Nav.Link
                          className="getStartedButton theme-primary text-white"
                          href="#getstarted"
                        >
                          GET STARTED
                        </Nav.Link>
                      </Nav>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 pkg-card card_height2">
                  <div className="card-content1">
                    <div className="title">
                      {" "}
                      <h3>
                        <b>Podcast Launch</b>
                      </h3>
                    </div>
                    <div className="text">
                      <p>The best way to launch your podcast!</p>
                      <hr />
                      <ul>
                        {data3.map((item) => {
                          return (
                            <div id="cardpara" className="rowcheck1">
                              <img src={check} className="check1" />
                              <p>{item}</p>
                            </div>
                          );
                        })}
                      </ul>
                      <div className="paddingBtn3">
                        <Nav className=" justify-content-center main-button">
                          <Nav.Link
                            className="getStartedButton theme-primary text-white"
                            href="#getstarted"
                          >
                            GET STARTED
                          </Nav.Link>
                        </Nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "-138px", transform: "scale(0.9)" }}
          className="home-section3"
        >
          <div style={{ marginBottom: "-350px" }} className="container-fluid">
            <div className="row large-audience1 col-md-12">
              <div
                style={{ marginLeft: "-70px" }}
                className="carousel2 col-md-6 woman-img spacing"
              >
                <img width={700} src={woman} alt="" />
              </div>
              <div style={{ marginTop: "70px" }} className="col-md-4">
                <div className="trst-txt-div3 spacing">
                  <p className="text-black">
                    REACH A{" "}
                    <span className="theme-primary-color">
                      {" "}
                      LARGER AUDIENCE
                    </span>
                  </p>
                  <h3>
                    Video Podcast <br />
                    Editing &{" "}
                    <span className="theme-primary-color">
                      {" "}
                      Social Clips{" "}
                    </span>{" "}
                  </h3>
                  <p>
                    Get YouTube ready episodes, and short clips to promote on
                    all your social media. We'll turn your riverside.fm or zoom
                    recordings into clean video episodes.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
          <section className="request">
            <div className=" container justify-content-center">
              <div className="row  col-md-11 sec-card3 purple-section">
                <div
                  style={{ marginTop: "-60px" }}
                  className="btn col-md-4 content"
                >
                  <h2 className="text-white">Unlimited</h2>
                  <h6 className="text-white">Requests.</h6>
                  <div style={{ marginTop: "-20px" }}>
                    <Nav
                      className="main-button requestbtn "
                      style={{ paddingLeft: "60px" }}
                    >
                      <Nav.Link
                        className="getStartedButton theme-white text-purple"
                        href="#getstarted"
                      >
                        GET STARTED
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
                <div className="singing-image col-md-7">
                  {/* <img width={600} src={unlimited} alt="" /> */}
                </div>
              </div>
            </div>
          </section>
          <div className="container-fluid third-carousel">
            <div className="container">
              <div className="txt-div3">
                <h4 className="text-center">
                  {" "}
                  <span className="theme-primary-color text-center">
                    Our Work
                  </span>
                </h4>
                <h1 className="text-center ">
                  <b>
                    Our Recent <span className="theme-primary-color">Work</span>
                  </b>
                </h1>
              </div>
            </div>
            <div className="col-md-12">
              <MultiItemCarouselscene />
            </div>
          </div>

          <div className="container ">
            <div id="taglist" className=" txt-div3 ">
              <h4 className="text-center headingpara">
                {" "}
                We have helped many business types to achieve their needs:
              </h4>
              <div id="tagalign" className=" container text-center headings1">
                <span className="para-heading ">Ads</span>
                <span className="para-heading ">Beauty & Fashion</span>
                <span className="para-heading ">Business & Marketing</span>
                <span className="para-heading ">Coaching & Education</span>
                <span className="para-heading ">Entertainment</span>
                <span className="para-heading ">Finance</span>
                <span className="para-heading ">Lifestyle</span>
                <span className="para-heading ">Health & Wellness</span>
              </div>
              <div className="container text-center headings">
                <span className="para-heading ">Real Estate</span>
                <span className="para-heading ">Tiktok & Reel</span>
                <span className="para-heading ">Youtube</span>
              </div>
            </div>

            <div className="container blogdiv d-flex justify-content-around align-items-center">
              <div className="col-md-8 blog-content">
                <p>
                  <span className="theme-primary-color ">OUR BLOGS</span>
                </p>
                <h3>
                  Browse Our Content <br />
                  On Podcast Tips &
                  <span className="theme-primary-color"> More</span>
                </h3>
              </div>

              <Nav className="main-button">
                <Nav.Link
                  id="viewbtn"
                  className="getStartedButton1 theme-primary text-white"
                  href="#getstarted"
                >
                  VIEW ALL
                </Nav.Link>
              </Nav>
            </div>
            <div className="cardalignemt blog-img1 d-flex ">
              <div className="col-md-3 blog-img-single1">
                <img src={IMG1} alt="IMG1" />
                <p>How Long Should A Podcast Episode Be?</p>
              </div>
              <div className="col-md-3 blog-img-single1">
                <img src={IMG2} alt="IMG2" />
                <p>The Art And Science Of Naming Your Podcast</p>
              </div>
              <div className="col-md-3 blog-img-single1">
                <img src={IMG3} alt="IMG3" />
                <p>Who Is Your Podcast For? Defining Your Ideal Listener</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
