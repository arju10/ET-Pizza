import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import HomeMenu from './components/layout/HomeMenu'
import SectionHeaders from './components/layout/SectionHeaders'

export default function Home () {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      {/* About US */}
      <section className='text-center my-16'>
        <SectionHeaders subHeader={'Our Story'} mainHeader={'About Us'} />
        <div className='text-gray-500 mx-w-2xl mx-w-md mt-4 flex flex-col gap-4'>
          <p>
            Welcome to our delicious world of pizzas! We take pride in crafting
            the finest pizzas using the freshest ingredients to satisfy your
            cravings. Our journey began with a passion for creating the perfect
            pizza experience.
          </p>
          <p>
            At our pizzeria, we believe in delivering not just a meal, but a
            delightful experience. From classic Margherita to unique
            specialities, each pizza is a masterpiece that reflects our
            commitment to quality and taste. Join us on this flavorful
            adventure!
          </p>
        </div>
      </section>

      {/* Contact US */}
      <section className='text-center my-8'>
        <SectionHeaders subHeader={'Don\'t hesitate'}
          mainHeader={'Contact Us'}
        />
        <div className='mt-8'>
        <a href='tel:+8801749782201' className='text-4xl underline text-gray-500'>+88 01749782201</a>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  )
}
