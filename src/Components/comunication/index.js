import React from 'react'

const index = () => {
  return (
    <div>
            <section className="wavesCont">
              <div className=" container wavesmain   Wave2Contant">
                <div className="container  col-md-9 wavesmain">
                  <div className="div-align">
                    <h1>
                      Easy Communication
                      <br />
                      with your
                      <br />
                      <span className="theme-primary-color">
                        {" "}
                        Expert Editor.
                      </span>
                    </h1>
                    <p className="text-black">
                      Easy collaboration-communicate with your editor in real
                      time during
                      <br />
                      business hours via Slack.
                    </p>
                  </div>
                  <div className="col-md-4 Wave2">
                    <div className='text-start'>

                    <h6  id='podcasthead' style={{marginLeft:"18%",marginTop:"30px"}}>
                    <span className="theme-primary-color">  Podcasters</span>
                      <span className="text-gray"> We Work With</span>
                    </h6>
                    </div>
                    <div className="items" style={{marginTop:"-20px"}}>

                    <p><b>✓ Real Estate</b></p>
                    <p><b>✓ Education</b></p>
                    <p><b>✓ Politics</b></p>
                     <p><b>✓ Business</b></p>{" "}
                    <p><b>✓ Entrepreneurship</b></p>
                     <p><b>✓ Storytelling</b></p>
                    <p><b>✓ Health Care</b></p>
                    <p><b>✓ Health & Fitness</b></p>
                    <p><b>✓Crime & History</b></p>
                    <p><b>✓ Religious</b></p>
                    <p><b>✓ Tech</b></p>
                    <p><b>✓ And more!</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default index