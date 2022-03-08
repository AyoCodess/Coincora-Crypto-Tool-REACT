import { HashLink } from 'react-router-hash-link';

export default function GoFundMe() {
  return (
    <>
      <div className='relative bg-white'>
        <div className='t-0'>
          <div className='t-y-0'>
            <img
              className='h-56 w-full xl:w-[50%] mx-auto  object-cover'
              src='https://i.imgur.com/1Ygqbom.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6'>
          <div className=' '>
            <div className='text-base xl:w-[50%] mx-auto w-6xl'>
              <h2 className='leading-6 text-appBlue font-semibold tracking-wide uppercase'>
                Project Support
              </h2>
              <h3 className='mt-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                I need your support to make this project what it's meant to be
              </h3>

              <ol className='flex flex-col my-4 gap-2 p-4 text-xl font-bold border-2 border-gray-200 rounded-md max-w-max'>
                <h3 className='text-2xl py-3'>Contents</h3>
                <HashLink smooth to='/knowledge-base/GoFundMe#myStory'>
                  <li className='hover:text-appBlue transition ease-in '>
                    1. My Story
                  </li>
                </HashLink>
                <HashLink smooth to='/knowledge-base/GoFundMe#codingForGood'>
                  <li className='hover:text-appBlue transition ease-in '>
                    2. What is #codingForGood
                  </li>
                </HashLink>
                <HashLink smooth to='/knowledge-base/GoFundMe#whatIsCoincora'>
                  <li className='hover:text-appBlue transition ease-in '>
                    3. What is Coincora
                  </li>
                </HashLink>
                <HashLink
                  smooth
                  to='/knowledge-base/GoFundMe#whyImBuildingCoincora'>
                  <li className='hover:text-appBlue transition ease-in '>
                    4. Why I'm Building Coincora
                  </li>
                </HashLink>
                <HashLink smooth to='/knowledge-base/GoFundMe#whoIsCoincoraFor'>
                  <li className='hover:text-appBlue transition ease-in '>
                    5. Who is Coincora For
                  </li>
                </HashLink>
                <HashLink
                  smooth
                  to='/knowledge-base/GoFundMe#coincoraCoreFeatures'>
                  <li className='hover:text-appBlue transition ease-in '>
                    6. Coincora Core Features
                  </li>
                </HashLink>
                <HashLink
                  smooth
                  to='/knowledge-base/GoFundMe#whereIsCoincoraGoing'>
                  <li className='hover:text-appBlue transition ease-in '>
                    7. Where is Coincora Going
                  </li>
                </HashLink>
                <HashLink
                  smooth
                  to='/knowledge-base/GoFundMe#whyDoINeedSupport'>
                  <li className='hover:text-appBlue transition ease-in '>
                    8. Why do I need Support?
                  </li>
                </HashLink>
              </ol>

              <div
                id='myStory'
                className='mt-5 prose prose-blue prose-xl text-black'>
                <p>
                  Originally from London, I am currently based in Sweden with my
                  partner - who’s a psychosomatic therapist by trade.{' '}
                </p>
                <p>
                  To cut a long but inspiring story short (hit me up if you want
                  to hear the non-abridged version), I have a speech impediment.
                  A medium to severe (depending on the situation)
                  stutter/stammer.
                </p>
                <p>
                  For most of my life, it debilitated me personally and
                  professionally. Almost leading me to the point of no return in
                  December 2016.{' '}
                </p>
                <p>
                  Thankfully, I found a way out of that and now help run a
                  charity supporting people who suffer from stuttering called
                  Stop Holding Back.
                </p>
                <p>
                  In May 2020, I quit a relatively good-paying job as a train
                  signal technician and left my friends and family behind - for
                  a shot at love with someone I met online who lived in Sweden.{' '}
                </p>
                <p>
                  All in the middle of Brexit and ehrm, a global pandemic. I
                  know, I know, some of you will think I’m crazy for it 😁
                  (spoiler, despite some hurdles, it did work out in the end).
                </p>
                <p>
                  Speaking of hurdles, there I was, in a foreign country where I
                  couldn't speak the language, and my previous job skills
                  weren’t readily applicable.{' '}
                </p>
                <p>
                  In this messy uncertainty, I was forced to try and reconnect
                  with my true desires and figure out what I wanted to do in
                  life.
                </p>
                <p>
                  After a lot of banging my head against a wall and a few mild
                  anxiety attacks, I began remembering my passion for coding.
                </p>
                <p>
                  The idea of using technology to create something that never
                  existed before intrinsically motivated me like nothing else.{' '}
                </p>
                <p>
                  To me, coding has always felt like a sort of alchemy: the
                  process of turning an abstract vision in my head into
                  something tangible and valuable that makes a difference.{' '}
                </p>
                <p>
                  As I said yes to this career path, I realised it's like a
                  superpower that was always available to me. I only had to
                  commit, do the work, and claim it. So I did (or attempting to,
                  haha).
                </p>
                <p>
                  In March 2021, I took the plunge and went 'all in' on coding.
                  I taught myself how to code to a level where I could build
                  interactive websites and basic web apps. Check this out!
                </p>
                <p>
                  This is a log of all the hours I put into my education leading
                  up to my first paid internship as a React Developer.{' '}
                </p>
                <p>
                  I also have a blog documenting the first six months of my
                  journey here. Though I’ve spent less time on it lately as I'm
                  too occupied doing ‘the actual work.’
                </p>
                <p>
                  Not gonna lie; as much as I enjoy my coding journey, it's been
                  extremely challenging to pursue projects that embody the
                  message of #codingForGood without a steady income.{' '}
                </p>
                <p>
                  I'm super excited about where I'm heading with coding, but I’m
                  at a place where the vision is too great for me to implement
                  all on my own. That’s where you come in, friend.
                </p>
                <p>
                  See, I’ve invested a lot of time and energy in creating a
                  solution that saves people from getting scammed when dealing
                  with the currencies of our future: crypto.
                </p>
                <p>
                  This project is coming together beautifully, and with the
                  proper support, I know it has the power to protect people and
                  their money in significant ways.{' '}
                </p>
                <p>
                  If this resonates with you so far, read on for more details.
                </p>
                <h2 id='codingForGood'>What is #codingForGood</h2>
                <p>
                  The “coding for good” hashtag refers to projects centered
                  around making technology accessible in ways that help
                  communities prosper.
                </p>
                <p>
                  Think solutions that aim to bring balance, health, and harmony
                  to the planet and humanity.{' '}
                </p>
                <h2 id='whatIsCoincora'>What is Coincora</h2>
                <p>
                  Coincora is a coin forecasting tool and information hub for
                  traversing the crypto market safely and securely.{' '}
                </p>
                <p>
                  It allows you to compare and analyse the crypto market quickly
                  and objectively to help facilitate wiser investments.
                </p>
                <p>
                  Simplicity is the central core value at play here. Coincora
                  strips away the techy complexity that leaves you feeling
                  perplexed, and instead offers a seamless and intuitive user
                  experience.
                </p>
                <p>
                  I’m building this game-changing platform for investors who
                  aren’t highly sophisticated in crypto. Which, let’s be honest,
                  is most of us.{' '}
                </p>
                <h2 id='whyImBuildingCoincora'>Why I'm building Coincora</h2>
                <p>
                  Like many crypto early adopters, I and countless others have
                  been ruthlessly scammed.{' '}
                </p>
                <p>
                  Sadly, our minds got hijacked by all kinds of charismatic
                  influencers. They promised we’d “get to the moon” if we
                  invested $500 in X coin and “turn it into $100,000 before ‘the
                  crash’”.{' '}
                </p>
                <p>
                  If that doesn’t sound too familiar to you, you’re either very
                  lucky or brand new to crypto.{' '}
                </p>
                <p>
                  Around 0.0001% of all crypto investors who fell for this trick
                  may have landed safely on the moon.{' '}
                </p>
                <p>
                  While the rest of us, the 99.999%, didn't even take off. We’re
                  still down here licking our wounds from all the money and
                  opportunities lost.
                </p>
                <p>
                  Some of us lost everything we had, including our trust in the
                  integrity of the crypto space as a whole.
                </p>
                <p>
                  Leaving us so traumatised by the experience that we’re scared
                  to ever return to crypto.{' '}
                </p>
                <p>
                  From this hurt place, it would be easy to assume that all of
                  crypto is a scam. But I assure you, it’s not.{' '}
                </p>
                <p>
                  The core social tech contribution of crypto, in my view, is to
                  bank the unbanked (borrowed from cardano){' '}
                </p>
                <p>
                  Allowing every person on this planet with an internet
                  connection an equal opportunity to better their quality of
                  life by participating in decentralised finance.{' '}
                </p>
                <p>
                  Giving us the ability to send, receive, earn and invest money
                  on an even playing field.{' '}
                </p>
                <p>
                  Crypto doesn’t mind where you’re from or what gender,
                  educational level, or race you are - it’s inherently
                  inclusive. How’s that for a refreshing change?!
                </p>
                <p>
                  I'm building this project primarily so newcomers can have a
                  safe and enjoyable experience when interacting with crypto for
                  the first time.{' '}
                </p>
                <p>
                  In the hopes that it will restore some trust + help them avoid
                  some, if not all, pitfalls and scams we early adopters had to
                  endure.
                </p>
                <h2 id='whoIsCoincoraFor'>Who is Coincora for</h2>
                <p>
                  The average crypto investor wants to secure their own and
                  their family's financial future.{' '}
                </p>
                <p>
                  They typically don’t have the energy or time to study crypto
                  back to front.{' '}
                </p>
                <p>
                  Their lack of knowledge makes them vulnerable to poor
                  investment choices in a super young, volatile, and largely
                  unregulated market. These unwise choices are all but
                  avoidable.{' '}
                </p>
                <p>
                  There are many crypto analysis tools out there and blogs
                  offering pathways into crypto investing.{' '}
                </p>
                <p>
                  Coincora app aims to join this wealth of information but is
                  only concerned with answering the three core questions that
                  the average crypto investor wants answers to.{' '}
                </p>
                <ol className='pl-0 font-bold text-red-500'>
                  <li>Is the coin I'm investing into a scam?</li>
                  <li>Can the coin I’m interested in make me money?</li>
                  <li>How can I protect myself from losing money in crypto?</li>
                </ol>
                <p>
                  I’m building the app on the ethos of ‘getting to the point,
                  fast.’ Hence, all the above is delivered simply and
                  user-friendly on a clear interface.{' '}
                </p>
                <h2 id='coincoraCoreFeatures'>Coincora core features</h2>
                <p>
                  Main feature: Coin Predict - Set investment return targets
                  based on current or potential investments you want to make or
                  have made, and predict if the coin can produce the returns you
                  want.{' '}
                </p>
                <p>
                  Quick Predict - Compare coins based on their market cap or
                  bitcoin market cap ratio + industry and play out different
                  scenarios to gauge what your wisest move is.
                </p>
                <h2 id='whereIsCoincoraGoing'>Where is Coincora going</h2>
                <p>
                  Coincora aims to be an interactive, invaluable hub of relevant
                  tools and information for the average crypto investor, aiding
                  wise crypto decision making.{' '}
                </p>
                <h2 id='whyDoINeedSupport'>Why do I need support?</h2>
                <p>
                  Currently, I work full-time as a React Web Developer intern
                  for a health software company based in London.{' '}
                </p>
                <p>
                  Their ethics and the projects they pursue align with my
                  #codeForGood ethos. They’re bringing about real social impact
                  through the healthcare software they build, supporting
                  hospitals and patient care services across the board.{' '}
                </p>
                <p>
                  As an intern, my earnings aren’t enough to support myself. So
                  instead of looking for other jobs to supplement my income, I’m
                  committed to birthing Coincora and helping protect people from
                  being financially burned by crypto.{' '}
                </p>
                <p>
                  With this, I aim to keep them safely and happily engaged in
                  the currency of our future.
                </p>
                <p>
                  Having been involved in crypto since 2018, I suffered some
                  devastating losses due to ignorance, greed, and lack of
                  knowledge.{' '}
                </p>
                <p>
                  I now know that it doesn’t have to be this way for newbies,
                  and I wish this kind of resource were available when I needed
                  it the most.{' '}
                </p>
                <p>
                  Crypto investing can be safe and fruitful. Coincora is here to
                  make sure of that.{' '}
                </p>
                <p>
                  If you’ve read this far, I’d like to thank you from the bottom
                  of my passionate heart for your time and support.{' '}
                </p>
                <p className='font-bold'>
                  Let’s build our wealth together,
                  <br />
                  <span
                    className='font-bold
                '>
                    Ayo
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
