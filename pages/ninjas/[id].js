export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((ninja) => ({
    params: {
      id: ninja.id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/' + params.id
  )
  const data = await res.json()
  return {
    props: { ninja: data },
  }
}

const Details = ({ ninja }) => {
  console.log(ninja)
  return (
    <div>
      <h1>Details Page</h1>

    </div>
  )
}

export default Details
