import React from "react";
import Nav from "react-bootstrap/Nav";
import check from "../../Images/check.png";
import "react-tuby/css/main.css";
import getlet from "../../Images/getlit.png";
import MultiItemCarouselsceneSocial from "../../Components/Carousels/MultiItemCarouselsceneSocial";
import card1 from "../../Images/card1.png";
import TReels from "../../Components/reelsT";
import card2 from "../../Images/card2.png";
import "./Social.css";
import "../../App.css";
import "./responsive.css";
import Layout from "../../Layouts/Layout";
import Faq from "../../Components/faq";
import SocialPlacform from "../../Components/socialPlacform";
import SoundImage from "../../Components/soundImage";
import GetTheBest from "../../Components/getThebest";
import VideoThumbnail from "react-thumbnail-player";

const Social = () => {
  const data1 = [
    "video format suitable for Tiktok, IG Reels Youtube Shorts, or Ads",
    "Up to 60s long",
    "Up to 15 minutes of footage provided",
    "Basic Subtitles",
    "2 Days Turnaround Time",
    "Up to 15 minutes of footage provided",
    "Basic Subtitles",
    "2 Days Turnaround Time",
    
  ];
  const data2 = [
    "video format suitable for Tiktok, IG Reels Youtube Shorts, or Ads",
    "Up to 60s long",
    "Up to 60 minutes of footage provided",
    "Engaging subtitles",
    " Animations, Motion Graphics, & Emojis",
    " Use of Photos & Footage",
    " Sound Design, Mixing & Background Music",
    " Editor's Choice",
    " 2-3 days Turnaround Time",
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
  return (
    <Layout>
      <div >
        <div className="home">
        <div className="home-section1 ">
          <div className="socialTitle">
            <div
              className="container text "
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "130px",
              }}
            >
              <div id="socialheading" className="col-md-8">
                <h1 >
                  The{" "}
                  <span className="theme-primary-color shadowColor">
                    {" "}
                    Reel{" "}
                  </span>{" "}
                  Deal
                  <br />
                  Video Editing
                </h1>
                <p>
                  Do what you are great at – create content and let us focus on
                  <br />
                  engaging and consistent video editing.
                </p>
                <div className="btn-div2 d-flex">
                  <Nav className="justify-content-center main-button">
                    <Nav.Link
                      className="getStartedButton theme-primary text-white"
                      href="#getstarted"
                    >
                      GET STARTED
                    </Nav.Link>
                  </Nav>
                  <Nav className=" justify-content-center main-button border-black">
                    <Nav.Link
                      className="border-white getStartedButton text-black"
                      href="#getstarted"
                    >
                      SEE PRICING
                    </Nav.Link>
                  </Nav>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="col-md-10 text-center">
                
                <SocialPlacform />
              </div>
            </div>
          </div>

        </div>
        <div style={{paddingTop:"28rem"}} className=" container-fluid d-flex  justify-content-center">
          <div className="row col-md-10 align-items-center">
            <div id="imgcard1" className="carousel2 col-md-5 ">
              <img  width={600} src={card2} alt="" />
            </div>
            <div className="col-md-6 intro1 getitSection-cont1 justify-content-center">
              <h1>
                <b>
                  Introducing the <br />
                  new way for <br />
                  <span className="theme-primary-color">podcasters</span> to get{" "}
                  <br />
                  their shows edited <br />
                </b>
              </h1>
              <p>
                Hire your own personal editor & say goodbye to headache of
                editing. They will handle the technical side of your audio or
                video podcasts, optimizing it for your hosting platforms.
                They'll even do the uploading for you!
              </p>
            </div>
          </div>
        </div>
        <div className="getitSection ">
          <div className="container-fluid d-flex  justify-content-center">
            <div className="row  col-md-7 align-items-center">
              <div className=" intro2 col-md-8 getitSection-cont1">
                <h1>
                  <b>
                    "Get on <span className="theme-primary-color">TikTok</span>{" "}
                    &<span className="theme-primary-color"> Reels</span> while
                    it's still time”
                  </b>
                </h1>
                <p>
                  Get YouTube ready episodes, and short clips to promote on all
                  your social media. We'll turn your riverside.fm or zoom
                  recordings into clean video episodes.
                </p>
              </div>

              <div id="imgcard2" className="carousel2 col-md-3 img-alignment">
                <img width={600} src={card1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <SoundImage />
        <div className="getitSection">
          <div className="container-fluid">
            <div className="row  col-md-12">
              <div className="col-md-2"></div>

              <div className="col-md-4 getitSection-cont">
                <h1>
                  <b>
                    Get lit 🔥 <br />
                    video editing
                  </b>
                </h1>
                <p>
                  Hire your own personal editor & say goodbye to headache of
                  editing. They will handle the technical side of your audio or
                  video podcasts, optimizing it for your hosting platforms.
                  They'll even do the uploading for you!
                </p>
              </div>

              <div className=" carousel2 col-md-1 groupimg ">
                <img width={600} src={getlet} alt="" />
              </div>
            </div>
          </div>
          <div className="container-fluid third-carousel">
            <TReels />

            <div className="col-md-12">
              <div style={{ transform: "scale(1.1)" }}>
                <MultiItemCarouselsceneSocial />
              </div>
            </div>
          </div>

          <div className="container-fluid d-flex  justify-content-center">
            <div className="row  col-md-10 align-items-center">
              <div className="carousel2 intro3 col-md-6">
                <img width={600} src={card2} alt="" />
              </div>
              <div className="intro2 col-md-5 getitSection-cont1">
                <h1>
                  <b>
                    Introducing the new way for
                    <span className="theme-primary-color"> podcasters</span> to
                    get their shows edited
                  </b>
                </h1>
                <p>
                  Hire your own personal editor & say goodbye to headache of
                  editing. They will handle the technical side of your audio or
                  video podcasts, optimizing it for your hosting platforms.
                  They'll even do the uploading for you!
                </p>
              </div>
            </div>
          </div>
          <GetTheBest />
          <div className="Packages">
            <div className="container professional_hire">
              <div className="container ">
                <div  id="moneydiv" className=" txt-div">
                  <h2 className="text-center">
                    Save Money width our
                    <span className="theme-primary-color text-center">
                      {" "}
                      Launch
                    </span>{" "}
                    Package
                  </h2>
                </div>
                <div className="cardsalign container d-flex align-items-center">
                  <div className="col-md-7 Card1">
                    <div className="  text-center contentC">
                      <h3 className="titlec text-center">
                        <h3>
                          <b>Social Reels Starter</b>
                        </h3>
                      </h3>
                      <p className="para">
                        Turn your podcasts or old content into engaging social
                        media reels! Have a steady stream of short-form content
                        for your brand or podcast. Get ready to be on every
                        platform (TikTok, YouTube, Instagram, Facebook)
                      </p>
                      <h1>
                        <span className="theme-primary-color text-center">
                          <b>$499/mo</b>
                        </span>
                      </h1>
                      <p>Save $1259 when paid annually</p>
                      <hr />
                      <ul className="itemdiv">
                        {data1.map((item) => {
                          return (
                            <div className="rowcheck1">
                              <img src={check} className="check1" />
                              <p>{item}</p>
                            </div>
                          );
                        })}
                      </ul>

                      <Nav className="justify-content-center main-button paddingBtn">
                        <Nav.Link
                          className="getStartedButton theme-primary text-white"
                          href="#getstarted"
                        >
                          GET STARTED
                        </Nav.Link>
                      </Nav>
                    </div>
                  </div>
                  <div id="secontcard" className="col-md-7 Card2">
                    <div className="  text-center contentC">
                      <h3 className="titlec text-center">
                        <h3>
                          <b>Social Reels - Advanced</b>
                        </h3>
                      </h3>
                      <p className="para">
                        Turn your podcasts or old content into engaging social
                        media reels! Have a steady stream of short-form content
                        for your brand or podcast. Get ready to be on every
                        platform (TikTok, YouTube, Instagram, Facebook)
                      </p>
                      <h1>
                        <span className="theme-primary-color text-center">
                          <b>$499/mo</b>
                        </span>
                      </h1>
                      <p>Save $1259 when paid annually</p>
                      <hr />
                      <ul className="itemdiv">
                        {data2.map((item) => {
                          return (
                            <div className="rowcheck1">
                              <img src={check} className="check1" />
                              <p>{item}</p>
                            </div>
                          );
                        })}
                      </ul>

                      <Nav className="justify-content-center main-button paddingBtn">
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
                <div className="d-flex justify-content-center">
                  <div className="col-md-8 Card3">
                    <div className="break text-center">
                      <h2>
                        <b>
                          Social Reels Plans/Pricing
                          <br />
                          <span className="theme-primary-color text-center">
                            Breakdown
                          </span>
                        </b>
                      </h2>
                    </div>
                    <div
                      className="col-md-12"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "140px 40px 50px 40px ",
                      }}
                    >
                      <div className="col-md-20 itemcol">
                        <h4><b>
                          Audio Episode Editing</b></h4>
                        <span>Plan Price</span>
                        <span>Simple Reels</span>
                        <span>Complex Reels</span>
                      </div>
                      <div className="col-md-20 itemcol2">
                        <h4><b>Starter</b></h4>
                        <span>$400</span>

                        <span>121</span>
                        <span>06</span>
                      </div>
                      <div className="col-md-20 itemcol2">
                        <h4><b>Pro</b></h4>
                        <span>$400</span>
                        <span>12</span>
                        <span>06</span>
                      </div>
                      <div className="col-md-20 itemcol2">
                        <h4><b>Scale</b></h4>
                        <span>$400</span>

                        <span>124</span>
                        <span>06</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="mdmobdiv" className="about-us text-center ">
            <div className="container hera-What-cont">
              <div className="row">
                <div  id="vidtextmob" className="txt-div">
                  <h4 className="text-center">1,000+ SATISFIED PARENTS </h4>
                  <h2 className="text-center">
                    Hear What Our Families <br /> Say{" "}
                    <span className="theme-primary-color">About Us</span>
                  </h2>
                  <p className="text-center">
                    Our editors will ensure your episodes sound professional.
                    Audio cleaning, multitrack syncing, EQ, voice<br/> balancing,
                    noise reduction are just some of the important &amp;
                    necessary techniques for a good listening <br/>experience. We
                    want your podcast to sound as good as the best podcasters
                    out there.
                  </p>
                </div>

                <div className="trio-img d-flex text-center">
                    <section
                      id="video-item"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        transform: "scale(0.85)",
                      }}
                    >
                      {/* <div className="hoverbtn"></div> */}
                      <video
                        id="videomb-div1"
                        style={{
                          position: "relative",
                          width: "30%",
                          marginLeft: "3%",
                          borderRadius: "5%",
                        }}
                        height="560px"
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
                      {/* <div className="hoverbtn1"></div> */}
                      <video
                        id="videomb-div1"
                        style={{
                          width: "30%",
                          marginLeft: "3%",
                          borderRadius: "5%",
                        }}
                        height="560px"
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
                      {/* <div className="hoverbtn2"></div> */}

                      <video
                        id="videomb-div1"
                        style={{
                          width: "30%",
                          marginLeft: "3%",
                          borderRadius: "5%",
                        }}
                        height="560px"
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
                      {/* <div
                    className="video-1"
                      style={{
                        transform: "scale(0.7, 1.7)",
                        marginTop: "140px",
                        marginLeft: "-200px",
                      }}
                    >
                      <VideoThumbnail
                        title=""
                        message=""
                        videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
                        width={600}
                        height={120}
                      />
                    </div>

                    <div
                    className="video-2"
                      style={{
                        transform: "scale(0.7, 1.7)",
                        marginTop: "140px",
                        marginLeft: "-130px",
                      }}
                    >
                      <VideoThumbnail
                        title=""
                        message=""
                        videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
                        width={600}
                        height={120}
                      />
                    </div>
                    <div
                    className="video-2"
                      style={{
                        transform: "scale(0.7, 1.7)",
                        marginTop: "140px",
                        marginLeft: "-130px",
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

        <Faq />
      </div>
      
      </div>
      
    </Layout>
  );
};

export default Social;
