// similar to React, I can pass a 'props' object to the component
// in this case the info come from 'getStaticProps'
const Home = ({ quote }) => {
  return (
    <div>{JSON.stringify(quote)}</div>
  )
}

export const getStaticProps = async () => {
  // fetch data from API at built time
  // NextJS will create static pages that contains that data
  const res = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
  const quote = await res.json()

  // we return an object
  // with a key props and inside another object
  // where pass what we want to export to our component
  return {
    props: {
      quote,
    }
  }
}

export default Home;