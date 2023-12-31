import React from 'react'
import Title from './Title'
import { tours } from '../data'

const Tours = () => {
  return (
    <>
      <section class="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div class="section-center featured-center">
          {tours.map((tour) => {
            const { id, img, date, title, text, place, days, cost } = tour
            return (
              <article class="tour-card" key={id}>
                <div class="tour-img-container">
                  <img src={img} class="tour-img" alt="" />
                  <p class="tour-date">{date}</p>
                </div>
                <div class="tour-info">
                  <div class="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div class="tour-footer">
                    <p>
                      <span>
                        <i class="fas fa-map"></i>
                      </span>
                      {place}
                    </p>
                    <p>{days} days</p>
                    <p>from {cost}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Tours
