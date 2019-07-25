import React from 'react'

import Layout from '../layouts/standard-layout'
import rauma from '../images/rauma-horseshoe.jpg'
import ski from '../images/ski.jpg'
import kayakSchool from '../images/kayak-school.jpg'
import thomasSwimming from '../images/thomas-swimming.jpg'


export default () => (
  <Layout>
    <h1>About Me</h1>
    <section>
      <h2>Professional Life</h2>
      <img style={{ minWidth: '80%', maxWidth: '95%', display: 'block', margin: '0 auto' }} src={ski} alt="Skiing" />
      
      <p>I'm a web developer specialising in designing and building full stack JavaScript applications. I am currently working at <a href="https://www.ascendfs.com/">Ascend FS</a>, working on a range of products including their charity lottery software which is used to raise money for the foundations of major Premier League clubs. Highlights include building a digital signage system used to control TV screens at some of the biggest football clubs in the UK via a web front end.</p>

      <p>I enjoy keeping up to date and learning new things and have been fortunate in my career that I have had the opportunity to experiment with new technologies and use the right tools for the job. I push myself to take on new challenges and regularly work on the edge of, or outside of my comfort zone. This has given me the skills to adapt quickly to new situations and to learn quickly on the job. My main focus is finding innovative ways to solve hard problems with technology. I put a particular emphasis on designing and implementing intuitive and robust solutions.</p>

      <p>I particularly like building products. Previously, as lead developer at <a href="http://www.gb3.co.uk">GB3</a> I built a suite of products that are used in a range of situations from safeguarding to incident management during national crisis. Building products has been a focus through my career, and even before. For my <abbr title="Master of Philosophy">MPhil</abbr> at an explosion research company, I built a flame detector that could be used to measure flame speeds during gas explosions. The aim was to create a more accurate measurement device that could be used for testing gas process equipment in a range of scenarios from slow deflagrations to detonations and could be commercialised by <a href="http://www.abershock.com/">Aber Shock</a>, the company that sponsored me. This was also my first experience of iterative design, although then the feedback loop was days! Even so, the methodical approach is very similar to the approach I take in development and I learned a lot about building a new product.</p>

      <p>After finishing my post-grad degree I joined the graduate scheme at <a href="https://www.centrica.com/">Centrica</a>. There was a heavy focus on building managerial and leadership skills. Although I've ended up going down the technical route, I learned a lot of valuable lessons in dealing with people and got to work as the lead through big changes in the company working in multi-national teams. While there, I was the graduate representative. I put a lot of effort into organising knowledge share sessions and arranged regular sessions with the senior leadership team which was an excellent opportunity to learn from them as well as organising speakers! This has always been a big focus of mine and I have arranged countless knowledge shares and lunch and learns since then. At GB3 I organised tech talks with another company that we shared an office with so both companies could grow together.</p>

      <p>I enjoy working in cross-functional teams with cutting edge technology to build world leading products. I've worked in organisations of a range of sizes with tams basid in a single location as well as distributed across the globe.</p>
    </section>

    <section>
      <h2>Personal Life</h2>

      <img style={{ minWidth: '80%', maxWidth: '95%', display: 'block', margin: '0 auto' }} src={rauma} alt="Kayaking on the Rauma" />

      <p>Outside work, I enjoy adventures. I'm a keen kayaker and have lead expeditions around the world. At university I lead trips to the Austrian, Swiss and French Alps, Ireland and the Scottish Highlands. While I was president of the kayak club, the club grew significantly to the largest sports club at the university (impressive considering kayaking is a long way from being a mainstream sport). Since then, highlights include being part of the first British kayak expedition to Madagascar where we were the first people to paddle down rivers deep in the jungle, and a 6 week trip to Norway where we paddled some of the hardest European whitewater. I have coached at national events and assessed people for national governing body awards. Over the years I have taught hundreds of people to kayak.</p>

      <img style={{ minWidth: '80%', maxWidth: '95%', display: 'block', margin: '0 auto' }} src={kayakSchool} alt="Teaching the locals to kayak in Madagascar" />
      <p>Much like at work, I like a challenge and have set myself interesting and unusual ones. This has led to me being able to do a lot of different things including juggling, swinging fire poi and playing the ukulele (which I used to play in a pub). Some of these were fun to learn but I haven't carried on with them, and others have become hobbies too such as mountain biking. I've recently started kite boarding and enjoy being out on the water after a day in front of the screen.</p>

      <p>I'm a husband and father to a 2 year old so my adventures recently have been a different sort. I love watching him grow, figuring things out for himself and changing every day. And perhaps when he is a little bigger he will be leading me on expeditions.</p>
      <img style={{ minWidth: '80%', maxWidth: '95%', display: 'block', margin: '0 auto' }} src={thomasSwimming} alt="Taking my son swimming" />
    </section>
  </Layout>
)