import React from "react";

function Blog() {
  return (
    <div className='blogPageContain'>
      <h2 className='blogPageHeader'>My Blog</h2>
        <section className='blogContain'>
          <h3 className='blogDate'>09/24/2021</h3>
            <h4 className='blogHeader'>Python Practice</h4>
              <p className="blogBody">
              This week was my reintroduction into learning the Python language. Python was the first high-level coding language that I started to learn, and it sparked my love for coding. I had only been learning Python for a few months when I decided to take a full stack coding bootcamp centering around Javascript. Due to the bootcamp, Python fell to the wayside; but now I have decided to pick it back up. 
              </p>
              <p className="blogBody">
              Immediately I noticed a few things regarding Python as opposed to other languages I have dabbled in. The syntax is very straight-forward and similar to English, which is far more noticeable now that I have learned JS and other technologies, and I love it. Python seems built for dealing with algorithms and data as simply and efficiently as possible. Manipulating arrays, something that never clicked with me in JS, is so simple and fun. I have also noticed that when you start to learn a second coding language (much like learning a second spoken language) it is much easier to pick up, and it also helps you become a better programmer in all of the other languages you have learned previously. Through just my first week of learning Python, I have also become noticeably more confident in writing Javascript than I was before.
              </p>
              <p className="blogBody">
              My technique for learning Python is pretty simple. Before I start to jump into more advanced projects, I want to have a firm foundation. I have spent the last week watching beginner and intermediate tutorials on youtube to get a grasp of the fundamentals. This ensures that I don’t immediately dive into complex questions and get over my head, which inevitably leads me to copy and paste code without truly comprehending my work.
              </p>
              <p className="blogBody">
              This next week I plan to learn about Python extensions, such as Tkinter, to create GUI’s and manipulate data. I will also continue to work on existing projects in Javascript (I am working on a coffee website with a friend) and finish up my portfolio to be more competitive in the job hunt for a Software Engineering job.   
              </p>
              <p className="blogBody">
              Until next week... 
              </p>
        </section>
    </div>
  );
}

export default Blog;