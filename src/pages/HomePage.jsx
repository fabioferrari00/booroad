import React from 'react';
import travels from '../../data/travels';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className='my-3 text-center'>I viaggi</h1>
        </div>
        {travels.map((travel) => {
          return (
            <div className="col-12 mb-3" >
              <Link className='text-decoration-none' to={`/travel/${travel.id}`}>
                <div className="card travel-card mb-3" key={travel.id}>
                  <div className="p-2 fs-4 header-card bg-marco">
                    {travel.city}
                  </div>
                  <div className="card-body">
                    <figure>
                      <blockquote className="blockquote">
                        <p>{travel.name}</p>
                      </blockquote>
                    </figure>
                    <figcaption className="blockquote-footer"><cite title="Source Title">{travel.startDate} - {travel.endDate}</cite>
                    </figcaption>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default HomePage
