import React from "react";
import { Nav } from "react-bootstrap";
import VideoThumbnail from "react-thumbnail-player";

const index = ({ Vtitle }) => {
  return (
    <div>
      {/* <section id="about-us text-center">
            <div className="container hera-What-cont">
              <div className="row">
                <div className="txt-div">
                 { Vtitle ? <h2 className="text-center">
                 Hear What Our Families 
                 <  br/>Say
                    <span className="theme-primary-color"> About Us</span>
                  </h2>  :  <h2 className="text-center">
                    Social Media Clips <br></br>In Every
                    <span className="theme-primary-color"> Shape & Size.</span>
                  </h2>}
                
                  <p className="text-center">
                    Grow your show by sharing short clips from your episode to
                    Facebook,<br/> YouTube, Instagram, Tik Tok & more!
                  </p>
                </div>

                <div className="trio-img d-flex text-center">
                  <section className='' style={{width:"100%",display: "flex", flexDirection: "row" }}>
                    <div

                      style={{

                        transform: "scale(0.7, 1.7)",
                        marginTop: "140px",
                        marginLeft: "-8%",
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
                  </section>
                </div>
              
              </div>
            </div>
          </section> */}

      <section id="mdmobdiv" className="about-us1 text-center ">
        <div className="container hera-What-cont">
          <div className="row ">
            <div id="vidtextmob" className="txt-div vid-mob-text">
              <h4 className="text-center">1,000+ SATISFIED PARENTS</h4>
              {Vtitle ? (
                <h2 className="text-center  ">
                  Hear What Our Families
                  <br />
                  Say
                  <span className="theme-primary-color"> About Us</span>
                </h2>
              ) : (
                <h2 className="text-center">
                  Social Media Clips <br></br>In Every
                  <span className="theme-primary-color"> Shape & Size.</span>
                </h2>
              )}
              <p className="text-center">
                Our editors will ensure your episodes sound professional. Audio
                cleaning, multitrack syncing, EQ, voice
                <br /> balancing, noise reduction are just some of the important
                &amp; necessary techniques for a good listening
                <br />
                experience. We want your podcast to sound as good as the best
                podcasters out there.
              </p>
            </div>

            <div className=" trio-img d-flex text-center">
              <section
                className="d-flex videomb-div"
                style={
                {
                  // background:"red",
                
                    width:"100%"
                    // transform: "scalex(0.65)",
                  }
                }
              >
                {/* <div
                id="videomb-div1"
                className="hoverbtn" 
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
                </div>
                <div
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
                  {/* <div className="hoverbtn"></div> */}
                      <video
                        id="videomb-div1"
                        style={{
                          position: "relative",
                          width: "30%",
                          marginLeft: "3%",
                          borderRadius: "5%",
                        }}
                        autoPlay="true"
                        muted="false"
                        loop
                        height="560px"
                        
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
                        loop
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
                        loop
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
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
