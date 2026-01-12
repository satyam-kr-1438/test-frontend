import React, { Fragment } from 'react'
import Pagination from 'components/reuseable/Pagination';
import ReviewCard from 'components/reuseable/ReviewCard';
import data from 'data/product-details-page';
import RatingModal from './RatingModal';

const PackageRatingSection = () => {
  return (
    <Fragment>
           <section className="wrapper bg-light">
              <div className="container py-10 py-md-5">
                <div className="row gx-md-8 gx-xl-12 gy-10">
                  {/* ========== sidebar section ========== */}
                  <aside className="col-lg-12 sidebar">
                    <div className="widget mt-1">
                      <h4 className="widget-title mb-3">Ratings Distribution</h4>

                      <div className="mb-5">
                        <span className="ratings four" />
                        <span>4.2 out of 5</span>
                      </div>

                      <ul className="progress-list">
                        {data.ratings.map(({ star, value }) => (
                          <li key={star}>
                            <p>{star} Stars</p>
                            <div className="progressbar line blue" data-value={value} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>

                  {/* ========== reviews section ========== */}
                  <div className="col-lg-12">
                    <div className="row align-items-center mb-10 position-relative zindex-1">
                      <div className="col-12 pe-xl-20">
                        <h2 className="display-6 mb-0">Ratings &amp; Reviews</h2>
                      </div>

                    </div>

                    <div id="comments">
                      <ol id="singlecomments" className="commentlist">
                        {data.reviewList.map((item) => (
                          <ReviewCard key={item.id} {...item} />
                        ))}
                      </ol>
                    </div>
                    <div className="widget mt-4">
                      <h4 className="widget-title mb-3">Review this product</h4>
                      <p className="mb-5">Aenean eu leo quam ornare sem lacinia quam.</p>
                      <a href="#"  data-bs-toggle="modal"
                      data-bs-target="#modal-rating" className="btn btn-primary rounded " style={{maxWidth:"300px"}}>
                        Write a Review
                      </a>
                    </div>

                    {/* ========== pagination section ========== */}
                    <Pagination className="mt-10" />
                  </div>
                </div>
              </div>
          </section>
        <RatingModal/>
    </Fragment>
  )
}

export default PackageRatingSection