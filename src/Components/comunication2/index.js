import React from "react";

const index = () => {
  return (
    <div  style={{ paddingTop: "130px" }}>
      <section className="wavesCont" style={{ height: "140vh" }}>
        <div className=" container  justify-centent-center  Wave2Contant">
          <div className="container  col-md-8 wavesmain">
            <div
              className="div-align"
              style={{ marginTop: "-80px", paddingTop: "30px" }}
            >
              <h1 style={{ fontSize: "65px" }}>
                
                  Individual <span className="theme-primary-color">Launch</span>
                  <br />
                  Services
              </h1>  <span className="paraspan text-black" style={{ fontSize: "11px" }}>
                At Podcast Monkey, we care about seeing you succeed. With
                professional <br />
                and industry standard editing, marketing knowledge and podcast{" "}
                <br />
                expertise you can rest easy knowing your show will be handled
                the right way.
             </span>
              <div style={{ marginTop: "-90px" }}>
                <div  className="col-md-4 CWave2 margin-div">
                  <h3 className="" style={{ marginLeft: "9%" }}>
                    Podcast
                    <br />
                    <span className="theme-primary-color "><b>Artwork</b></span>
                  </h3>
                  <div style={{  marginLeft: "7%" }}>
                    <p
                      // className="text-gray"
                      style={{ fontSize: "11px", padding: "10px" }}
                    >
                      Make your podcast stand out with an eye catching artwork
                      for your podcast. Too many podcasts go unnoticed because
                      of a poorly design cover art. Let our team of creatives
                      craft a powerful design that aligns with your brand and
                      gets people intrigued to listen to your show!
                    </p>
                  </div>
                </div>
                <div  className="col-md-4 CWave2  margin-div2">
                <h3 className="" style={{ marginLeft: "9%" }}>
                    Video
                    <span className="theme-primary-color "><b> Trailer For</b></span>
                    <br />
                    Your Show
                  </h3>
                  <div style={{  marginLeft: "7%" }}>
                    <p
                      // className="text-gray"
                      style={{ fontSize: "11px", padding: "10px" }}
                    >
                      Promote your show with a powerful and creative trailer episode. Get people excited about your podcast & share your trailer across social media, YouTube, websites, & more!
                    </p>
                  </div>
                </div>
                <div  className="col-md-4 CWave2  margin-div3">
                  <h3 className="" style={{ marginLeft: "9%" }}>
                    Audio
                    <span className="theme-primary-color "><b> Trailer For</b></span>
                    <br />
                    Your Show
                  </h3>

                  <div style={{  marginLeft: "7%" }}>
                    <p
                      // className="text-gray"
                      style={{ fontSize: "11px", padding: "10px" }}
                    >
                      Promote your show with a powerful and creative trailer
                      episode. Get people excited about your podcast & share
                      your trailer across social media, YouTube, websites, &
                      more!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card2-div">
              <div id="margincard-div" className="col-md-4 CWave margin-div">
                <h3 className="" style={{ marginLeft: "9%" }}>
                  Video Professional
                  <br /> Show
                  <span className="theme-primary-color "><b> Intro & Outro</b></span>
                </h3>
                <div style={{  marginLeft: "7%" }}>
                  <p
                    // className="text-gray"
                    style={{ fontSize: "11px", padding: "10px" }}
                  >
                    Are you ready for a show intro that gets people excited to
                    tune in? Let our team work with you to write, produce & edit
                    an intro that gives you brand recognition just as much as
                    hearing The Office intro gets us excited to see Michael or
                    maybe even Dwight..
                  </p>
                </div>
              </div>
              <div id="margincard-div1" className="col-md-4 CWave  margin-div2">
                <h3 className="" style={{ marginLeft: "9%" }}>
                  Audio Professional
                  <br /> Show
                  <span className="theme-primary-color "><b> Intro & Outro</b></span>
                </h3>
                <div style={{  marginLeft: "7%" }}>
                  <p
                    // className="text-gray"
                    style={{ fontSize: "11px", padding: "10px" }}
                  >
                    Our team will setup your hosting & RSS feed for your podcast
                    so you're ready to go live. We'll submit your show to the
                    top directories: Spotify, Apple Podcasts, & Google Podcasts
                    (each additional directory is $25).
                  </p>
                </div>
              </div>
              <div id="margincard-div2" className="col-md-4 CWave  margin-div3">
                <h3 className="" style={{ marginLeft: "9%" }}>
                  Podcast <br />
                  <span className="theme-primary-color "><b>Consultation</b></span>
                  <span  style={{ fontSize: "9px" }}><b>(Youtube Thumbnail)</b></span>
                </h3>
                <div style={{  marginLeft: "7%" }}>
                  <p
                    // className="text-gray"
                    style={{ fontSize: "11px", padding: "10px" }}
                  >
                    Our consulting experts will you help you every step of the
                    way from choosing your mic & equipment, the format & style
                    of your show, cover artwork, tips to stand out on social
                    media and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Make your podcast stand out with an eye catching artwork for your podcast. Too many podcasts go unnoticed because of a poorly design cover art. Let our team of creatives craft a powerful design that aligns with your brand and gets people intrigued to listen to your show! */}
        </div>
      </section>
    </div>
  );
};

export default index;
