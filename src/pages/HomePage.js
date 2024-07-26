import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
      <>
        <div className='bg-image'></div>
        <div className="center">
            <h1 className="title">looking for car service?</h1>
            <p className="subtit">
                get a free quote and let professinal do all the work
            </p>
            <div className="button">
            <button><Link to="/services">explore services</Link></button>
            </div>
        </div>
      </>
  )
}

export default HomePage